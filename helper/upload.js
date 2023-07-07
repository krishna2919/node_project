// const express=require('express');
// const user=require('../model/registrationSchema');
// const router=express.Router();
// const registrationRoute=require('../controller/registrationRoute');
// const validate=require('../validation/userValidation');
// const multer=require('multer');

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer(
//     { storage: storage }
    
//     );
 

 
 
// app.post('/', upload.single('image'), (req, res, next) => {
 
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgSchema.create(obj)
//     .then ((err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/');
//         }
//     });
// });
 