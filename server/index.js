const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nspSchema = require("./nspSchema");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ***********************************
mongoose
  .connect("mongodb://localhost:27017/npsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection running...");
  })
  .catch((err) => {
    console.log("Uh Oh, Something went wrong!");
    console.log(err);
  });
// ***********************************

app.post("/register", async (req, res) => {
  console.log("hello, You are in post");
  const domicile = req.body.domicile;
  const scholarshipCat = req.body.scholarshipCat;
  const schemeType = req.body.schemeType;
  const stdName = req.body.stdName;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const mobNumber = req.body.mobNumber;
  const email = req.body.email;
  const IFSC = req.body.IFSC;
  const accNumber = req.body.accNumber;
  const identification = req.body.identification;
  const user = new nspSchema({
    domicile: domicile,
    scholarshipCat: scholarshipCat,
    schemeType: schemeType,
    stdName: stdName,
    gender: gender,
    dob: dob,
    mobNumber: mobNumber,
    email: email,
    IFSC: IFSC,
    accNumber: accNumber,
    identification: identification,
  });
  user.save();
});
try {
  res.send("success");
  console.log("hello, I m in try of post");
} catch (err) {
  res.send(err.code);
  console.log("error: ", err.name);
}

app.get("/", function (req, res) {
  res.send("hello, enjoy. Get is working!");
});

app.listen(3000, () => {
  console.log("Server is running... one port 3001");
});
