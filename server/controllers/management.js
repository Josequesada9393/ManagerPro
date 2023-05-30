import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";


export const getAdmins = async (req, res) => {
    try {
      const admins = await User.find({ role: "admin" }).select("-password");
      res.status(200).json(admins);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };


  export const getUserPerformance = async (req, res) => {
    try {
      const {id} = req.params;
      const userWithStats = await User.aggretate([
        // we find the user with that particular ID,
        //we make sure that the ID matches the mongoDB ObjectId object
        {$match: {_id: new mongoose.Types.ObjectId(id)}},
        {
          $lookup: {
            //compare the User table with localfield _id with
            //affiliateStats table with userID, return results as affiliateStats model
            from: 'affiliatestats',
            localField: "_id",
            foreignField: "userId",
            as: "affiliateStats"
          }
        },
        //flaten the information
        {$unwind: "$affiliateStats"}
      ]);

      const saleTransaction = await Promise.all(
           userWithStats[0].affiliateStats.affiliateSales.map((id) => {
          return Transaction.findById(id)
        })
      );

      const filteredSaleTransaction = saleTransaction.filter((transaction) => transaction !== null);

      res.status(200).json({user: userWithStats[0], sales: filteredSaleTransaction})
  
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  