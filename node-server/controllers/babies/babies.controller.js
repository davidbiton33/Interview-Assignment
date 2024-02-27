module.exports = {
    addNewBaby: require("./actions/add-baby.action"),
    getAllBabies: require("./actions/get-all-babies.action"),
    getBabyById: require("./actions/get-baby.action"), // Fixed incorrect file reference
    updateBaby: require("./actions/edit-baby.action"), // Fixed incorrect file reference
    deleteBaby: require("./actions/delete-baby.action")
}