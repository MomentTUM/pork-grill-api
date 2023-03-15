const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images")
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() +
        "" +
        Math.round(Math.random() * 1000000000) +
        "." +
        file.mimetype.split("/")[1]
    )
  },
})

// const fileFilter = (req,file,cb) => {
//     if (file.mimetype !== 'image/jpg') {
//         cb(new Error('image file only'))
//     }
// }

module.exports = multer({ storage })
