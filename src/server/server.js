import express from 'express';
import path from 'path';
import middleware from './mid/middleware'
import DB from './config/db';

const port = 3000;
const app = express();

const clientPath = path.resolve(__dirname, '../../dist/client');
const publicPath = path.resolve(__dirname, '../../public');

middleware(app);
import './services/auth';

app.use('/client', express.static(clientPath))
app.use(express.static(publicPath))

app.listen(port, (err, next) => {
  if(err) throw err;
  console.log(`Serving at http://localhost:${port}`);  
});