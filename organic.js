

/* ORGANIC FOOD JAVASCRIPT */



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

// buy page validation
// onsubmit validation
function sub1() {
    var uname = f1.uname.value;
    if (uname == "") {
        //f1.uname.focus();
        msg1.innerHTML = "Enter User Name";
        msg1.style.color = "red";
        f1.uname.style.border = "3px solid red";
        return false;
    }
    else if (!uname.match(name)) {
        f1.uname.value = "";
        f1.uname.focus();
        msg1.innerHTML = "Please Fill correct User Name";
        msg1.style.color = "red";
        uname.style.border = "3px solid red";
        return false;
    }
    else {
        err.innerHTML = "<img src='correct.jpg' height='30px'width='30px'>";
        f1.email.focus();
    }
}


function confirmorder() {
    document.getElementById("demo").innerHTML =
    "<a href='C:/Users/Shree/.vscode/projects/organic food/organic.html'>Your order is confirm ..... visit again Go to homepage....</a>";
  }



