const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    name: String,
    mail: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;