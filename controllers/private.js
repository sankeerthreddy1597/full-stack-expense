exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Welcome, You got access to your private data",
    userData: req.user,
  });
};
