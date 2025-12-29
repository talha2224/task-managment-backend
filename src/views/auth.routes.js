const router = require("express").Router();
const authService = require("../services/auth.service");

router.post("/register", async (req, res) => {
  await authService.register(req.body);
  res.sendStatus(201);
});

router.post("/login", async (req, res) => {
  const token = await authService.login(
    req.body.email,
    req.body.password
  );
  res.json({ token });
});

module.exports = router;
