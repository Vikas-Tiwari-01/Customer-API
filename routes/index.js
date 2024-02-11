var express = require('express');
var router = express.Router();
var apis=require('../apis/Select.js')

router.route("/").get().post(controllers.createTodo);
router
  .route("/:id")
  .get(controllers.getTodo)
  .put(controllers.updateTodo)
  .delete(controllers.deleteTodo);
module.exports = router;

