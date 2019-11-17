import mongoose from 'mongoose';

const connection = 'mongodb://localhost:27017/sync';

const connectDb = () => {
  return mongoose.connect(connection);
};

export default connectDb;
