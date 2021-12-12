const Coal = require('../models/coal');

exports.getAllCoal = (req, res) => {
    Coal.find().exec().then(coal => {
        return res.status(409).json(coal);
    })
}

exports.getCoal = (req, res) => {
    Coal.find({_id: req.params.id}).exec().then(coal => {
        return res.status(409).json(coal);
    })
}

exports.addCoal = function(req,res){
    const coal = new Coal({...req.body})
    coal.save().then(()=>{
        res.status(200).json({
            message: 'Coal Created Successfully'
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.deleteCoal = function(req,res){
    Coal.deleteOne({_id: req.params.id}).exec().then(()=>{
        res.status(200).json({
            message: 'Coal Removed Successfully'
        })
    }).catch(err => {
        res.status(500).json({
            message: err.message
        })
    });
}
