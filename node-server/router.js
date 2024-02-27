const router = require("express").Router();
const babiesRouter = require("./routes/babies.router");

router.use("/babies", babiesRouter);

module.exports = router;
