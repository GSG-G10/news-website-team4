const toggleBtn = document.querySelector(".toggle-button");
const navList = document.querySelector(".nav-list");
toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
