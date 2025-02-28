const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    enum: ['video', 'article', 'podcast'],
    required: true
  },
  contentUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,  // For pay-per-view content
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Content", ContentSchema);