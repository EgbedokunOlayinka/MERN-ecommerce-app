const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Egbedokun Olayinka",
    email: "egbedokunolayinka@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
