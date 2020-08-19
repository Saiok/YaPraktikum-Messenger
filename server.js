const express = require('express');

const app = express();
const PORT = 3200;

app.use(express.static('./'));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});