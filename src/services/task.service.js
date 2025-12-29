const Task = require("../models/task.model");

exports.create = (task) => Task.create(task);
exports.getAll = (userId) => Task.findAllByUser(userId);
exports.update = (id, userId, status) =>
  Task.updateStatus(id, userId, status);
exports.remove = (id, userId) => Task.remove(id, userId);
