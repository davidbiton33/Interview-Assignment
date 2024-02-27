const {addNewBabyToDB} = require("../../../dal/baby.dal");

module.exports = async (newBabyData) => {
	try {
		const baby = await addNewBabyToDB(newBabyData);
		return {
			success: true,
			message: "Successfully added baby",
		};
	} catch (error) {
		throw new Error(error.message);
	}
};
