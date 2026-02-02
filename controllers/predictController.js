exports.predictLoad = (req, res) => {
  const hospitalId = req.params.hospitalId;
  const predictedLoad = Math.floor(Math.random() * 200); // dummy logic
  res.json({
    hospitalId,
    predictedLoad,
    alert: predictedLoad > 150,
  });
};