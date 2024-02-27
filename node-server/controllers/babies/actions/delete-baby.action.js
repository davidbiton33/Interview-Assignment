const {deleteBabyFromDB} = require("../../../dal/baby.dal");

module.exports = async (babyId) => {
	try {
		const deletedBaby = await deleteBabyFromDB(babyId);
		if (!deletedBaby) {
			return {
				success: false,
				message: "Baby not found",
			};
		}
		return {
			success: true,
			message: "Successfully deleted baby",
		};
	} catch (error) {
		throw new Error(error.message);
	}
};
