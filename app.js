const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const PhoneController = require('./controllers/phoneController');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', PhoneController.getAllPhones);
app.post('/add-phone', PhoneController.addPhone);
app.get('/delete/:id', PhoneController.deletePhone); // Correct route for delete operation

app.listen(3000, () => {
    console.log(`Server is running `);
});
