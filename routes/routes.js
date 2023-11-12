const express = require('express');
const Model = require('../models/model');
const { STATUS_CODES, ERROR_MESSAGES } = require('../shared/constant');
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
        res.status(STATUS_CODES.ERROR).json({message: error?.message || ERROR_MESSAGES.ERROR})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({message: error?.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req?.params?.id);
        res.json(data)
    }
    catch(error){
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({message: error?.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR})
    }
})

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
        res.status(STATUS_CODES.ERROR).json({ message: error?.message || ERROR_MESSAGES.ERROR })
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
        res.status(STATUS_CODES.ERROR).json({ message: error?.message || ERROR_MESSAGES.ERROR })
    }
})

module.exports = router;