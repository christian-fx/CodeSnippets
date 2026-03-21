const cloudinary = require('cloudinary').v2;

// CONFIGURE CLOUDINARY WITH YOUR CREDENTIALS
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // YOUR CLOUDINARY CLOUD NAME
    api_key: process.env.CLOUDINARY_API_KEY, // YOUR CLOUDINARY API KEY
    api_secret: process.env.CLOUDINARY_API_SECRET // YOUR CLOUDINARY API SECRET
});



// FUNCTOION TO UPLOAD A FILE FROM A BUFFER TO CLOUDINARY
const uploadFromBuffer = (file) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            resource_type: 'auto'
        }, (error, result) => {
                if (error) return reject(error);

                resolve({
                    field: file.fieldname,
                    originalName: file.originalname,
                    mimeType: file.mimetype,
                    size: file.size,
                    url: result.secure_url,
                    publicId: result.public_id
                });
            }
        );
        stream.end(file.buffer);
    });
}
// YOU CAN USE THIS FUNCTION WITH A FOR LOOP
// TO UPLOAD MULTIPLE FILES IN PARALLEL, AND
// IT WILL RETURN AN ARRAY OF UPLOADED FILES WITH THEIR DETAILS.
// FOR EXAMPLE:
let uploadedFiles = [];
if (articleFiles.length > 0) {
    uploadedFiles = await Promise.all(
        articleFiles.map(file => uploadFromBuffer(file))
    );
}



// CLOUDINARY DELETE FUNCTION (FOR CLEANUP CREW)
const deleteFromCloudinary = async (public_id) => {
    try {
        const result = await cloudinary.uploader.destroy(public_id);
        console.log(`Deleted from Cloudinary: ${public_id}`, result);
    } catch (err) {
        console.error(`Error deleting ${public_id} from Cloudinary:`, err);
    }
}

module.exports = {
    uploadFromBuffer,
    deleteFromCloudinary,
    cloudinary
};
