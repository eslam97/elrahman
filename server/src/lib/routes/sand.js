const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const sandController = require('../controllers/sand');

router.get("/", sandController.getAllSand);

router.get("/:id", sandController.getSand);

router.post("/store",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], sandController.addSand);

router.delete("/:id",[ // for express validation
    check('size')
        .trim()
        .notEmpty()
        .withMessage('first_name is required')
], sandController.deleteSand);

module.exports = router;

// (^[\u0600-\u06FF\s]{3,}$)
