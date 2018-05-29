import morgan from 'morgan';
import bodyParser from 'body-parser';
import  compression from 'compression';
import  helmet from 'helmet';
import  passport from 'passport';
import  cors from 'cors';

const isDev = process.env.NODE_ENV == "development";
const isProd = process.env.NODE_ENV == "production";

const ENV = "development"

export default (app)=> {
    if (ENV==="production") {
        app.use(compression());
        app.use(helmet());
    }
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(passport.initialize());
    if (ENV === "development") {
        app.use(morgan('dev'));
    }

    //catch 404 Errors and forward them to error handler
    app.use((err, req, res, next) => {
        const error = app.get('env') === 'development' ? err : {};
        const status = err.status || 500;
        //Respond to client
        res.status(status).json({
            error: {
                message: error.message
            }
        });
        //Respond to ourselves
        console.error(err);
    });
}