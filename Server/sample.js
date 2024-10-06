const mongoose = require('mongoose');
const Item = require('./Models/Items'); // Adjust the path as per your project structure

// Update the MongoDB connection string with your specific details
const mongoURI = 'mongodb://localhost:27017/LilDappers';

async function connectToMongoDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000 // Increase timeout to 20 seconds if needed
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
}

async function addItem(item, id) {
    // Manually generate the code
    item.code = `LIL${String(id).padStart(5, '0')}`;
    // Manually assign the id
    item.id = id;
    // Add the current timestamp
    item.timeProductAdded = new Date();
    try {
        await Item.create(item);
        console.log(`Item ${item.name} added with code ${item.code} and id ${item.id}`);
    } catch (err) {
        console.error('Error adding item:', err);
    }
}

async function addItems(items) {
    await connectToMongoDB();
    for (let i = 0; i < items.length; i++) {
        await addItem(items[i], i + 1); // Using index + 1 as id
    }
    mongoose.disconnect();
}

const items = [
    {
        name: "ALPHA",
        price: 5000,
        img1: "path/to/a1.jpg",
        img2: "path/to/a2.jpg",
        category: "UN-STITCHED",
        shippingTime: "3 Weeks",
        color: "Blue",
        type: "2 Piece",
        fabric: "Doriah - Cotton & Silk Woven in a Square Check Pattern",
        section: "Men",
        sizes: [
            { type: 'XS', quantity: 10 },
            { type: 'S', quantity: 15 },
            { type: 'M', quantity: 20 },
            { type: 'L', quantity: 25 }
        ]
    },
    {
        name: "BETA",
        price: 6000,
        img1: "path/to/a3.jpg",
        img2: "path/to/a4.jpg",
        category: "KURTI",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 18 },
            { type: 'L', quantity: 22 }
        ]
    },
    {
        name: "ECHO",
        price: 7000,
        img1: "path/to/a5.jpg",
        img2: "path/to/a1.jpg",
        category: "STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 5 },
            { type: 'S', quantity: 10 },
            { type: 'M', quantity: 15 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "DELTA",
        price: 8000,
        img1: "path/to/aa1.jpg",
        img2: "path/to/aa2.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Men",
        sizes: [
            { type: 'XS', quantity: 12 },
            { type: 'S', quantity: 18 },
            { type: 'M', quantity: 22 },
            { type: 'L', quantity: 28 }
        ]
    },
    {
        name: "RED",
        price: 9000,
        img1: "path/to/aa3.jpg",
        img2: "path/to/aa4.jpg",
        category: "STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 7 },
            { type: 'S', quantity: 14 },
            { type: 'M', quantity: 21 },
            { type: 'L', quantity: 25 }
        ]
    },
    {
        name: "BLUE",
        price: 10000,
        img1: "path/to/b1.jpg",
        img2: "path/to/b2.jpg",
        category: "SPECIALS",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Men",
        sizes: [
            { type: 'XS', quantity: 9 },
            { type: 'S', quantity: 13 },
            { type: 'M', quantity: 17 },
            { type: 'L', quantity: 21 }
        ]
    },
    {
        name: "GREEN",
        price: 1500,
        img1: "path/to/b3.jpg",
        img2: "path/to/b1.jpg",
        category: "STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Girls",
        sizes: [
            { type: 'XS', quantity: 6 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 18 },
            { type: 'L', quantity: 24 }
        ]
    },
    {
        name: "VIOLET",
        price: 2000,
        img1: "path/to/c1.jpg",
        img2: "path/to/c2.jpg",
        category: "KURTI",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Girls",
        sizes: [
            { type: 'XS', quantity: 10 },
            { type: 'S', quantity: 14 },
            { type: 'M', quantity: 18 },
            { type: 'L', quantity: 22 }
        ]
    },
    {
        name: "WHITE",
        price: 2500,
        img1: "path/to/s1.jpg",
        img2: "path/to/s2.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 16 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "PLAY",
        price: 3000,
        img1: "path/to/a1.jpg",
        img2: "path/to/a2.jpg",
        category: "SPECIALS",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 5 },
            { type: 'S', quantity: 10 },
            { type: 'M', quantity: 15 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "STOP",
        price: 3500,
        img1: "path/to/a1.jpg",
        img2: "path/to/a2.jpg",
        category: "KURTI",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 7 },
            { type: 'S', quantity: 11 },
            { type: 'M', quantity: 17 },
            { type: 'L', quantity: 21 }
        ]
    },
    {
        name: "SUMMER",
        price: 4000,
        img1: "path/to/a3.jpg",
        img2: "path/to/a4.jpg",
        category: "STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 10 },
            { type: 'S', quantity: 14 },
            { type: 'M', quantity: 18 },
            { type: 'L', quantity: 22 }
        ]
    },
    {
        name: "SPRING",
        price: 4500,
        img1: "path/to/a5.jpg",
        img2: "path/to/aa1.jpg",
        category: "SPECIALS",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Girls",
        sizes: [
            { type: 'XS', quantity: 6 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 18 },
            { type: 'L', quantity: 24 }
        ]
    },
    {
        name: "AUTUMN",
        price: 5000,
        img1: "path/to/aa2.jpg",
        img2: "path/to/aa3.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 16 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "WINTER",
        price: 5500,
        img1: "path/to/aa4.jpg",
        img2: "path/to/a1.jpg",
        category: "KURTI",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Women",
        sizes: [
            { type: 'XS', quantity: 9 },
            { type: 'S', quantity: 13 },
            { type: 'M', quantity: 17 },
            { type: 'L', quantity: 21 }
        ]
    },
    {
        name: "FALL",
        price: 6500,
        img1: "path/to/b1.jpg",
        img2: "path/to/b2.jpg",
        category: "SPECIALS",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Men",
        sizes: [
            { type: 'XS', quantity: 6 },
            { type: 'S', quantity: 11 },
            { type: 'M', quantity: 17 },
            { type: 'L', quantity: 21 }
        ]
    },
    {
        name: "AUTUMN",
        price: 5000,
        img1: "path/to/aa2.jpg",
        img2: "path/to/aa3.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 16 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "AUTUMN",
        price: 5000,
        img1: "path/to/aa2.jpg",
        img2: "path/to/aa3.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 16 },
            { type: 'L', quantity: 20 }
        ]
    },
    {
        name: "AUTUMN",
        price: 5000,
        img1: "path/to/aa2.jpg",
        img2: "path/to/aa3.jpg",
        category: "UN-STITCHED",
        shippingTime: "2 Weeks",
        color: "Purple",
        type: "3 Piece",
        fabric: "Doria - Cotton & Silk Woven in a Square Check Pattern",
        section: "Boys",
        sizes: [
            { type: 'XS', quantity: 8 },
            { type: 'S', quantity: 12 },
            { type: 'M', quantity: 16 },
            { type: 'L', quantity: 20 }
        ]
    }
];

addItems(items);
