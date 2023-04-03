const express = require('express');
const app = express();

app.post('/login', async (req, res) => {

    const email = req.body['email'];
    const password = req.body['password'];

    var user = await dbQuery('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
    res.send(user);

});


module.exports = app;