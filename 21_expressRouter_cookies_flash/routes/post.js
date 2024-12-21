const express = require("express");
const router = express.Router();

//GET-posts
router.get("/", (req, res) => {
    res.send("get request for the posts");
})
//GET show-post-id 
router.get("/:id", (req, res) => {
    res.send("get request for the posts");
})
// POST-posts
router.post("/", (req, res) => {
    res.send("post request for posts")
})
//PUT-posts
router.put("/", (req, res) => {
    res.send("put request for the posts")
})
//DELETE-posts
router.delete("/:id", (req, res) => {
    res.send("delete request for the posts")
})

module.exports = router;