require("dotenv").config();
const app = require("./app");
const { connectDB } = require("./database");

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
