import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let image = document.querySelector("img")
  image.addEventListener("click", () => {
    console.log(image);
    image.style.zoom= "200%";
  })
});
