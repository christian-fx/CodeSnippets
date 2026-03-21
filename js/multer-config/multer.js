const multer = require('multer');


// THIS STORAGE CONFIGURATION IS USED TO SPECIFY
// WHERE THE UPLOADED FILES SHOULD BE STORED AND
// HOW THEY SHOULD BE NAMED. IN THIS CASE, THE
// FILES WILL BE STORED IN THE 'UPLOADS/'
// DIRECTORY, AND THE FILENAME WILL BE A
// COMBINATION OF THE FIELD NAME, A UNIQUE SUFFIX,
// AND THE ORIGINAL FILENAME TO AVOID NAME COLLISIONS.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});


// THIS INSTANCE IS USED FOR IN-MEMORY STORAGE,
// WHICH MEANS THAT THE UPLOADED FILES WILL BE
// STORED IN MEMORY AS BUFFER OBJECTS. THIS IS
// USEFUL FOR TEMPORARY STORAGE OR WHEN YOU WANT
// TO PROCESS THE FILES IMMEDIATELY WITHOUT WRITING THEM TO DISK.
const memoryStorage = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // LIMIT FILE SIZE TO 5MB
});

// THIS IS VERY USEFUL FOR HANDLING SMALL SIZE FILE UPLOADS, PROCESSING THEM IN MEMORY ONLY.
