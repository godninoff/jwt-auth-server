import { RequestHandler } from "express";
import User from "../model/user";
import createHttpError, { InternalServerError } from "http-errors";

export const signupUser: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  try {
    if (existingUser)
      return next(
        createHttpError(422, "Указаный Вами email уже зарегистрирован")
      );
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "Пользователь зарегистрирован" });
  } catch (error) {
    return next(InternalServerError);
  }
};
