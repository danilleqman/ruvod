const User = require("./model");
const Email = require("graphql-type-email");
exports.resolver = {
  Query: {
    user: (_, { id }) => User.findById(id),
    users: () => User.find(),
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User({ ...input });
      await user.save();
      return user;
    },
    updateUser: async (_, { id, input }) => {
      return User.findByIdAndUpdate(id, { ...input });
    },
    deleteUser: async (_, { id }) => {
      return User.findByIdAndDelete(id);
    },
  },
  Email: Email,
};
