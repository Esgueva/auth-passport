const jwt = require("jsonwebtoken");

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) return console.log("Missing arguments");

function singToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == "sing") {
  console.log(singToken({ sub: nameOrToken }, secret));
} else if (option == "verify") {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log("Option needs to be 'sing' or 'verity'");
}

//node index.js sing secretKey esgueva
//node index.js verify secretKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlc2d1ZXZhIiwiaWF0IjoxNTg5NTc4MzM0fQ.NaoKp02qcGIU4aw-WfosqGajXTC_SbF4yQsJaNwRcNY
