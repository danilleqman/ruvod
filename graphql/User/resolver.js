const User = require("./model");
const GraphQLLEmail = require("graphql-type-email");

const validEmail = (email) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};

exports.resolver = {
  Query: {
    user: async (_, { id }) => await User.findById(id),
    users: async (_, { skip, limit }) =>
      await User.find().skip(skip).limit(limit),
  },
  Mutation: {
    createUser: async (_, { input }) => {
      if (validEmail(input.email)) {
        const user = new User({ ...input });
        await user.save();
        return user;
      } else {
        return new Error("incorrect email address");
      }
    },
    updateUser: async (_, { id, input }) => {
      if (validEmail(input.email)) {
        return User.findByIdAndUpdate(id, { ...input });
      } else {
        return new Error("incorrect email address");
      }
    },
    deleteUser: async (_, { id }) => {
      return User.findByIdAndDelete(id);
    },
  },
  Email: GraphQLLEmail,
};
