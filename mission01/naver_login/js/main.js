const user = {
     id: "asd@naver.com",
     pw: "spdlqj123!@",
};

function emailReg(text) {
     const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     return re.test(String(text).toLowerCase());
}

function pwReg(text) {
     const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
     return re.test(String(text).toLowerCase());
}

const button = document.querySelector(".btn-login");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");

let emailValue;
let passwordValue;

const handleEmail = (e) => {
     emailValue = e.target.value;
     if (!emailReg(emailValue)) {
          userEmail.classList.add("is--invalid");
     } else {
          userEmail.classList.remove("is--invalid");
     }
};

const handlePassword = (e) => {
     passwordValue = e.target.value;
     if (!pwReg(passwordValue)) {
          userPassword.classList.add("is--invalid");
     } else {
          userPassword.classList.remove("is--invalid");
     }
};

const handleSubmit = () => {
     if (emailValue === user.id && passwordValue === user.pw) {
          window.location.href = "welcome.html";
     }
};

userEmail.addEventListener("input", handleEmail);
userPassword.addEventListener("input", handlePassword);
button.addEventListener("click", handleSubmit);
