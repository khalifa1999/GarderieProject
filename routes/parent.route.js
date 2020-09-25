const express = require('express');
const app = express();

// Express route
const parentExressRoute = express.Router();

// User schema
let parentSchema = require('../model/parent.model');

// Get allparents info
parentExressRoute.route('/get-parents').get((req, res) => {
    parentSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// parent creation 
parentExressRoute.route('/create-parent').post((req, res, next) => {
    parentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get a parent 
parentExressRoute.route('/get-parent/:id').get((req, res) => {
    parentSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update parent
parentExressRoute.route('/update-parent/:id').put((req, res, next) => {
    parentSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('parent successfully updated!')
        }
    })
})

// Delete parent
parentExressRoute.route('/remove-parent/:id').delete((req, res, next) => {
    parentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = parentExressRoute;
