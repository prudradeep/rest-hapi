module.exports = function (mongoose) {
  var modelName = "role";
  var Types = mongoose.Schema.Types;
  var Schema = new mongoose.Schema({
    name: {
      type: Types.String,
      enum: ["Account", "Admin", "SuperAdmin"],
      allowNull: false
    },
    description: {
      type: Types.String,
      allowNull: true
    }
  }); 
    
    Schema.methods = {
      collectionName:modelName,
      routeOptions: {
        associations: {
          users: {
            type: "ONE_MANY",
            alias: "user",
            foreignField: "role",
            model: "user"
          },
          permissions: {
            type: "MANY_MANY",
            alias: "permission",
            model: "permission",
            linkingModel: "role_permission"
          }
        }
      }
    };

  return Schema;
};