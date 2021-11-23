function validateForm() {
  let x = document.forms["accountForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}