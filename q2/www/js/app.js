




  function validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.forms["chimpForm"]["email"].value;
    if(email.match(mailformat)) {
      return true;
    }
    else {
      alert("Invalid Email");
      return false;
    }

  }


  function validateUser() {
    var userformat = /^[a-zA-Z][^\s]{7,23}$/;
    var usertest = document.forms["chimpForm"]["username"].value;
    if(usertest.match(userformat)) {
      return true;
    }
    else {
      alert('Invalid Username');
      return false;
    }
  }

// Make sure to check for characters over 24 still working in the regex for some reason

  function validatePass() {
    var passformat = /^[a-zA-Z][^\s]{7,23}$/;
    var passtest = document.forms["chimpForm"]["password"].value;
    if(passtest.match(passformat)) {
      return true;
    }
    else {
      alert('Invalid Password');
      return false;
    }
  }




  function passShow() {
    var x = document.getElementById('pass');
    if (x.type === "password") {
      x.type = "text";
    }
    else {
      x.type= "password";
    }
  }




  // function checkform()
  //   {
  //       var f = document.forms["chimpForm"].elements;
  //       var cansubmit = true;
  //
  //       for (var i = 0; i < f.length; i++) {
  //           if (f[i].value.length == 0) cansubmit = false;
  //       }
  //
  //       if (cansubmit) {
  //           document.getElementById('submitbutton').disabled = false;
  //       }
  //   }
