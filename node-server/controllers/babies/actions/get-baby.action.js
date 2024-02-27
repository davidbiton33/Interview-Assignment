const {getBabyFromDBById} = require("../../../dal/baby.dal");

module.exports = async (babyId) => {
    try {
        const baby = await getBabyFromDBById(babyId);
        if (!baby) {
            return {
                success: false,
                message: "Baby not found",
            };
        }
        return {
            success: true,
            data: baby,
            message: "Successfully retrieved baby",
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
