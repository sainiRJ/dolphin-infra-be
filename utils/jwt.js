import jwt from "jsonwebtoken"

const generateAccessToken = (user)=>{
    console.log(process.env.JWT_ACCESS_SECRET," process.env.JWT_ACCESSS_SECRET")
    return jwt.sign({id: user.id, role: user.role}, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "1d"
    })
}

const generateRefreshToken = (user) =>{
    return jwt.sign({id: user.id}, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d"
    })
}

const verifyToken = (token) =>{
      try {
        console.log(process.env.JWT_ACCESS_SECRET, "process.env.JWT_ACCESS_SECRET");

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        return decoded;
    } catch (error) {
        console.log("JWT Verify Error:", error.message);
        return null;
    }
};

export {generateAccessToken, generateRefreshToken, verifyToken}