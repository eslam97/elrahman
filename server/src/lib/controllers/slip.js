const Slip = require('../models/slip');

exports.getAllSlip = (req, res) => {
    Slip.find().exec().then(slip => {
        return res.status(409).json(slip);
    })
}

exports.getSlip = (req, res) => {
    Slip.find({_id: req.params.id}).exec().then(slip => {
        return res.status(409).json(slip);
    })
}

exports.addSlip = function(req,res){
    const slip = new Slip({...req.body})
    slip.save().then(()=>{
        res.status(200).json({
            message: 'Slip Created Successfully'
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.deleteSlip = function(req,res){
    slip.deleteOne({_id: req.params.id}).exec().then(()=>{
        res.status(200).json({
            message: 'Slip Removed Successfully'
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    });
}
