import express from 'express';
import cors from 'cors'
import routes from './routes'

const app = express();
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', routes);

app.listen(PORT, ()=> console.log(`Running on Port ${ PORT }`));






