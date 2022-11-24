const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors, requireAuth } = require('../../utils/validation');

const { Spot } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const Spots = await Spot.findAll();
    return res.json({ Spots });
});

router.get('/current', async (req, res, next) => { //requireAuth,
    const Spots = await Spot.findAll({
        where: {
            ownerId: req.user.id
        }
    });
    return res.json({ Spots });
});

module.exports = router;