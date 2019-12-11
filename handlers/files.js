const randomString = require('randomstring');

const UploadFile = (req, res) => {
    var file = req.files.file;

    console.log(file)
    if(file.size > 10 * 1024 * 1024){
        return res.status(500).send('File size too large')
    }

    var allowedTypes = [
    'image/png', 
    'image/jpg', 
    'image/jpeg', 
    'image/pjpeg', 
    'image/gif'
    ];

    if(allowedTypes.indexOf(file.mimetype) == -1){
        return res.status(500).send('File type not on the list')
    };

    var prefix = randomString.generate({
        length: 10,
        charset: 'alphanumeric'
    });

    file.mv(`./uploads/${prefix}_${file.name}`, err => {
        if(err){
            console.log(err)
            res.status(500).send('Internal server error');
        }
        return res.status(200).send('OK');
        
    });
};

module.exports = { 
    UploadFile
};  