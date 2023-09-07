const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
const port = 5000; // You can change this to any available port number


app.use(express.static('trial'));
// Define a route
app.get('/', (req, res) => {
  // res.send('Hello, this is a basic Express server!');
  res.sendFile(__dirname + '/trial/index.html');
});
app.get('/about', (req, res) => {
  // res.send('Hello, this is a basic Express server!');
  res.sendFile(__dirname + '/trial/about.html');
});
app.get('/projects', (req, res) => {
  // res.send('Hello, this is a basic Express server!');
  res.sendFile(__dirname + '/trial/projects.html');
});

app.get('/contact', (req, res) => {
  // res.send('Hello, this is a basic Express server!');
  res.sendFile(__dirname + '/trial/contact.html');
});

app.post('/',(req,res)=>{
  console.log(req.body);
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
