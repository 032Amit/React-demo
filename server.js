var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      let path = req.params['0'].substring(1)
      res.sendFile(path.join('build', 'index.html'));
    });
  }