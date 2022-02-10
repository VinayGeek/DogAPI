const dogData = require("../module/model");
const Query = require("../utils/Query");
const ErrorHandler = require("../utils/ErrorHandler");
const AsyncError = require("../middleware/AsyncError");
//localhost:8000/dogs?name=pug

exports.getAllData = AsyncError(async (req, res, next) => {
  // const feature = new Query(dogData.find(), req.query).Search();
  const allData = await dogData.find();
  // const allData = await feature;

  if (!allData) {
    return next(new ErrorHandler("Not Found", 404));
  }

  res.status(200).json({
    total: allData.length,
    allData,
  });
  // dogData.find({}, { __v: 0 }, (err, docs) => {
  //   res.status(200).json({
  //     docs,
  //   });
  // });
});

exports.createData = async (req, res) => {
  const createNew = await dogData.create(req.body);
  res.status(200).json({
    createNew,
  });
};

exports.deleteData = (req, res) => {
  dogData.findByIdAndDelete(req.params.id, (err, docs) => {
    res.send(docs);
  });
};

exports.updateData = async (req, res) => {
  const patchData = await dogData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    patchData,
  });
};

exports.getOneData = async (req, res) => {
  const newDogData = await dogData.findOne({ name: req.params.name });
  res.status(200).send([newDogData]);
};
