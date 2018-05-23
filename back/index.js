const express = require('express');
const cors = require('cors');

const getVariables = require("./controller").getVariables;
const getData = require("./controller").getData;
const getDataSize = require('./controller').getDataSize;
const checkDbConnection = require("./controller").checkDbConnection;

const app = express();

app.use(cors());

// returns [[variable field, count, average age]]
app.get('/info/:variable', function (req, res, next) {
    getDataSize(req.params["variable"])
    .then(dataSize => {
        return getData(req.params["variable"])
        .then(data => {
            return {
                n_total_lines: dataSize.n_total_lines,
                content: data.content
            }
        },
        err => next(err))
    },
    err => next(err))
    .then(infos => {
        res.json(infos);
    },
    err => next(err))
});

// returns the list of all variables
app.get('/variables', function (req, res, next) {
    getVariables()
    .then(
        variables => res.json(variables),
        err => next(err)
    );
})

// catch errors
app.use(function(err, req, res, next) {
    res.status(404).send("An error occured.");
    res.end()
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  checkDbConnection();
})