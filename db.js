// const mongoose = require("mongoose");
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI =
//   "mongodb+srv://shivanshshukla:shivansh02@cluster0.lg9s2jw.mongodb.net/MERNPRO?retryWrites=true&w=majority"; // Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//   mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//     // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//     if (err) console.log("---" + err);
//     else {
//       // var database =
//       console.log("connected to mongo");
//       const foodCollection = await mongoose.connection.db.collection(
//         "food_items"
//       );
//       foodCollection.find({}).toArray(async function (err, data) {
//         const categoryCollection = await mongoose.connection.db.collection(
//           "Categories"
//         );
//         categoryCollection.find({}).toArray(async function (err, Catdata) {
//           callback(err, data, Catdata);
//         });
//       });
//       // listCollections({name: 'food_items'}).toArray(function (err, database) {
//       // });
//       //     module.exports.Collection = database;
//       // });
//     }
//   });
// };

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://shivanshshukla:shivansh02@cluster0.lg9s2jw.mongodb.net/MERNPRO?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("MERNPRO");
    const collection = db.collection("users");

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);
