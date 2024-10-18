import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import redirectRouter from './routes/redirect.routes';
import 'dotenv/config';

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', redirectRouter);
app.use('/api', router);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
