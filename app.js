const searchBtn = document.querySelector(".search-btn"),
    searchInput = document.querySelector(".search-box input"),
    cancelBtn = document.querySelector(".cancel-btn"),
    autocomBox = document.querySelector(".autocom-box");
    searchBox = document.querySelector(".search-box");
searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}