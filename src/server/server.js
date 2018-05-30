import express from 'express';
import path from 'path';
import middleware from './mid/middleware'
import apiRoutes from './routes';
import dbCreate from './config/create';
const fallback = require('express-history-api-fallback');

const port = process.env.PORT || 3000;
const app = express();

const clientPath = path.resolve(__dirname, '../../dist/client');
const publicPath = path.resolve(__dirname, '../../public');

middleware(app);
import './services/auth';
apiRoutes(app);
dbCreate(app);

app.use('/client', express.static(clientPath))
app.use(express.static(publicPath));
app.use(fallback('index.html', { root: publicPath }));

app.listen(port, (err, next) => {
  if(err) throw err;
  console.log(`Serving at http://localhost:${port}`);  
});