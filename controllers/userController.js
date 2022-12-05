const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});



exports.getUser = async(req, res) => {
            try{
            const user = await User.findById(req.params.id);
          //   // Tour.findOne({ _id: req.params.id })
        
            res.status(200).json({
              status: 'success',
              data: {
                user
              }
            });
          }
            catch (err) {
              res.status(404).json({
                status: 'fail',
                message: err
              });
            }
}

exports.createUser = async(req, res) => {
  try{const newUser = await User.create(req.body);
          
    res.status(201).json({
      status: 'success',
      data: {
        tour: newUser
      }
    });
  } catch (err) {

    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
 
exports.updateUser = async(req, res) => {
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    } 
    catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
};
exports.deleteUser = async(req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    // SEND RESPONSE
    res.status(204).json({
      status: 'success',
      // results: tours.length,
      data: null
    });
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  } 
};