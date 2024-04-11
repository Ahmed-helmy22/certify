import jwt from "jsonwebtoken";

export const signToken = (playload) =>
jwt.sign(playload, process.env.JWT_SECRET, {
  expiresIn:Date.now() + process.env.TIME_EXPIRED_IN  * 24 * 60 * 60,
});

export const decodeToken = (token) => {
  let decoded;
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    console.log(decode);
    decoded = decode;
  });
  return decoded;
};
