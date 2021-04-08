import express from 'express';
import bodyParser from "body-parser";
import authRoutes from './routes/auth';
import bitcoinRoutes from './routes/bitcoin';
import userRoutes from './routes/user';
import errorMiddleware from './middlewares/error.middleware';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use(bodyParser.json());

app.use(authRoutes);
app.use(bitcoinRoutes);
app.use(errorMiddleware);
app.use(userRoutes);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
