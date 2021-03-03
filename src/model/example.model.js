// import mongoose from "mongoose";

// var Schema = mongoose.Schema;
// var exampleSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//     },
//     bio: {
//       type: String,
//     }
//   },
//   {
//     timestamps: { createdAt: "created_at", updatedAt: "updated_at"}
//   }
// );

// const Example = mongoose.model("Example", exampleSchema);
// module.exports = Example;

// Include Sequelize module. 
const Sequelize = require('sequelize') 
const sequelize = require('../utils/database') 

const Example = sequelize.define('example', { 
    example_id: { 
        type:Sequelize.INTEGER, 
        autoIncrement:true, 
        allowNull:false, 
        primaryKey:true
    }, 
  
    name: { type: Sequelize.STRING, allowNull:false }, 
    image: { type: Sequelize.STRING, allowNull:false }, 
    
}) 
  
module.exports = Example
