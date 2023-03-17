function containsNumbers(str) {
  return /\d/.test(str);
}
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
function containsLetters(str) {
  return /[a-zA-Z]/.test(str);
}
var check = 0;
function send() {
  check = 0;
  var name = document.querySelector("#name").value;
  var number = document.querySelector("#number").value;
  var month = document.querySelector("#month").value;
  var year = document.querySelector("#year").value;
  var date =
    document.querySelector("#month").value +
    "/" +
    document.querySelector("#year").value;
  var cvc = document.querySelector("#cvc").value;
  // Name check
  if (containsNumbers(name) == false && !!name == true) {
    check++;
    document.querySelector("#name").style.border =
      "1px solid hsl(270, 3%, 87%)";
    document.querySelector("#name-error").style.display = "none";
  } else if (containsNumbers(name) == true && !!name == true) {
    document.querySelector("#name-error").style.display = "block";
    document.querySelector("#name").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#name-error").innerHTML =
      "Wrong format, letters only";
  } else if (!!name == false) {
    document.querySelector("#name-error").style.display = "block";
    document.querySelector("#name").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#name-error").innerHTML = "Can't be blank";
  }
  // Name check

  //   Number check
  if (
    containsLetters(number) == false &&
    !!number == true &&
    number.length == 19
  ) {
    check++;
    document.querySelector("#number").style.border =
      "1px solid hsl(270, 3%, 87%)";
    document.querySelector("#number-error").style.display = "none";
  } else if (containsLetters(number) == true && !!number == true) {
    document.querySelector("#number-error").style.display = "block";
    document.querySelector("#number").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#number-error").innerHTML =
      "Wrong format, numbers only";
  } else if (!!number == false) {
    document.querySelector("#number-error").style.display = "block";
    document.querySelector("#number").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#number-error").innerHTML = "Can't be blank";
  } else if (
    !!number == true &&
    containsNumbers(number) == true &&
    number.length !== 19
  ) {
    document.querySelector("#number-error").style.display = "block";
    document.querySelector("#number").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#number-error").innerHTML =
      "There must be 16 numbers in xxxx xxxx xxxx xxxx format";
  }
  //   Number check
  var y = 0;
  var z = 0;
  //   Date check
  if (
    containsOnlyNumbers(month) == true &&
    !!month == true &&
    month.length == 2 &&
    parseInt(month) <= 12
  ) {
    check++;
    document.querySelector("#month").style.border =
      "1px solid hsl(270, 3%, 87%)";
    document.querySelector("#date-error").style.display = "none";
  } else if (containsOnlyNumbers(month) == false && month.length == 2) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML =
      "Wrong format, numbers only";
    y++;
  } else if (
    containsNumbers(month) == true &&
    !!month == true &&
    month.length !== 2
  ) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Wrong format, MM";
    y++;
  } else if (
    containsNumbers(month) == false &&
    !!month == true &&
    month.length !== 2
  ) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Wrong format";
    y++;
  } else if (
    containsNumbers(month) == true &&
    !!month == true &&
    month.length == 2 &&
    parseInt(month) > 12
  ) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Invalid month";
    y++;
  } else if (!!month == false) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Can't be blank";
    y++;
  }
  if (containsOnlyNumbers(year) == true && !!year == true && year.length == 2) {
    check++;
    document.querySelector("#year").style.border =
      "1px solid hsl(270, 3%, 87%)";
    document.querySelector("#date-error").style.display = "none";
  } else if (
    containsOnlyNumbers(year) == false &&
    !!year == true &&
    year.length == 2
  ) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#year").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML =
      "Wront format, numbers only";
    z++;
  } else if (!!year == false) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#year").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    z++;
    document.querySelector("#date-error").innerHTML = "Can't be blank";
  } else if (year.length !== 2) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#year").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Wrong format";
    z++;
  }
  //   Date check

  //   CVC check
  if (containsOnlyNumbers(cvc) == true && cvc.length == 3 && !!cvc == true) {
    check++;
    document.querySelector("#cvc").style.border = "1px solid hsl(270, 3%, 87%)";
    document.querySelector("#cvc-error").style.display = "none";
  } else if (!!cvc == false) {
    document.querySelector("#cvc-error").style.display = "block";
    document.querySelector("#cvc").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#cvc-error").innerHTML = "Can't be blank";
  } else if (containsOnlyNumbers(cvc) == false) {
    document.querySelector("#cvc-error").style.display = "block";
    document.querySelector("#cvc").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#cvc-error").innerHTML =
      "Wrong format, numbers only";
  } else if (cvc.length !== 3) {
    document.querySelector("#cvc-error").style.display = "block";
    document.querySelector("#cvc").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#cvc-error").innerHTML = "Wrong format";
  }
  if (y > 0) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#month").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Wrong format";
  }
  if (z > 0) {
    document.querySelector("#date-error").style.display = "block";
    document.querySelector("#year").style.border =
      "1px solid hsla(0, 100%, 66%, 0.9)";
    document.querySelector("#date-error").innerHTML = "Wrong format";
  }
  if (check == 5) {
    document.querySelector("#card-name").innerHTML = name;
    document.querySelector("#card-number").innerHTML = number;
    document.querySelector("#card-date").innerHTML = date;
    document.querySelector("#card-cvc").innerHTML = cvc;
    document.querySelector("#right").innerHTML =
      "<div id='endscreen'></div><button id='continue'></button>";
  }
}
