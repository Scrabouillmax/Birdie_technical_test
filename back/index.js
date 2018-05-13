const express = require('express');
const cors = require('cors');

const getVariables = require("./controller").getVariables;
const getInfo = require("./controller").getInfo;
const checkDbConnection = require("./controller").checkDbConnection;

const app = express();

app.use(cors())

// returns [[variable field, count, average age]]
app.get('/info/:variable', function (req, res) {
    getInfo(
        req.params["variable"], 
        infos => {
            res.json(infos);
        }
    );
})

// returns the list of all variables
app.get('/variables', function (req, res) {
    getVariables(
        variables => {res.send(variables);}
    );
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  checkDbConnection();
})