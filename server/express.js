import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';


const app = express()
/*...configure express...*/
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cookieParser())
    .use(compress())
    .use(helmet())
    .use(cors());

app.get('/', (req, res) => {
    res.status(200).send(Template())
});

app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({'error': err.name + ': ' + err.message})
    } else if (err) {
        res.status(400).json({'error': err.name + ': ' + err.message})
        console.log(err)
    }
});

export default app;