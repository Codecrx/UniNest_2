import app from "../api/index.js";

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`UniNest API listening on ${port}`);
});
