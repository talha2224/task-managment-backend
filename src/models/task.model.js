const db = require("../config/db");

exports.create = (task) =>
  db.query(
    "INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)",
    [task.userId, task.title, task.description]
  );

exports.findAllByUser = (userId) =>
  db.query("SELECT * FROM tasks WHERE user_id = ?", [userId]);

exports.updateStatus = (id, userId, status) =>
  db.query(
    "UPDATE tasks SET status=? WHERE id=? AND user_id=?",
    [status, id, userId]
  );

exports.remove = (id, userId) =>
  db.query("DELETE FROM tasks WHERE id=? AND user_id=?", [id, userId]);
