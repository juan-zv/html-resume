const lightModeBtn = document.getElementById('light-btn');
const darkModeBtn = document.getElementById('dark-btn');
const systemModeBtn = document.getElementById('system-btn');
const theme = localStorage.getItem('theme');

if (theme === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
} else if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}
else if (theme === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}
else if (theme === 'system') {
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('light-mode');
}

lightModeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
});

systemModeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'system');
    
});

// Add event listeners to the return top button
const returnTopBtn = document.getElementById('return-top');

returnTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

