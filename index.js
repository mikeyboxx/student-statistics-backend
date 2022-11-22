const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.port || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server has started... Listening on http://localhost:${PORT}/`);
    console.log('Time:', Intl.DateTimeFormat('en-US',{dateStyle: 'long', timeStyle: 'long'}).format(new Date()));
  });
});