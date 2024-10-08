// server.js
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs', partialsDir: 'views/partials/' }));
app.set('view engine', 'hbs');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' }); // No need to pass header here
});

// Other routes (for demonstration)
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
