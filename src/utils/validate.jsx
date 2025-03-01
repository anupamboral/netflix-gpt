export const checkValidData = (email, password) => {
  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); //* validating email using regex
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "Please enter valid email";
  if (!isValidPassword)
    return "Password must contain at least 8 characters,at least 1 uppercase letter, 1 lowercase letter, and 1 number,can contain special characters";

  return null; //* if no problem in validation then return null
};
