
const express = require('express');
const app = express();

// Express route
const testExpressRoute = express.Router();

// test schema
let testSchema = require('../model/test.model');

// Get all tests info
testExpressRoute.route('/get-tests').get((req, res) => {
    testSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// create test(s)
testExpressRoute.route('/create-test').post((req, res, next) => {
    testSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get a test result 
testExpressRoute.route('/get-test/:id').get((req, res) => {
    testSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update a test
testExpressRoute.route('/update-test/:id').put((req, res, next) => {
    testSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Test successfully updated!')
        }
    })
})

// Delete test
testExpressRoute.route('/delete-test/:id').delete((req, res, next) => {
    testSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// Delete all test
testExpressRoute.route('/delete-test').delete((req, res, next) => {
    testSchema.remove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


module.exports = testExpressRoute;
