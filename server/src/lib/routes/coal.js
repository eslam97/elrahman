const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const coalController = require('../controllers/coal');

router.get("/", coalController.getAllCoal);

router.get("/:id", coalController.getCoal);

router.post("/store",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], coalController.addCoal);

router.delete("/:id",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], coalController.deleteCoal);

module.exports = router;
