import httpResponse from "../utils/http.response.js";

export const checkAdmin = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== "admin") httpResponse.Unauthorized(res, "Este endpoint es para usuarios administradores")
    else next();
  } catch (error) {
    next(error);
  }
};
