const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Secure server');
  });
  
app.listen(port, () => console.log(`Listening to port ${port}...`));
