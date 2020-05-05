const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database Online !"))
  .catch((err) => {
    throw err;
  });
