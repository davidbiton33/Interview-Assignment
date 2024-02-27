const {updateBabyInDB} = require("../../../dal/baby.dal");

module.exports = async (babyId, babyData) => {
	try {
		const updatedBaby = await updateBabyInDB(babyId, babyData);
		if (!updatedBaby) {
			return {
				success: false,
				message: "Baby not found",
			};
		}
		return {
			success: true,
			message: "Successfully updated baby",
			data:updatedBaby
		};
	} catch (error) {
		throw new Error(error.message);
	}
};
