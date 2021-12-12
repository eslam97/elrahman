const Sand = require('../models/sand');

exports.getAllSand = (req, res) => {
    Sand.find().exec().then(sand => {
        return res.status(409).json(sand);
    })
}

exports.getSand = (req, res) => {
    Sand.find({_id: req.params.id}).exec().then(sand => {
        return res.status(409).json(sand);
    })
}

exports.addSand = function(req,res){
    const sand = new Sand({...req.body})
    sand.save().then(()=>{
            res.status(200).json({
                message: 'Sand Created Successfully'
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });
}

exports.deleteSand = function(req,res){
    Sand.deleteOne({_id: req.params.id}).exec().then(()=>{
        res.status(200).json({
            message: 'Sand Removed Successfully'
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    });
}
