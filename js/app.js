const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
(generateBtn = wrapper.querySelector(".form button")), (qrImg = wrapper.querySelector(".qr-code img"));

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    //if input is empty return from here
    return;
  }
  generateBtn.innerText = "Generating QR Code...";
  //get user API for user input
  //API and passing the API returtned img src
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    //once QR code img loaded
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
