# Cloudinary Config (JavaScript)

Cloudinary helper snippet for configuring credentials, uploading files from in-memory buffers, and deleting uploaded assets.

## Files

- `cloudinary.js`

## Behavior

- Configures Cloudinary using environment variables.
- Uploads files from `file.buffer` using `cloudinary.uploader.upload_stream`.
- Returns normalized upload metadata (`url`, `publicId`, `mimeType`, and more).
- Supports parallel multi-file uploads with `Promise.all`.
- Provides a delete helper that removes assets by `public_id`.

## Usage

1. Install dependency:

```bash
npm install cloudinary
```

2. Set environment variables:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

3. Use the upload helper with files from memory storage (for example, from Multer memory storage):

```js
// Example usage inside an async route/controller
const uploaded = await uploadFromBuffer(req.file);

const uploadedFiles = await Promise.all(
  req.files.map((file) => uploadFromBuffer(file))
);
```

4. Delete an asset when needed:

```js
await deleteFromCloudinary(publicId);
```

## Notes

- This snippet expects files shaped like Multer memory files (`fieldname`, `originalname`, `mimetype`, `size`, `buffer`).
- Prefer memory upload only for reasonably sized files.
- Add explicit file type and size validation before uploading.
- Export the helper functions if you want to import them from other modules.
