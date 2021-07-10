//#region config
let __dirname = "/home/caike/Dokumendid/Projects/Chat";
//#endregion

//#region Imports
import logging from "./config/logging";
import config from './config/config'

const exphbs = require('express-handlebars');
import express from 'express';
const app = express();
//#endregion

//#region App Middlemans
app.set('trust proxy', true);
//#endregion

//#region HBS 
const hbs = exphbs.create({
    extname      :'hbs',
    layoutsDir   : __dirname + '/src/frontend/views/layouts',
    defaultLayout: 'main',
    helpers      : __dirname + '/src/frontend/views/helpers',
    partialsDir  : [
        __dirname + '/src/frontend/views/partials'
    ]
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//#endregion

//#region File Serving
app.set('views', __dirname + "/src/frontend/views");
app.use(express.static(__dirname + "/src/frontend/public"));
//#endregion

//#region Routes
import index from "./api/v1/routes/index";
import login from './api/v1/routes/login';
import register from './api/v1/routes/register';
import chat from './api/v1/routes/chat';
import support from './api/v1/routes/support';

app.use("/", index);
app.use('/Login', login);
app.use('/Register', register);
app.use('/Chat', chat);
app.use('/Support', support);

//#endregion

//#region Server Start
logging.Log("Server", "Starting the Server", 0);
app.listen(config.server.port, () => {
    logging.Log("Server", "Server has been Started!", 0);
});
//#endregion