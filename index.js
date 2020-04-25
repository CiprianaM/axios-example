const express = require('express');
const router = require('./router');
const port = 3003;

const app = express();
app.use(express.json());
app.use(router);

app.listen(port,()=> console.log(`Server is running at port ${port}`));