let email = document.querySelector("#email");

$("select , input, date").prop("required", true);
$("#email").blur(validateEmail).keyup(validateEmail);
$("#number").blur(validateMobile).keyup(validateMobile);
function validateEmail() {
  console.log("validate");

  let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!regex.test($("#email").val())) {
    $("#email").addClass("border-danger");
    $("#invalidemail").text("Enter Valid Email Id").animate(
      {
        opacity: 1,
      },
      "500"
    );
    return false;
  } else {
    $("#email").removeClass("border-danger");

    $("#invalidemail").text("");
    return true;
  }
}
function validateMobile() {
  console.log("mobile");
  let regex = /^\+?[0-9]{7,14}$/;
  if (!regex.test($("#number").val())) {
    $("#number").addClass("border-danger");
    $("#invalidNumber").text("Enter Valid Mobile Number").animate(
      {
        opacity: 1,
      },
      "500"
    );
    return false;
  } else {
    $("#number").removeClass("border-danger");
    $("#invalidNumber").text("");
    return true;
  }
}
