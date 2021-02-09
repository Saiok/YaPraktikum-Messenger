const express = require('express');

const app = express();
const PORT = 4200;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/build/static', {index: 'authentication/auth.html'}));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});