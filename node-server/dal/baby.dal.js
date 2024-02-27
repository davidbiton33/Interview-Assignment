const Baby = require('../models/baby.model');

module.exports = {
    addNewBabyToDB: async (babyData) => {
        const baby = new Baby(babyData);
        return await baby.save();
    },
    getAllBabiesFromDB: async () => {
        return await Baby.find();
    },
    getBabyFromDBById: async (id) => {
        return await Baby.findById(id);
    },
    updateBabyInDB: async (id, babyData) => {
        return await Baby.findByIdAndUpdate(id, babyData, { new: true });
    },
    deleteBabyFromDB: async (id) => {
        return await Baby.findByIdAndDelete(id);
    }
}