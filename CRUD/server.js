const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.error("DB not connected:" + err));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Student = mongoose.model("Student", studentSchema);

// READ
app.get("/", async (req, res) => {
    const students = await Student.find();
    res.render("index", { students });
});

// CREATE
app.post("/add", async (req, res) => {
    await Student.create(req.body);
    res.redirect("/");
});

// EDIT PAGE
app.get("/edit/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student });
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server running on port 3000");
});
