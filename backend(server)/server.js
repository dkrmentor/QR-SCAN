const express = require('express');
const app = express();
const connection = require('./config/sql_config.js');
const util = require('util');
const cors = require('cors');
const crypto = require('crypto');

app.use(express.json());
app.use(cors());

var dbQuery;

dbQuery = util.promisify(connection.query).bind(connection);

async function generateRandomString(length) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, (err, buffer) => {
            if (err) {
                reject(err);
            }
            resolve(buffer.toString('hex'));
        });
    });
}

async function generateAuthKey() {
    const authKey = await generateRandomString(64);
    return authKey;
}

const Authorization = async function (req, res, next) {
    if (req.originalUrl === "/login" || req.originalUrl === "/register") {
        next();
        return;
    }

    if (req.headers.authorization) {
        const authId = req.headers.authorization;

        const userExist = await dbQuery('SELECT * FROM user WHERE auth_key = ?', [authId]);

        if (userExist.length > 0) {
            req.user = userExist[0];
            next();
            return;
        }
    }
    res.status(401).send({ "code": "unauthorized" });
}

app.use(Authorization);


app.get('/users', async (req, res) => {

    var user = await dbQuery('SELECT * FROM user JOIN role ON user.role_id = role.id');

    if (user.length > 0) {
        res.status(200).json({ "stauts": "success", "data": user });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid user" });
    }

});

app.get('/user_reputation', async (req, res) => {

    var reputation = await dbQuery('SELECT * FROM user_reputation');

    if (reputation.length > 0) {
        res.status(200).json({ "stauts": "success", "data": reputation });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid user" });
    }
});

app.post('/login', async (req, res) => {

    const email = req.body['email'];
    const password = req.body.password;

    var user = await dbQuery('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
    if (user.length > 0) {
        res.status(200).json({ "stauts": "success", "data": user });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid credentials" });
    }
});

app.post('/register', async (req, res) => {

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


app.post('/form', async (req, res) => {

    const name = req.body['name'];
    const firstName = req.body['first_name'];
    const position = req.body['user_position'];
    const site = req.body['site'];
    const controller = req.body['controller'];
    const date = req.body['date'];
    const time = req.body['time'];
    const identityCard = req.body['identity_card'];
    const roundController = req.body['round_controller'];
    const cleanlinessOfTheWorkstation = req.body['cleanliness_workstation'];
    const storageOfMaterialsAndDocuments = req.body['storage_documents'];
    const electronicAndOrPaperHandrail = req.body['electronic_paperhandrail'];
    const roundReports = req.body['round_reports'];
    const dressCode = req.body['dress_code'];
    const onSiteBehaviour = req.body['onsite_behaviour'];
    const punctuality = req.body['punctuality'];
    const reactivity = req.body['reactivity'];
    const language = req.body['user_language'];
    const observations = req.body['observations'];
    const location = req.body['location'];
    const lat = req.body['lat'];
    const long = req.body['long'];

    var reputation = await dbQuery('INSERT INTO user_reputation (name,first_name,site,controller,date,time,identity_card,round_controller,cleanliness_workstation,storage_documents,electronic_paperhandrail,round_reports,dress_code,onsite_behaviour,punctuality,reactivity,observations,user_position,user_language,location,user_lat,user_long,create_time) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP)', [name, firstName, site, controller, date, time, identityCard, roundController, cleanlinessOfTheWorkstation, storageOfMaterialsAndDocuments, electronicAndOrPaperHandrail, roundReports, dressCode, onSiteBehaviour, punctuality, reactivity, observations, position, language, location, lat, long]);

    var reputationData = await dbQuery('SELECT * FROM user_reputation WHERE id = ?', reputation.insertId);

    res.status(200).json({ "stauts": "success", "data": reputationData });


    
});


app.post('/notification', async (req, res) => {

    const address = req.body['address'];
    const userId = req.body['user_id'];

    var notification = await dbQuery('INSERT INTO notifications (current_location,user_id,create_time) VALUES (?,?,CURRENT_TIMESTAMP)', [address, userId]);

    res.status(200).json({ "stauts": "success", "data": notification });

});

app.post('/site', async (req, res) => {

    const address = req.body['site_address'];
    const siteId = req.body['site_id'];
    const lat = req.body['lat'];
    const long = req.body['long'];

    var sites = await dbQuery('INSERT INTO sites (site_id,site_address,site_lat,site_long,create_time) VALUES (?,?,?,?,CURRENT_TIMESTAMP)', [siteId, address, lat, long]);

    res.status(200).json({ "stauts": "success", "data": sites });

});

app.get('/getnotification', async (req, res) => {

    var notification = await dbQuery('SELECT * FROM notifications JOIN user ON notifications.user_id = user.id');
    if (notification.length > 0) {
        res.status(200).json({ "stauts": "success", "data": notification });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Internet Connection issue" });
    }

});

app.listen(4000, () => {
    console.log('Server listening on port 3000');
}); 