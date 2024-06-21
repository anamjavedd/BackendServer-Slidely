import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app: Application = express();
const port: number = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
