const Task = require('./../models/taskModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllTasks = catchAsync(async (req, res, next) => {
  try{
    // const tasks = await Task.find()
    const features = new APIFeatures(Task.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tasks = await features.query;
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
          tasks
        }
      });
    } 
    catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  });
  
    exports.getTask = async(req, res) => {
          // console.log(req.params);
          // const id = req.params.id * 1;
          try{
          const task = await Task.findById(req.params.id);
        //   // Tour.findOne({ _id: req.params.id })
      
          res.status(200).json({
            status: 'success',
            data: {
              task
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
      
      
        exports.createTask = async(req, res) => {
            try {
            //   const newTour = new Tour({})
            //   newTour.save()
        //   await Task.create({}).then()
              const newTask = await Task.create(req.body);
          
              res.status(201).json({
                status: 'success',
                data: {
                  tour: newTask
                }
              });
            } catch (err) {
              res.status(400).json({
                status: 'fail',
                message: err
              });
            }
          };


        exports.updateTask = async(req, res) => {
            // console.log(req.requestTime);
          try{
            const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            });
              // SEND RESPONSE
              res.status(200).json({
                status: 'success',
                // results: tours.length,
                data: {
                  task
                }
              });
            } 
            catch (err) {
              res.status(400).json({
                status: 'fail',
                message: err
              });
            }
          }

            
exports.deleteTask = async(req, res) => {
    // console.log(req.requestTime);
    try {
      await Task.findByIdAndDelete(req.params.id);
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
  } 
