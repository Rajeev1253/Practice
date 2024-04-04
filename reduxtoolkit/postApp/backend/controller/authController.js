import { userModel } from "../model/userModel.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

export const registerController = async (req, res) => {
  try {
    const userData = req.body;
    // const { name, username, email, address, phone, website, company } =
    //   req.body;
    // const { street, suite, city, Zipcode, geo } = address;
    // const { lat, lng } = geo;
    // const { CompanyName, catchPhrase, bs } = company;

    const user = new userModel(userData).save();
    res.status(201).send({
      success: true,
      message: `user registered sucessfully`,
      // user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      meessage: `error in registeration`,
      error,
    });
  }
};
