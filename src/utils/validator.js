import validator from "validator";

const signupValidator = ({
  fname,
  lname,
  phone,
  email,
  password,
  cPassword,
}) => {
  let errors = [];
  if (!fname) errors.push("fname");
  if (!lname) errors.push("lname");
  if (!validator.isEmail(email)) errors.push("email");
  if (!phone) errors.push("phone");
  errors = [...errors, ...validatePassword(password, cPassword)];
  return errors;
};

const signinValidator = (email, pass) => {
  const errors = [];
  if (!validator.isEmail(email)) errors.push("email");
  if (!validator.isStrongPassword(pass)) errors.push("password");
  return errors;
};

const validatePassword = (password, cPassword) => {
  const errors = [];
  if (!validator.isStrongPassword(password)) errors.push("password");
  if (password !== cPassword || !cPassword) errors.push("confirmPassword");
  return errors;
};
export { signinValidator, signupValidator, validatePassword };
