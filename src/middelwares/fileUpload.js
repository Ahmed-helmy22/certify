/// multer
import multer from 'multer';
import AppErr from '../utils/AppErr.js';

let options = (path) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, `public/${path}`);
    },
    filename(req, file, cb) {
      const fileName = Date.now() + Math.random() * 1000 + file.originalname;
      cb(null, fileName);
    },
  });

  function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppErr('the file must be of type image', 400), false);
    }
  }

  return multer({ storage, fileFilter });
};

export const fileUpload = (MyFileName, path) => {
  return options(path).single(MyFileName);
};

export const multiFileUpload = (myArrayOfFields, path) => {
  return options(path).fields(myArrayOfFields);
};
