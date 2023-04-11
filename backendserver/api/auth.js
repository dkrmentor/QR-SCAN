const express = require('express');
const router = express.Router()
const connection = require('../config/sql_config');
const util = require('util');

var dbQuery;

dbQuery = util.promisify(connection.query).bind(connection);

router.post('/login', async (req, res) => {

    const email = req.body['email'];
    const password = req.body.password;

    var user = await dbQuery('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);

    if (user.length > 0) {
        res.status(200).json({ "stauts": "success", "data": user });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid credentials" });
    }
});

router.post('/register', async (req, res) => {

    const email = req.body['email'];
    const username = req.body['username'];
    const password = req.body.password;
    const role = req.body["role_id"];


    var user = await dbQuery('SELECT * FROM user WHERE email = ?', [email]);

    if (user.length > 0) {
        res.status(200).json({ "stauts": "failed", "message": "User Already exists" });
    } else {

        var authKey = await generateAuthKey();
        authKey = 'Bearer ' + authKey;
        var users = await dbQuery('INSERT INTO user (email,name,password,role_id,auth_key,create_time) VALUES (?,?,?,?,?,CURRENT_TIMESTAMP)', [email, username, password, role, authKey]);

        res.status(200).json({ "stauts": "success", "data": users });
    }
});

module.exports = router;