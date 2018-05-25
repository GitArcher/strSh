const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/res'));
app.get('/', (req, res) => { res.sendFile(__dirname+'/index.html') });

app.listen(port,'192.168.1.100');
