# Legacy CSS boundary

This directory is the explicit boundary around styles inherited from the generated landing page.

- `generated-layout.css` is frozen generated output. Do not edit it as an application stylesheet.
- `compat.css` is import-only and loads compatibility patches after all primary module styles.
- Every compatibility patch lives beside its owner as `*.legacy.css`.
- New or redesigned styles belong in the owner's primary `.css` file, never in a legacy patch.
- Existing legacy rules may be removed as sections are migrated. Growing the compatibility layer requires an explicit boundary-manifest change.

Run `npm run check:css-boundaries` to verify the boundary.
