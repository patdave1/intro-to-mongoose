const router = require("express").Router;
const {
  getUser,
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controller/users.controller");

const userRouter = router();

userRouter.route("/").get(getUsers).post(createUsers);
userRouter.route("/:userId").patch(updateUsers).delete(deleteUsers).get(getUser);

module.exports = userRouter;