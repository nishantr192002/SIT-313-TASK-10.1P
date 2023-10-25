const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mailgun = require('mailgun-js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const mg = mailgun({
  apiKey: 'key-732cbda7c327fcd814386568ecb0a88f',
  domain: 'sandbox0ce41485e2a8433a976eb69cb6077f76.mailgun.org',
});

app.post('/', (req, res) => {
  const { email } = req.body;

  const data = {  
    from: 'Nishant <Nishant4820.be22@chitkara.edu.in>', // Sender's email address
        to: email, // Recipient's email address (provided in the POST request)
        subject: 'Welcome to the Website', // Email subject
        text: 'Hello', // Email body
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Email sent');
    }
    
   
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}.`);
});