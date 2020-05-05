const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
