const express = require("express");
const router = express.Router();

//GET-users
router.get("/", (req, res) => {
    res.send("get request for users");
})
//GET show-users-id
router.get("/:id", (req, res) => {
    res.send("get request for user id")
})
//POST-users
router.post("/", (req, res) => {
    res.send("post request for users")
})
//PUT-users
router.put("/", (req, res) => {
    res.send("put request for the users")
})
//DELETE-users
router.delete("/:id", (req, res) => {
    res.send("delete request for the users")
})

module.exports = router;