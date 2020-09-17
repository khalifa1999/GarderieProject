const express = require('express');
const app = express();

// Express route
const teacherExpressRoute = express.Router();

// User schema
let TeacherSchema = require('../model/teacher.model');

// Recup utilisateurs
teacherExpressRoute.route('/Recup-teacher').get((req, res) => {
    TeacherSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Creation users
teacherExpressRoute.route('/create-teacher').post((req, res, next) => {
    TeacherSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get un enseignant
teacherExpressRoute.route('/get-teacher/:id').get((req, res) => {
    TeacherSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update enseignant
teacherExpressRoute.route('/update-teacher/:id').put((req, res, next) => {
    TeacherSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Enseignant mis à jour avec succès!')
        }
    })
})

// Delete enseignant
teacherExpressRoute.route('/remove-teacher/:id').delete((req, res, next) => {
    TeacherSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = teacherExpressRoute;
