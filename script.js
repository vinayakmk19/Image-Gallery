let scrollContainer = document.querySelector(".gallery");
let nextButton = document.getElementById("next-btn");
let backButton = document.getElementById("back-btn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextButton.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backButton.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
