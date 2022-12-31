// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/front_2023_pizzeria_belsay"));
app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname + "/dist/front_2023_pizzeria_belsay/index.html")
  );
});
app.listen(process.env.PORT || 8080);
