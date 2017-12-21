var bcrypt = require('bcrypt-nodejs');


var hash = bcrypt.hashSync("password");

if (bcrypt.compareSync("password", hash)) {
  console.log(hash);
}