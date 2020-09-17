const express = require('express');
const app = express();

// Express route
const studentExpressRoute = express.Router();

// User schema
let StudentSchema = require('../model/student.model');

// Recup utilisateurs
studentExpressRoute.route('/').get((req, res) => {
    StudentSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Creation users
studentExpressRoute.route('/create-student').post((req, res, next) => {
    StudentSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get un utilisateur
studentExpressRoute.route('/get-student/:id').get((req, res) => {
    StudentSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update etudiant
studentExpressRoute.route('/update-student/:id').put((req, res, next) => {
    StudentSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Student successfully updated!')
        }
    })
})

// Delete etudiant
studentExpressRoute.route('/remove-student/:id').delete((req, res, next) => {
    StudentSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentExpressRoute;
