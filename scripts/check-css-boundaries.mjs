import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const errors = []

const retiredFiles = ['src/styles/overrides.css', 'src/styles/generated-layout.css']

const frozenGeneratedFiles = {
  'public/assets/css/38d310b04484773c.css':
    'b8363a6b65e3e1330cd8fdc755356429f95e114ceb2f97f4119bd41536c92f51',
  'public/assets/css/large-screens.css':
    'f8072a23db2502e71c1e15cada718554adbfeda03e0ac4806c5fa8e22c402607',
  'src/styles/legacy/generated-layout.css':
    '6bf7e9c6277ee50889e58fd8ea45d9bce4e4a17bb5f95ee92b33e0cf19d7f32d',
}

const ownedLegacyFiles = {
  'src/layout/Footer/Footer.legacy.css': { maxLines: 63, roots: ['#footer'] },
  'src/layout/Header/Header.legacy.css': { maxLines: 140, roots: ['#header'] },
  'src/sections/Compare/Compare.legacy.css': { maxLines: 133, roots: ['#compare'] },
  'src/sections/Cta/Cta.legacy.css': { maxLines: 21, roots: ['#cta'] },
  'src/sections/Faq/Faq.legacy.css': { maxLines: 39, roots: ['#faq'] },
  'src/sections/Features/Features.legacy.css': { maxLines: 92, roots: ['#features'] },
  'src/sections/Hero/Hero.legacy.css': { maxLines: 90, roots: ['#hero'] },
  'src/sections/Logos/Logos.legacy.css': { maxLines: 48, roots: ['#logos'] },
  'src/sections/Process/Process.legacy.css': { maxLines: 65, roots: ['#process'] },
  'src/sections/Roadmap/Roadmap.legacy.css': { maxLines: 42, roots: ['#roadmap'] },
  'src/sections/UseCases/UseCases.legacy.css': {
    maxLines: 201,
    roots: ['#use-cases', '#uc-tab-'],
  },
  'src/shared/ui/CookieBanner/CookieBanner.legacy.css': {
    maxLines: 6,
    roots: ['.dds-cookie'],
  },
}

const expectedCompatibilityImports = [
  "@import '../../layout/Header/Header.legacy.css';",
  "@import '../../layout/Footer/Footer.legacy.css';",
  "@import '../../shared/ui/CookieBanner/CookieBanner.legacy.css';",
  "@import '../../sections/Hero/Hero.legacy.css';",
  "@import '../../sections/Logos/Logos.legacy.css';",
  "@import '../../sections/Process/Process.legacy.css';",
  "@import '../../sections/UseCases/UseCases.legacy.css';",
  "@import '../../sections/Compare/Compare.legacy.css';",
  "@import '../../sections/Features/Features.legacy.css';",
  "@import '../../sections/Roadmap/Roadmap.legacy.css';",
  "@import '../../sections/Faq/Faq.legacy.css';",
  "@import '../../sections/Cta/Cta.legacy.css';",
]

const knownOwnerRoots = [
  '#header',
  '#footer',
  '#hero',
  '#logos',
  '#process',
  '#use-cases',
  '#uc-tab-',
  '#compare',
  '#features',
  '#roadmap',
  '#faq',
  '#cta',
  '.dds-cookie',
]

const toAbsolutePath = (filePath) => path.join(projectRoot, filePath)
const countLines = (content) => content.split('\n').length - Number(content.endsWith('\n'))
const hash = (content) => createHash('sha256').update(content).digest('hex')
const stripComments = (content) => content.replace(/\/\*[\s\S]*?\*\//g, '')

async function readProjectFile(filePath) {
  try {
    return await readFile(toAbsolutePath(filePath), 'utf8')
  } catch {
    errors.push(`Missing required CSS boundary file: ${filePath}`)
    return null
  }
}

async function findLegacyFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await findLegacyFiles(entryPath)))
    else if (entry.name.endsWith('.legacy.css')) files.push(path.relative(projectRoot, entryPath))
  }

  return files
}

for (const filePath of retiredFiles) {
  try {
    await readFile(toAbsolutePath(filePath))
    errors.push(`Retired catch-all CSS file must not return: ${filePath}`)
  } catch {
    // Expected: the retired file does not exist.
  }
}

for (const [filePath, expectedHash] of Object.entries(frozenGeneratedFiles)) {
  const content = await readProjectFile(filePath)
  if (content !== null && hash(content) !== expectedHash) {
    errors.push(`Generated legacy CSS changed: ${filePath}`)
  }
}

const actualLegacyFiles = (await findLegacyFiles(path.join(projectRoot, 'src'))).sort()
const expectedLegacyFiles = Object.keys(ownedLegacyFiles).sort()

if (JSON.stringify(actualLegacyFiles) !== JSON.stringify(expectedLegacyFiles)) {
  errors.push(
    'The set of owned *.legacy.css files changed; update the CSS boundary manifest explicitly.',
  )
}

for (const [filePath, boundary] of Object.entries(ownedLegacyFiles)) {
  const content = await readProjectFile(filePath)
  if (content === null) continue

  const lineCount = countLines(content)
  if (lineCount > boundary.maxLines) {
    errors.push(
      `${filePath} grew from its ${boundary.maxLines}-line migration budget to ${lineCount}.`,
    )
  }

  const uncommented = stripComments(content)
  for (const ownerRoot of knownOwnerRoots) {
    if (uncommented.includes(ownerRoot) && !boundary.roots.includes(ownerRoot)) {
      errors.push(`${filePath} contains a selector owned by another module: ${ownerRoot}`)
    }
  }
}

const compatibilityPath = 'src/styles/legacy/compat.css'
const compatibilityContent = await readProjectFile(compatibilityPath)

if (compatibilityContent !== null) {
  const manifestStatements = stripComments(compatibilityContent)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (JSON.stringify(manifestStatements) !== JSON.stringify(expectedCompatibilityImports)) {
    errors.push(
      `${compatibilityPath} must remain an import-only manifest with the approved owners.`,
    )
  }
}

const mainContent = await readProjectFile('src/main.tsx')
if (mainContent !== null) {
  const cssImports = [...mainContent.matchAll(/import ['"](.+\.css)['"]/g)].map((match) => match[1])
  if (cssImports.at(-1) !== './styles/legacy/compat.css') {
    errors.push('The legacy compatibility manifest must be the final CSS import in src/main.tsx.')
  }
}

const indexContent = await readProjectFile('index.html')
if (indexContent !== null) {
  for (const href of ['/assets/css/38d310b04484773c.css', '/assets/css/large-screens.css']) {
    if (!indexContent.includes(`href="${href}"`)) {
      errors.push(`index.html must keep the frozen legacy stylesheet link: ${href}`)
    }
  }
}

if (errors.length > 0) {
  console.error(`CSS boundary check failed:\n- ${errors.join('\n- ')}`)
  process.exitCode = 1
} else {
  console.log('CSS boundaries are valid.')
}
