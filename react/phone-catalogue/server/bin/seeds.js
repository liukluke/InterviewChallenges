require('dotenv').config();
const mongoose = require("mongoose");
const Phone = require("../models/Phone");


mongoose
    .connect(process.env.DB_LOCAL, { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

let phones = [
    {
        "name": "iPhone 7",
        "manufacturer": "Apple",
        "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
        "color": "black",
        "price": 769,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605787/phone-catalogue/IPhone_7_r52npr.png",
        "screen": "4,7 inch IPS",
        "processor": "A10 Fusion",
        "ram": 2
    },
    {
        "name": "Galaxy S7",
        "manufacturer": "Samsung",
        "description": "Introducing the smartphone your life can not do without, The Samsung Galaxy S7. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.",
        "color": "grey",
        "price": 209,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605787/phone-catalogue/Samsung_Galaxy_S7_and_S7_Edge_skmg0g.png",
        "screen": "5,1 inch Quad-HD",
        "processor": "Snapdragon 820",
        "ram": 4
    },
    {
        "name": "Honor 10",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "blue",
        "price": 399,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605787/phone-catalogue/honor_10_zxldt5.png",
        "screen": "5,84 inch Full-HD",
        "processor": "Kirin 970",
        "ram": 6
    },
    {
        "name": "P10 Lite",
        "manufacturer": "Huawei",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "white",
        "price": 249,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605788/phone-catalogue/P10_Lite_ju9wdu.png",
        "screen": "5,2 inch Full-HD",
        "processor": "Kirin 658",
        "ram": 4
    },
    {
        "name": "Nokia 7.1",
        "manufacturer": "Nokia",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 275,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605788/phone-catalogue/nokia_71_ocojtx.png",
        "screen": "5,84 inch Full-HD",
        "processor": "Octa-core",
        "ram": 4
    },
    {
        "name": "Zen Phone 5",
        "manufacturer": "Asus",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 359,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605788/phone-catalogue/zenfone5_vjmamc.png",
        "screen": "6,2 inch Full-HD",
        "processor": "Snapdragon 636",
        "ram": 6
    },
    {
        "name": "MI A2",
        "manufacturer": "Xiaomi",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 179,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605788/phone-catalogue/MI_A2_s4xtzc.png",
        "screen": "5,99 inch Full-HD",
        "processor": "Snapdragon 660",
        "ram": 6
    },
    {
        "name": "Moto G6",
        "manufacturer": "Motorola",
        "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
        "color": "black",
        "price": 199,
        "imageFileName": "https://res.cloudinary.com/dgp1wgz95/image/upload/v1558605788/phone-catalogue/moto-g6_qokwy8.png",
        "screen": "5,7 inch Full-HD",
        "processor": "Snapdragon 450",
        "ram": 3
    }
]

Phone.deleteMany()
    .then(() => {
        return Phone.create(phones)
    })
    .then(phonesCreated => {
        console.log(`${phonesCreated.length} users created with the following id:`);
        console.log(phonesCreated.map(u => u._id));
    })
    .then(() => {
        // Close properly the connection to Mongoose
        mongoose.disconnect()
    })
    .catch(err => {
        mongoose.disconnect()
        throw err
    })