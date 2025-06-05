const express = require('express');
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');
     const userRoutes = require('./routes/userRoutes');
     const cors = require('cors');

     dotenv.config();

     const app = express();
     app.use(express.json());
     app.use(cors());

     // Connect to MongoDB
     mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
       .then(() => console.log('Connected to MongoDB'))
       .catch((err) => console.error('MongoDB connection error:', err));

     // Routes
     app.use('/api/users', userRoutes);

     // Start server
     const PORT = process.env.PORT || 3000;
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));