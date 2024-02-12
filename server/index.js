import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import Router from './routes/route.js';
import cors from 'cors'

dotenv.config();

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is started at port ${PORT}`));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);