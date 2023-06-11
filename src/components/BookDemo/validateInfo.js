export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Name required';
  }
  if (!values.city.trim()) {
    errors.city = 'City required';
  }
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.phonenumber) {
    errors.phonenumber = 'Phone Number is required';
  } else if (!/^\d+$/.test(values.phonenumber)) {
    errors.phonenumber = 'Phone Number should contain only numeric characters';
  } else if (values.phonenumber.length !== 10) {
    errors.phonenumber = 'Phone Number needs to be 10 characters';
  }  
  return errors;
}