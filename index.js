express = require('express')
app = express();
port = process.env.PORT || 3000;

app.use('', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'public/index.html');
});

app.listen(port);