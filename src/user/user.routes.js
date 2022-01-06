const { Router } = require("express");
const { addUser, logIn, listUser, updateUser, deleteUser, tokenCheck } = require("./user.controllers");
const { hashPassword, decryptPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
updateUser.delete("/user/:username", deleteUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;