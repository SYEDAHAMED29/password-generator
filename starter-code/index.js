const slider = document.getElementById("slider");
const charLength = document.getElementById("charLength");
const generatedPassword = document.getElementById("password");
const btn = document.getElementById("generate-btn");
const uppercaseCheck = document.getElementById("uppercase-check");
const lowercaseCheck = document.getElementById("lowercase-check");
const numbersCheck = document.getElementById("numbers-check");
const symbolsCheck = document.getElementById("symbols-check");
const charStrength = document.getElementById("char-strength");
const firstBlock = document.getElementById("first-block");
const secondBlock = document.getElementById("second-block");
const thirdBlock = document.getElementById("third-block");
const fourthBlock = document.getElementById("fourth-block");
const copyBtn = document.getElementById("copy-btn");
const copyPassword = document.getElementById("copy-password");
charLength.textContent = slider.value;
slider.addEventListener("input", () => {
   charLength.textContent = slider.value;
});

window.addEventListener("load", () => {
   lowercaseCheck.checked = true;
   numbersCheck.checked = true;
});

function generateRandomPassword() {
   if (
      (uppercaseCheck.checked === false &&
         lowercaseCheck.checked === false &&
         numbersCheck.checked === false &&
         symbolsCheck.checked === false) ||
      charLength.textContent == 0
   ) {
      return;
   } else {
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()-_=+[]{}|;:',.<>?";
      let checkNum = 0;
      let allChars = "";
      if (uppercaseCheck.checked) {
         allChars = allChars + uppercaseChars;
         checkNum++;
      }
      if (lowercaseCheck.checked) {
         allChars = allChars + lowercaseChars;
         checkNum++;
      }
      if (numbersCheck.checked) {
         allChars = allChars + numberChars;
         checkNum++;
      }
      if (symbolsCheck.checked) {
         allChars = allChars + symbolChars;
         checkNum++;
      }

      let password = "";

      for (let i = 0; i < slider.value; i++) {
         const randomIndex = Math.floor(Math.random() * allChars.length);
         password = password + allChars[randomIndex];
      }
      generatedPassword.textContent = password;
      console.log(password);
      console.log(slider.value);

      generatePasswordStrength(password.length, checkNum);
   }
}

function generatePasswordStrength(num, checkNum) {
   if (num < 5 || checkNum === 1) {
      charStrength.textContent = "TOO WEAK!";
      firstBlock.style.backgroundColor = "#f64a4a";
      secondBlock.style.backgroundColor = "#24232c";
      thirdBlock.style.backgroundColor = "#24232c";
      fourthBlock.style.backgroundColor = "#24232c";
   } else if ((num >= 5 && num <= 8) || checkNum === 2) {
      charStrength.textContent = "WEAK";
      firstBlock.style.backgroundColor = "#fb7c58";
      secondBlock.style.backgroundColor = "#fb7c58";
      thirdBlock.style.backgroundColor = "#24232c";
      fourthBlock.style.backgroundColor = "#24232c";
   } else if ((num >= 9 && num <= 12) || checkNum === 3) {
      charStrength.textContent = "MEDIUM";
      firstBlock.style.backgroundColor = "#f8cd65";
      secondBlock.style.backgroundColor = "#f8cd65";
      thirdBlock.style.backgroundColor = "#f8cd65";
      fourthBlock.style.backgroundColor = "#24232c";
   } else if (num > 12) {
      charStrength.textContent = "STRONG";
      firstBlock.style.backgroundColor = "#a4ffaf";
      secondBlock.style.backgroundColor = "#a4ffaf";
      thirdBlock.style.backgroundColor = "#a4ffaf";
      fourthBlock.style.backgroundColor = "#a4ffaf";
   }
}

function copyParagraphContent() {
   const text = password.innerText;
   navigator.clipboard.writeText(text);
   copyPassword.textContent = "Copied";
   setTimeout(() => {
      copyPassword.textContent = "";
   }, 3000);
}

btn.addEventListener("click", generateRandomPassword);
copyBtn.addEventListener("click", copyParagraphContent);
