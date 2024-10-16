import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
