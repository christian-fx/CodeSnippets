# Multer Config (JavaScript)

Multer storage setup snippet for handling file uploads with either disk storage or memory storage.

## Files

- `multer.js`

## Behavior

- Creates a disk storage configuration using `multer.diskStorage`.
- Saves uploaded files to the `uploads/` directory.
- Generates unique filenames using field name, timestamp/random suffix, and original file name.
- Provides an in-memory Multer instance using `multer.memoryStorage()`.
- Limits in-memory upload size to 5 MB.

## Usage

1. Install Multer:

```bash
npm install multer
```

2. Import the snippet into your Express app and expose the configuration you want to use.

3. Example route usage:

```js
const express = require('express');
const app = express();

// Example: if you export `memoryStorage` from multer.js
const { memoryStorage } = require('./multer');

app.post('/upload', memoryStorage.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({
    message: 'Upload successful',
    filename: req.file.originalname,
    size: req.file.size,
  });
});
```

## Notes

- Ensure the `uploads/` folder exists before using disk storage.
- Use memory storage for smaller files or immediate processing workflows.
- For production, add file type validation and stronger size/security checks.
