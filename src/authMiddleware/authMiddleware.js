const jwt = require("jsonwebtoken");

export default async function verifyToken(req,next){
    const token = req.headers;

    console.log("hello i am verifying the token");

    next();
}