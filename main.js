const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
const contacts=  [
    {
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "phone_number": "265-81932"
    },
    {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "phone_number": "229-794212"
    },
    {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "phone_number": "186-162255"
    },
    {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "phone_number": "677-618826"
    }
]

app.get('/', (req, res) =>
{
    res.render('pages/index', {contacts : contacts});
})
app.listen(port, ()=>
{
    console.log('app listening');
})