document.getElementById("generate").onclick = function () {
  const length = document.getElementById("length").value;
  const password = generatePassword(length);
  document.getElementById("password").innerText = password;
};

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  const passwordEl = document.getElementById("password");
  const password = passwordEl.textContent;

  navigator.clipboard
    .writeText(password)
    .then(() => {
      console.log("Password copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy password: ", error);
    });
});
