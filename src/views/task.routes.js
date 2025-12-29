const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const taskService = require("../services/task.service");

router.use(auth);

router.get("/", async (req, res) => {
  const [tasks] = await taskService.getAll(req.user.id);
  res.json(tasks);
});

router.post("/", async (req, res) => {
  await taskService.create({
    userId: req.user.id,
    title: req.body.title,
    description: req.body.description
  });
  res.sendStatus(201);
});

router.put("/:id", async (req, res) => {
  await taskService.update(req.params.id, req.user.id, req.body.status);
  res.sendStatus(200);
});

router.delete("/:id", async (req, res) => {
  await taskService.remove(req.params.id, req.user.id);
  res.sendStatus(200);
});

module.exports = router;
