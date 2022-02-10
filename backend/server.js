const mongoose = require("mongoose");
const app = require("./app");

const DataBase =
  "mongodb+srv://demo:mongoDB@cluster0.4unia.mongodb.net/Dog?retryWrites=true&w=majority";

mongoose
  .connect(DataBase, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB working...."));
// .catch((err) => console.log(`Error!!`));

const server = app.listen("8080", () => {
  console.clear();
  console.log("server is running on http://localhost:8080/");
});

process.on("unhandledRejection", (err) => {
  server.close(() => {
    console.log(`Server is Shutting Down... DUE TO UNHANDLED REJECTION`);
    process.exit(1);
  });
});
