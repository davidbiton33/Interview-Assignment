const {getAllBabiesFromDB} = require("../../../dal/baby.dal");

module.exports = async () => {
    try {
        const babies = await getAllBabiesFromDB();
        return {
            success: true,
            data: babies,
            message: "Successfully retrieved all babies",
        };
    } catch (error) {
        throw new Error(error.message);
    }
};
