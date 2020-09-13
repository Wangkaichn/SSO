const router = require("koa-router")();

router.prefix("/query");

router.post("/registerUser", async (ctx, next) => {
  let arr = [];

  arr.push(ctx.request.body["name"]);
  arr.push(ctx.request.body["password"]);
  arr.push(ctx.request.body["email"]);
  arr.push(ctx.request.body["phone"]);
  arr.push(ctx.request.body["nickname"]);
  arr.push(ctx.request.body["avatar"]);

  await userService
    .addUserData(arr)
    .then((data) => {
      let r = "";
      if (data.affectedRows != 0) {
        r = "ok";
      }
      ctx.body = {
        data: r,
      };
    })
    .catch(() => {
      ctx.body = {
        data: "err",
      };
    });
});

router.get("/checkNickNameIsExisted", function (ctx, next) {});

module.exports = router;
