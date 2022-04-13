const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/vinhprs_firstExpress')
        
        console.log('Connect successfully!!')
    } catch(error) {
        connect.log('Connect failure!!!')
    }

}

module.exports = {connect}