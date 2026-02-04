// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     description: {
//       type: String,
//     },

//     employee: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Employee",
//       required: true,
//     },

//     status: {
//       type: String,
//       enum: ["NEW", "PENDING", "COMPLETED", "REJECTED"],
//       default: "NEW",
//     },

//     accepted: {
//       type: Boolean,
//       default: false,
//     },

//     // ✅ NEW FIELDS
//     scheduleDate: {
//       type: Date,
//       required: true,
//     },

//     deadlineDate: {
//       type: Date,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Task", taskSchema);



const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,

  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },

  scheduleDate: {
    type: Date,
    required: true,
  },

  deadlineDate: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    enum: ["NEW", "PENDING", "COMPLETED", "REJECTED"],
    default: "NEW",
  },

  accepted: {
    type: Boolean,
    default: false,
  },

  completedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
