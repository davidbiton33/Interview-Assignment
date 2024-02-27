const router = require('express').Router();

const newBabyValidator = require('../middlewares/new-baby-validator');

const {addNewBaby, getAllBabies, getBabyById, updateBaby, deleteBaby} = require('../controllers/babies/babies.controller');

// Create a new baby
router.post('/', newBabyValidator, async(req, res) => {
	try {
		res.status(201).json(await addNewBaby(req.body));
	} catch (error) {
		res.status(500).json({
			message: "Server failed to add new baby",
			error: error.message,
		});
	}
});

// Get all babies
router.get('/', async(req, res) => {
	try {
		res.status(200).json(await getAllBabies());
	} catch (error) {
		res.status(500).json({
			message: "Server failed to retrieve babies",
			error: error.message,
		});
	}
});

// Get a single baby by ID
router.get('/:id', async(req, res) => {
	try {
		res.status(200).json(await getBabyById(req.params.id));
	} catch (error) {
		res.status(500).json({
			message: "Server failed to retrieve baby",
			error: error.message,
		});
	}
});

// Update a baby
router.put('/:id', async(req, res) => {
	try {
		res.status(200).json(await updateBaby(req.params.id, req.body));
	} catch (error) {
		res.status(500).json({
			message: "Server failed to update baby",
			error: error.message,
		});
	}
});

// Delete a baby
router.delete('/:id', async(req, res) => {
	try {
		res.status(200).json(await deleteBaby(req.params.id));
	} catch (error) {
		res.status(500).json({
			message: "Server failed to delete baby",
			error: error.message,
		});
	}
});

module.exports = router;
