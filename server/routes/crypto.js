const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) =>{
	res.send({response: "HELLO SOCKET"}).status(200);
});

module.exports = router;