# Copy to Clipboard Snippets

This folder contains a simple, reusable user interface for copying text to the clipboard. The snippet includes a beautiful Tailwind CSS design along with bulletproof copy logic that works on local devices (like `file:///`) and on production web servers.

Because your project stack might differ, there are two exact replicas of the same snippet available:

1. **Vanilla HTML / JavaScript** -> `index.html`
2. **React + JSX** -> `CopyToClipboard.jsx`

---

## 1. Using the Vanilla HTML Version (`index.html`)

The HTML version relies strictly on static HTML and Vanilla JavaScript. It uses the Tailwind CSS CDN link for rapid styling, which is perfect for trying it out without a build process.

**To preview:**
Double-click `index.html` on your computer to open it in your browser.

**To implement:**
1. Copy the main widget code starting from `<div class="bg-white ...">` to `</div>`.
2. Paste it into your webpage.
3. Make sure to copy the `<script>` tag located at the bottom of `index.html`. This script handles exactly how the clipboard interacts with the `copy` button and falls back to older methods (`document.execCommand`) if secure contexts aren't met.
4. If you don't already have Tailwind CSS installed, load the CDN: `<script src="https://cdn.tailwindcss.com"></script>`.

---

## 2. Using the React Version (`CopyToClipboard.jsx`)

The React file has identically replicated the Tailwind classes but utilizes React hooks (`useState` and `useRef`) instead of `document.getElementById()`.

**To implement:**
1. Drop the `CopyToClipboard.jsx` file straight into your React application's `components` directory.
2. In your App, simply map and import the component like so:

```jsx
import React from 'react';
import CopyToClipboard from './components/CopyToClipboard';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* You can optionally add a custom text directly to the component */}
      <CopyToClipboard textToCopy="Allwell Azubike" />
    </div>
  );
}
```

### Notes & Features
- **Local Error Prevention:** Modern `navigator.clipboard` APIs will throw errors when hosted off of absolute local files (instead of testing on a local server like `localhost` or real HTTPS domains). Both snippets in this folder include secure fallbacks seamlessly built-in!
- **State Changes:** Text seamlessly transforms visually depending on the state of the component (`"Copy"` -> `"Copied!"`) alongside small SVG icons fading into the viewport.
