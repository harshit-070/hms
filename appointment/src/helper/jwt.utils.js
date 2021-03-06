const jwt = require("jsonwebtoken");

const privateKey = process.env.PRIVATE_KEY;

function sign(object, options) {
  return jwt.sign(object, privateKey, options);
}

function decode(token) {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { valid: true, expired: false, decoded };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

module.exports = {
  sign,
  decode,
};
