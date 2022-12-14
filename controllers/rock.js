const Rock = require('../models/Rock');

exports.create = async (req, res) => {
    const { rock } = req.body;

    try {
        const rockExist = await Rock.findOne({ rock });
        if (rockExist) {
            return res.status(400).json({
                errorMessage: `${rock} El Color De Piedra Ya Existe.`,
            });
        }

        let newRock = new Rock();
        newRock.rock = rock;

        newRock = await newRock.save();

        res.status(200).json({
            rock: newRock,
            successMessage: `${newRock.rock} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Color De Piedra: ', err);
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const rocks = await Rock.find({});
        res.status(200).json({
            rocks,
        });
    } catch (err) {
        console.log('Error Color De Piedra readAll: ', err);
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const rockId = req.params.rockId;
        const deletedRock = await Rock.findByIdAndDelete(rockId);

        res.json(deletedRock);
    } catch (err) {
        console.log(err, 'rockController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};