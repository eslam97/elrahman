const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const slipController = require('../controllers/slip');

router.get("/", slipController.getAllSlip);

router.get("/:id", slipController.getSlip);

router.post("/store",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], slipController.addSlip);

router.delete("/:id",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], slipController.deleteSlip);

module.exports = router;
