const express = require('express');
const router = express.Router()
const connection = require('../config/sql_config');
const util = require('util');

var dbQuery;

dbQuery = util.promisify(connection.query).bind(connection);



router.get('/getnotification', async (req, res) => {

    var notification = await dbQuery('SELECT * FROM notifications JOIN user ON notifications.user_id = user.id');
    if (notification.length > 0) {
        res.status(200).json({ "stauts": "success", "data": notification });
    } else {
        res.status(401).json({ "stauts": "failed", "message": "Internet Connection issue" });
    }

});


router.post('/notification', async (req, res) => {

    const address = req.body['address'];
    const userId = req.body['user_id'];
    const lat = req.body['user_lat'];
    const long = req.body['user_long'];

    var notification = await dbQuery('INSERT INTO notifications (current_location,user_id,create_time,user_lat,user_long) VALUES (?,?,CURRENT_TIMESTAMP,?,?)', [address, userId, lat, long]);

    res.status(200).json({ "stauts": "success", "data": notification });

});

router.post('/site', async (req, res) => {

    const address = req.body['site_address'];
    const siteId = req.body['site_id'];
    const lat = req.body['lat'];
    const long = req.body['long'];

    var sites = await dbQuery('INSERT INTO sites (site_id,site_address,site_lat,site_long,create_time) VALUES (?,?,?,?,CURRENT_TIMESTAMP)', [siteId, address, lat, long]);

    res.status(200).json({ "stauts": "success", "data": sites });

});







module.exports = router;