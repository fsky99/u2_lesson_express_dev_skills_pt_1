const skills = [
  { id: 1, skill: "Express ", experience: "Mid" },
  { id: 2, skill: "Node Js ", experience: "Mid" },
  { id: 3, skill: "MongoDB ", experience: "low" },
  { id: 4, skill: "React ", experience: "low" },
  { id: 5, skill: "SQL ", experience: "high" },
  { id: 6, skill: "Angular ", experience: "high" },
  { id: 7, skill: "Ionic ", experience: "high" },
  { id: 8, skill: "Python ", experience: "low" },
  { id: 9, skill: "HTML ", experience: "high" },
  { id: 10, skill: "CSS ", experience: "Mid" },
  { id: 11, skill: "JavaScript ", experience: "high" },
  { id: 12, skill: "PHP ", experience: "Mid" },
  { id: 13, skill: "C++ ", experience: "low" },
  { id: 14, skill: "C# ", experience: "low" },
  { id: 15, skill: "Java ", experience: "high" },
  { id: 16, skill: "AWS ", experience: "Mid" },
  { id: 17, skill: "SpringBoot ", experience: "Mid" },
  { id: 18, skill: "Django ", experience: "low" },
  { id: 19, skill: "Git ", experience: "high" },
  { id: 20, skill: "Azure ", experience: "low" },
]

const getAll = () => {
  return skills
}
getOne = (id) => {
  return skills.find((skill) => skill.id === parseInt(id))
}

const create = (skill) => {
  skill.id = Date.now() % 100
  skill.done = false
  skills.push(skill)
}

const deleteOne = (id) => {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id))
  skills.splice(idx, 1)
}

const updateOne = (id, updatedskill) => {
  const skillsToUpdate = skills.find((skill) => skill.id === parseInt(id))
  skillsToUpdate.skill = updatedskill
}
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
}
