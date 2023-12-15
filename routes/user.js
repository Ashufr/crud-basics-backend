const express = require('express');
const Controller = require("../controller/user");

const router = express.Router();

router.get("/getUser/:id", Controller.getUser)
.put("/updateUser/:id", Controller.updateUser)
.post("/createUser", Controller.createUser)
.delete("/deleteUser/:id", Controller.deleteUser );

module.exports = router;