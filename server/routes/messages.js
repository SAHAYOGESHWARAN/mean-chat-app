const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Get messages
router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// Send message
router.post('/', async (req, res) => {
    const { sender, content } = req.body;
    const newMessage = new Message({ sender, content });
    await newMessage.save();
    res.status(201).json(newMessage);
});

module.exports = router;