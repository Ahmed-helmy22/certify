import AppErr from "./AppErr.js";


const handleErrDBCast = (err) => {
  const message = `invalid${err.path} ${err.value}`;
  return new AppErr(message, 400);
};
const handleDuplicateFeildDB = (err) => {
  const value = Object.keys(err.keyValue)[0];
  const message = `this ${value} is duplicated , use another value`;
  return new AppErr(message, 400);
};

const handleJwt = (err) => {
  const message = `invalid login, please login again, ${err.name}`;
  return new AppErr(message, 401);
};
const handleJwtExpiration = () => {
  const message = `login is expired ,please log again`;
  return new AppErr(message, 401);
};

const handleValidationDB = (err) => {
  const error = Object.values(err.errors).map((el) => el.message);
  const message = error.join(' ,');
  return new AppErr(message, 400);
};

const sendErrProduction = (err, res) => {
  if (err.isOpretional) {
    console.log(err);
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //log the error
    console.log('error', err.message);
    // send a dummy res to the client
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
};
const sendErrDevelpment = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    name: err.name,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

 const errorController = (err, req, res, next) => {
  console.log(err);
  err.statusCode = err.statusCode || 500; //internal server error
  err.status = err.status
  if (process.env.NODE_ENV == 'development') {
    sendErrDevelpment(err, res);
  } else if (process.env.NODE_ENV == 'production') {
    console.log(err);
   // let error = JSON.parse(JSON.stringify(err))
    if (err.name === 'CastError') err = handleErrDBCast(err); //for requesting wrong id
    if (err.code === 11000) err = handleDuplicateFeildDB(err); // post the same name of tour
    if (err.name === 'ValidationError') err = handleValidationDB(err); //vlidtion error
    if (err.name === 'JsonWebTokenError') err = handleJwt(err); //vlidtion error
    if (err.name === 'TokenExpiredError') err = handleJwtExpiration(); // err expiration time for the token
    sendErrProduction(err, res);
  }
};


export  default errorController