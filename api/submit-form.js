module.exports = (req, res) => {
    if (req.method === 'POST') {
        const formData = req.body;
        console.log('Form data received:', formData);
        
        res.status(200).send({ message: 'Form received' });
    } else {
        // Handle any other HTTP methods, or just send a method not allowed status
        res.status(405).send({ error: 'Method Not Allowed' });
    }
};