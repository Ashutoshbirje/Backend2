const Contact = require("../models/Contact");

exports.submitForm = async (req, res) => {
  const { fullname, email, message } = req.body;

  try {
    const newContact = new Contact({ fullname, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};
