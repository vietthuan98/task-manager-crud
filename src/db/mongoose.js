require('dotenv').config();
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
