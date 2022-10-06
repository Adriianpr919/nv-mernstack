const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadsSize');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.png`);
    },
});

var upload = multer({ storage });

module.exports = upload;