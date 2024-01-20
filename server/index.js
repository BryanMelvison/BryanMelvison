const express = require('express');
const app = express();
const cors = require('cors');

// Apply CORS policy for your frontend domain
app.use(cors({
    origin: ["https://bryan-melvison.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// POST endpoint to handle form submissions
app.post('/api/submit-form', async (req, res) => {
    try {
        // Extract data from request body
        const data = req.body;

        // TODO: Process the data, e.g., save to database, send email, etc.
        console.log(data);

        // Send a response back to the frontend
        res.status(200).json({ message: 'Form submitted successfully', data: data });
    } catch (error) {
        console.error('Error handling form submission:', error);
        res.status(500).json({ message: 'An error occurred while processing the form', error: error.message });
    }
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;