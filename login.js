function val() {
  const uname = document.getElementById("uname").value;
  const namereg = /[A-Za-z]$/;

  if (!namereg.test(uname)) {
    alert("Enter Valid Name");
    return false;
  } else {
    alert("Done..");
    true;
  }

  const pass = document.getElementById("pass").value;
  if (pass.length > 8) {
    alert("Done..");
    true;
  } else {
    alert("Password should be more than 8");
    return false;
  }
}
