const express = require("express");
const router = express.Router();
const mentorcontroller = require("../Controllers/mentor");
/**
 * @author : Rohan
 * @description : Mentor Routes
 */
router.get("/addtest", mentorcontroller.getaddtest);
router.get("/addperformance", mentorcontroller.getaddperformance);
router.get("/calculateperformance", mentorcontroller.getcheckperformance);
router.post("/addtest", mentorcontroller.postaddtest);
router.post("/calculateperformance", mentorcontroller.postcheckperformance);
router.post("/addperformance", mentorcontroller.postaddperformance);
router.get("/doubts",mentorcontroller.gettraineeDoubts);
router.post("/doubts",mentorcontroller.posttraineeDoubts);
module.exports = router;
