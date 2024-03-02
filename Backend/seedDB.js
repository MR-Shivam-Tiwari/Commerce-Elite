const mongoose = require('mongoose');
const Product = require('./src/models/productModel');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', async () => {
  console.log('MongoDB connection established successfully');

  // Clear existing data in the products collection
  await Product.deleteMany({});

  // Seed products to the database
  const productData = [
    {
      name: "iPhone 12",
      Image:
        "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 999,
      Features: "A14 Bionic chip, 5G capable",
    },
    {
      name: "Sony PlayStation 5",
      Image:
        "https://img.freepik.com/free-photo/high-angle-controller-vr-glasses_23-2149829130.jpg?w=826&t=st=1709363153~exp=1709363753~hmac=8eb5460c1b9e5779ce626e63f414f6bfd146af6b868ae4a9543a52f54f10fa74",
      Price: 499,
      Features: "AMD Zen 2, 4K gaming",
    },
    {
      name: "Xbox Series X",
      Image:
        "https://img.freepik.com/free-photo/high-angle-gaming-controllers-arrangement_23-2149829179.jpg?w=826&t=st=1709363227~exp=1709363827~hmac=94e0e6e6ae744dd6b0595fd2017647a3a399ac265d65f42b5b720c9142bf4f2d",
      Price: 499,
      Features: "AMD Zen 2, 4K gaming",
    },
    {
      name: "Nintendo Switch",
      Image:
        "https://img.freepik.com/free-psd/smartphone-controller-mockup_1310-1069.jpg?w=826&t=st=1709365323~exp=1709365923~hmac=d521c4ba9db16887b54f04c6ce5ee8f32097dceda6368a8197bcb5da001f9419",
      Price: 299,
      Features: "Hybrid console, Joy-Con controllers",
    },
    {
      name: "Dell XPS 13",
      Image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 999,
      Features: "11th Gen Intel Core, 13.4-inch display",
    },
    {
      name: "MacBook Pro",
      Image:
        "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 1299,
      Features: "Apple M1 chip, Retina display",
    },
    {
      name: "Samsung QLED TV",
      Image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 1499,
      Features: "4K QLED, Quantum HDR",
    },
    {
      name: "LG OLED TV",
      Image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 1999,
      Features: "4K OLED, Dolby Vision",
    },
    {
      name: "Canon EOS R5",
      Image:
        "https://images.unsplash.com/photo-1621958054700-7af166501105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 3899,
      Features: "45MP full-frame sensor, 8K video",
    },
    {
      name: "Nikon Z7 II",
      Image:
        "https://images.unsplash.com/photo-1614947076513-70afa581749d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 2999,
      Features: "45.7MP full-frame sensor, 4K video",
    },

    {
      name: "Sony WH-1000XM4",
      Image:
        "https://images.unsplash.com/photo-1614860243518-c12eb2fdf66c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 349,
      Features: "Industry-leading noise cancellation, 30-hour battery",
    },
    {
      name: "Apple AirPods Pro",
      Image:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 249,
      Features: "Active noise cancellation, Wireless charging",
    },

    {
      name: "Samsung Galaxy Watch 3",
      Image:
        "https://images.unsplash.com/photo-1655215920713-94440bf7213f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 399,
      Features: "Built-in ECG, Blood pressure monitoring",
    },
    {
      name: "Amazon Echo Dot",
      Image:
        "https://images.unsplash.com/photo-1621274147744-cfb5694bb233?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 49,
      Features: "Voice control, Smart home integration",
    },
    {
      name: "Google Nest Hub",
      Image:
        "https://images.unsplash.com/photo-1571251455684-2eb131fdb294?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 99,
      Features: "7-inch display, Google Assistant",
    },
    {
      name: "GoPro HERO9 Black",
      Image:
        "https://images.unsplash.com/photo-1624889068827-3f8a601b0dc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Price: 449,
      Features: "5K video, 20MP photos",
    },
  ];

  await Product.insertMany(productData);

  console.log('Database seeded successfully');

  // Close the connection after seeding
  mongoose.connection.close();
});
