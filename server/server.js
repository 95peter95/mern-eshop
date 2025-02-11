import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler} from './middleware/errorMiddleware.js';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT || 8000;

connectDB(); //conn mongoDB

const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));