const os = require('os');
const intInfo = os.networkInterfaces();
let ip;
for (let devName in intInfo) {
  if(devName !== 'lo') {
    ip = intInfo[devName][0].address;
  }
}

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/res', express.static(__dirname+'/res'));
app.get('/', (req, res) => { res.sendFile(__dirname+'/index.html') });

app.listen(port, ip, () => {
  console.log("http://"+ip+":"+port);
});
