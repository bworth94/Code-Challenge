const Message = require('./model');
const mongoose = require('mongoose');


exports.create = function (req, res) {
    let message = new Message(
        {
            id: req.body.id,
            message: req.body.message
        }
    );





    message.save(function (err) {
        if (err) {
            console.log(err)
        }
    })


    function getMessages(message) {
        var query = Message.find({ message: { $ne: null } });
        return query;
    }
    function WordCount(str) {
        var numberofWords = str.split(" ").length;
        return numberofWords
    }


    var query = getMessages();
    query.exec(function (err, message) {
        if (err)
            return console.log(err);
        res.send()
        message.forEach(function (message) {
            var count = (WordCount(message.message))
            console.log(count)

        })
    })

};





