export default function Validate(data) {
  console.log("UseValidate.data:", data);

  console.log(data);

  const { username, email, password } = data;
  //console.log("username", username);
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidName = /^[a-z A-Z 0-9]+$/;
  if (!data.username.trim())
    return { isValid: false, error: "Name is missing!" };
  if (!isValidName.test(data.username))
    return { isValid: false, error: "Invalid name!" };

  if (!data.email.trim()) return { isValid: false, error: "Email is missing!" };
  if (!isValidEmail.test(data.email))
    return { isValid: false, error: "Invalid email!" };

  if (!data.password.trim())
    return { isValid: false, error: "Password is missing!" };
  if (data.password.length < 8)
    return {
      isValid: false,
      error: "Password must be 8 characters long!",
    };
  // user.isValid = true;

  //console.log("error", error);
  //return { isValid: false, error: "Error" };

  return {
    isValid: true,
    message: "All passed",
    // username: data.username ? data.username : "",
    // email: data.email ? data.email : "",
    // password: data.password ? data.password : "",
    // message: "ready for processing",
  };
}
