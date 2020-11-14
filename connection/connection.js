const { model } = require("mongoose")
const mongoose = require("mongoose")


url = 'mongodb+srv://admin:root@testing.l4cpi.mongodb.net/Clasroom?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(response => console.log("conected to database successfully"))
    .catch(err => console.log(err))

module.exports = mongoose