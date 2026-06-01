import jwt from "jsonwebtoken";

import serviceUtil from "../utils/serviceUtil.js";
import { httpStatusCodes } from "../constants/customTypes/networkTypes.js";
import {
  genericServiceErrors,
} from "../constants/errors/genericServiceErrors.js";

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED)
      .json(
        serviceUtil.buildResult(
          false,
          httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED,
          genericServiceErrors.auth.NoAuthorizationToken,
        ),
      );
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    next();
  } catch (err) {
    res
      .status(httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED)
      .json(
        serviceUtil.buildResult(
          false,
          httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED,
          genericServiceErrors.auth.NoAuthorizationToken,
        ),
      );
  }
};

export const isAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED)
      .json(
        serviceUtil.buildResult(
          false,
          httpStatusCodes.CLIENT_ERROR_UNAUTHORIZED,
          genericServiceErrors.auth.NoAuthorizationToken,
        ),
      );
  }
  const user =  jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  console.log(user)
    if (user && user.role === "admin") {
        return next();
    }

    return res.status(httpStatusCodes.CLIENT_ERROR_FORBIDDEN || 403).json(
        serviceUtil.buildResult(
            false,
            httpStatusCodes.CLIENT_ERROR_FORBIDDEN || 403,
            "Access denied. Admins only."
        )
    );
};
