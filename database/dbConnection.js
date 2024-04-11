import mongoose from 'mongoose';

const connection = async () => {
  mongoose.set('strictQuery', true);
  return await mongoose
    .connect('mongodb://127.0.0.1:27017/certificate')
    .then(() => {
      console.log('connected to database');
    })
    .catch((err) => {
      console.log('not connexted');
    });
};
export default connection;