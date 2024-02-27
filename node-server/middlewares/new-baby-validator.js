module.exports = async (req, res, next) => {
	const { birthday, weight, height, parentsName } = req.body;

	if (birthday && weight && height && parentsName) {
		return next();
	}
	return res.status(403).json({
		message: "missing properties for new baby",
	});
};
