# CodeSnippets

Collection of small, reusable snippets grouped by language and feature.

## Organization Pattern

- Language folders are lowercase: `html`, `js`, `python`, `react`, `ts`.
- Snippet folders use kebab-case names.
- Each snippet folder should include its own `README.md` and source files.
- HTML snippets should prefer `index.html` as the demo entry file.

## Current Structure

```text
CodeSnippets/
├── html/
│   ├── copy-to-clipboard/
│   │   ├── index.html
│   │   └── README.md
│   └── progressive-signup-form/
│       ├── index.html
│       └── README.md
├── js/
│   ├── particles/
│   │   ├── particles.js
│   │   └── README.md
│   └── pg-db-connection/
│       ├── db.js
│       ├── .env.example
│       └── README.md
├── python/
│   ├── api-request-helper/
│   │   ├── api-request-helper.py
│   │   └── README.md
│   └── data-handling/
│       ├── data-handling.py
│       └── README.md
├── react/
│   └── copy-to-clipboard/
│       ├── CopyToClipboard.jsx
│       └── README.md
└── ts/
   ├── demapper/
   │   ├── demapper.ts
   │   └── README.md
   ├── format-date/
   │   ├── formatDate.ts
   │   └── README.md
   ├── particles/
   │   ├── particles.ts
   │   └── README.md
   ├── scheduler/
   │   ├── scheduler.ts
   │   └── README.md
   ├── string-tools/
   │   ├── stringTools.ts
   │   └── README.md
   └── timer/
      ├── timer.ts
      └── README.md
```

## How to Use

1. Open a snippet folder under its language directory.
2. Read the local `README.md` when available.
3. Copy or adapt the snippet for your project.

## License

This repository is licensed under the MIT License. See `LICENSE`.
