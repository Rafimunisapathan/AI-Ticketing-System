const axios = require("axios");

const createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;

    const aiResponse = await axios.post(
      "http://127.0.0.1:5001/predict",
      {
        text: description,
      }
    );

    const category = aiResponse.data.category;

    res.json({
      message: "Ticket Created",
      title,
      description,
      category,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error creating ticket",
    });
  }
};

module.exports = {
  createTicket,
};