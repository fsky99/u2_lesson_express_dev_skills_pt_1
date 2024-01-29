var express = require("express")
var router = express.Router()

const SkillsCtrl = require("../controllers/skills")
router.get("/", SkillsCtrl.index)

router.get("/:id", SkillsCtrl.show)

module.exports = router
