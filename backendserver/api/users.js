const express = require('express');
const router = express.Router()
const connection = require('../config/sql_config');
const util = require('util');

var dbQuery;

dbQuery = util.promisify(connection.query).bind(connection);

router.get('/users', async (req, res) => {

    var user = await dbQuery('SELECT * FROM user JOIN role ON user.role_id = role.id');

    if (user.length > 0) {
        res.status(200).json({ "stauts": "success", "data": user });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid user" });
    }

});

router.get('/user_reputation', async (req, res) => {

    var reputation = await dbQuery('SELECT * FROM user_reputation');

    if (reputation.length > 0) {
        res.status(200).json({ "stauts": "success", "data": reputation });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid user" });
    }

});

router.get('/user_reputation/:id', async (req, res) => {

    const userId = req.user.id;

    var reputation = await dbQuery('SELECT * FROM user_reputation WHERE user_id = ?', [userId]);

    if (reputation.length > 0) {
        res.status(200).json({ "stauts": "success", "data": reputation });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Invalid user" });
    }

});

router.post('/form', async (req, res) => {

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
    const lat = req.body['user_lat'];
    const long = req.body['user_long'];

    var reputation = await dbQuery('INSERT INTO user_reputation (name,first_name,site,controller,date,time,identity_card,round_controller,cleanliness_workstation,storage_documents,electronic_paperhandrail,round_reports,dress_code,onsite_behaviour,punctuality,reactivity,observations,user_position,user_language,location,user_lat,user_long,create_time,user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP,?)', [name, firstName, site, controller, date, time, identityCard, roundController, cleanlinessOfTheWorkstation, storageOfMaterialsAndDocuments, electronicAndOrPaperHandrail, roundReports, dressCode, onSiteBehaviour, punctuality, reactivity, observations, position, language, location, lat, long, req.user.id]);

    var reputationData = await dbQuery('SELECT * FROM user_reputation WHERE id = ?', reputation.insertId);

    res.status(200).json({ "stauts": "success", "data": reputationData });

});

module.exports = router;