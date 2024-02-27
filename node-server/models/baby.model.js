const mongoose = require("mongoose");

const babySchema = new mongoose.Schema({
	birthday: {
		type: String,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
	height: {
		type: Number,
		required: true,
	},
	parentsName: {
		type: String,
		required: true,
	},
	hairColor: String
})

module.exports = mongoose.model("Baby", babySchema);
 
