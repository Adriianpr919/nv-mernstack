const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadsSized');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.png`);
    },
});

let upload = multer({ storage });

module.exports = upload;