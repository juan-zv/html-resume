const toggle = document.getElementById("toggle-theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("dark-theme")});
}
else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("light-theme")});

}

toggle.addEventListener("click", function () {

    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("light-theme")});
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    }
    else {
        document.body.classList.toggle("dark-theme");
        Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("dark-theme")});
        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
});