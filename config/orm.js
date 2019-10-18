var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (tableInput, colToSearch, valOfCol) {
        var queryString = "INSERT INTO " + table;

        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


    updateOne: function (tableInput, colToSearch, valOfCol) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
        ;
    }
};

module.exports = orm;