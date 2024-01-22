$("#submit").click((e) => {
  validateForm();
});

function validateForm() {
  if (!validateName($("#txtFirstName").val())) {
    alert("Invalid First Name");
    return;
  } else if (!validateName($("#txtFirstName").val())) {
    alert("invalid Last name");
    return;
  } else if (!validateEmail()) {
    alert("Email is invalid");
    return;
  } else if (!validateMobile()) {
    alert("Mobile number is invalid");
    return;
  } else {
    $("form").submit();
  }
}
function validateName(Names) {
  let regex = /[a-zA-Z]/;
  return regex.test(Names);
}
