const toggle = document.getElementById("toggle-theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

console.log(currentTheme);

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("dark-theme")});

    toggle.innerText = "🔆";
}
else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    Array.from(document.getElementsByClassName('icon')).forEach(element => {element.classList.toggle("light-theme")});

    toggle.innerText = "🌙";
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
    toggle.innerText = theme === "dark" ? "🔆" : "🌙";
    localStorage.setItem("theme", theme);
});

console.log(`
// ASCII Art generated from https://patorjk.com/software/taag/#p=display&w=.&f=3-D&t=Juan%20Zurita

......**..................................********................**...**............
...../**.................................//////**................//.../**............
...../**.**...**..******...*******............**...**...**.******.**.******..******..
...../**/**../**.//////**.//**///**..........**.../**../**//**//*/**///**/..//////**.
...../**/**../**..*******../**../**.........**..../**../**./**././**../**....*******.
.**../**/**../**.**////**../**../**........**...../**../**./**.../**../**...**////**.
//*****.//******//********.***../**.......********//******/***.../**..//**.//********
./////...//////..////////.///...//.......////////..//////.///....//....//...////////.

`)