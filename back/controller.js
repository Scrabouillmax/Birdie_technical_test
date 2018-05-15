const Sequelize = require('sequelize');

const config = require('./config.json');

// connect to database
const sequelize = new Sequelize(
    config.db.name, 
    config.db.user, 
    config.db.password, 
    {
        host: config.db.host,
        dialect: 'mysql',
    }
);

// check connection
module.exports.checkDbConnection = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection to database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

// query the list of variables
module.exports.getVariables = () => {
    // parse an array of objects into an array of the objects' values associated to key.
    const parse = (arr, key) => {
        return arr.map(
            obj => {
                return obj[key]
            }
        )
    }
    return sequelize.query(
        "SELECT COLUMN_NAME \
        FROM INFORMATION_SCHEMA.COLUMNS \
        WHERE TABLE_NAME = \"census_learn_sql\"", { type: sequelize.QueryTypes.SELECT})
    .then(variables => {
        return parse(variables, "COLUMN_NAME");
    });
} 

module.exports.getDataSize = (variable) => {
    // parse an array of objects into an array of arrays containing the objects values.
    return sequelize.query(
        `SELECT DISTINCT \`${variable}\` \
         FROM ${config.db.table}`, 
         { type: sequelize.QueryTypes.SELECT})
    .then(variables => {
        return {
            n_total_lines: variables.length
        }
    });
}

module.exports.getData = (variable) => {
    // parse an array of objects into an array of arrays containing the objects values.
    const parse = (arr) => {
        return arr.map(
            obj => {
                return Object.values(obj);
            }
        )
    }
    return sequelize.query(
        `SELECT DISTINCT \`${variable}\` AS var, COUNT(\`${variable}\`) AS count, AVG(age)  \
         FROM ${config.db.table} \
         GROUP BY var \
         ORDER BY count DESC
         LIMIT 100`, 
         { type: sequelize.QueryTypes.SELECT})
    .then(variables => {
        return {
            content: parse(variables)
        };
    });
}



