/** @format */
const Store = require("../models/Store");
// Handle addStoreInfo
exports.addStoreInfo = async (req, res) => {
  try {
    const storeName = await Store.findOne({ storeName: req.body.storeName });
    if (storeName) {
      return res
        .status(400)
        .json({ message: "Store with this name is already registered" });
    } else {
      await Store.create({     
        storeName: req.body.storeName,
        address: req.body.address,
        gst: req.body.gst,
        startTiming: req.body.startTiming,
        closeTiming: req.body.closeTiming,
        userid: req.user.id
      });
      return res.redirect('/dashboard/details');
    }
  } catch (error) {
      console.log("Error in creating the store", error);
      return res.status(400).json({ message: "Store is not register please try again" });
  }
};

exports.storeForm = (req, res) => {
  return res.render('store');
}

module.exports.destroy = async function (req, res) {
  try {
    let store = await Store.findOne({user: req.user.id});
    store.deleteOne({
      _id: store._id
    });

    return res.redirect("back");

  } catch (err) {
    console.log("Error in deleteing Store Info ==> ", err);
    return res.redirect("back");
  }
};