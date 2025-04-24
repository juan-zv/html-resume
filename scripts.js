const toggleButton = document.getElementById("toggle-theme");
const savedTheme = localStorage.getItem("theme");
document.body.style.colorScheme = savedTheme || "light"; // Set the initial color scheme based on saved theme
console.log("Initial color scheme: ", document.body.style.colorScheme);

console.log("Saved theme: ", savedTheme);

if (savedTheme == null) {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
        localStorage.setItem("theme", "dark");
        toggleButton.innerText = "🔆";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.innerText = "🌙";
    }
} else if (savedTheme == "dark") {
    toggleButton.innerText = "🔆";
}
else if (savedTheme == "light") {
    toggleButton.innerText = "🌙";
}

toggleButton.addEventListener("click", function () {
    if (savedTheme === "dark") {
        document.style.colorScheme = "light";
        localStorage.setItem("theme", "light");
        toggleButton.innerText = "🌙";
    } else if (savedTheme === "light") {
        document.body.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
        toggleButton.innerText = "🔆";
    }
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

