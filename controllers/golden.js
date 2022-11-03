const Golden = require('../models/Golden');

exports.create = async (req, res) => {
    const { golden } = req.body;

    try {
        const goldenExist = await Golden.findOne({ golden });
        if (goldenExist) {
            return res.status(400).json({
                errorMessage: `${golden} El Color De Oro Ya Existe.`,
            });
        }

        let newGolden = new Golden();
        newGolden.golden = golden;

        newGolden = await newGolden.save();

        res.status(200).json({
            golden: newGolden,
            successMessage: `${newGolden.golden} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Color De Oro: ', err);
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const goldens = await Golden.find({});
        res.status(200).json({
            goldens,
        });
    } catch (err) {
        console.log('Error De Color De Oro readAll: ', err);
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const goldenId = req.params.goldenId;
        const deletedGolden = await Golden.findByIdAndDelete(goldenId);

        res.json(deletedGolden);
    } catch (err) {
        console.log(err, 'goldenController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};