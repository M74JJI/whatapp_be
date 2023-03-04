import app from "./app.js";

//env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}...`);
});
