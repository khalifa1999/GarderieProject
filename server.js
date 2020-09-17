let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./db/database');


// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)

// Mise en place des routes
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

// Api root
const userRoute = require('./routes/student.route')
const uRoute = require('./routes/teacher.route')
app.use('/endpoint', userRoute)
app.use('/endpoint', uRoute)
// Creation du port de notre serveur
const port = process.env.PORT || 8080;

// Connection au port
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

// Erreur 404
app.use((req, res, next) => {
    next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
    res.send('endpoint invalide');
});

// error handler (il va s'occuper de notre erreur 404) PS: a modifier plus tard
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// Static build location
app.use(express.static(path.join(__dirname, 'dist')));
