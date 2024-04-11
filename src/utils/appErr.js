class AppErr extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOpretional = true;
    this.message = message
   Error.captureStackTrace(this, this.constructor);
  }
}
export default AppErr;
