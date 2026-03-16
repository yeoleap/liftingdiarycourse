# UI Coding Standards

## Component Library

**Only shadcn/ui components may be used for UI in this project.**

- Do NOT create custom components. If a UI element is needed, find the appropriate shadcn/ui component.
- If a required component is not yet installed, add it via `npx shadcn@latest add <component>`.
- Components live in `src/components/ui/` and must not be modified beyond what shadcn scaffolds.

## Date Formatting

All date formatting must use **date-fns**.

Dates must be displayed in the following format:

```
1st Sep 2025
2nd Aug 2025
3rd Jan 2026
4th Jun 2024
```

Use `format` from `date-fns` with the `do MMM yyyy` format token:

```ts
import { format } from 'date-fns';

format(date, 'do MMM yyyy'); // "1st Sep 2025"
```

Do not use `toLocaleDateString`, `Intl.DateTimeFormat`, or any other date formatting method.
