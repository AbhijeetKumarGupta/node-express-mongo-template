const express = require('express');
const Model = require('../models/model');
const { STATUS_CODES, STATUS_MESSAGES } = require('../shared/constant');
const { getDetailsController, getAllController } = require('../controllers/index');
const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req?.body?.name,
        age: req?.body?.age
    })

    try {
        const dataToSave = await data.save();
        res.status(STATUS_CODES.SUCCESS).json(dataToSave)
    }
    catch (error) {
        res.status(STATUS_CODES.ERROR).json({message: error?.message || STATUS_MESSAGES.ERROR})
    }
})

//Get all Method
router.get('/getAll', getAllController)

//Get by ID Method
router.get('/getOne/:id', getDetailsController)

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req?.params?.id;
        const updatedData = req?.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(STATUS_CODES.ERROR).json({ message: error?.message || STATUS_MESSAGES.ERROR })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req?.params?.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data?.name} has been deleted..`)
    }
    catch (error) {
        res.status(STATUS_CODES.ERROR).json({ message: error?.message || STATUS_MESSAGES.ERROR })
    }
})

module.exports = router;