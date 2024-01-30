var express = require("express")
var router = express.Router()

const SkillsCtrl = require("../controllers/skills")
router.get("/", SkillsCtrl.index)

router.get("/new", SkillsCtrl.new)
router.get("/:id", SkillsCtrl.show)

router.post("/", SkillsCtrl.create)
router.delete("/:id", SkillsCtrl.delete)
router.get("/:id/edit", SkillsCtrl.edit)
router.put("/:id", SkillsCtrl.update)

module.exports = router
