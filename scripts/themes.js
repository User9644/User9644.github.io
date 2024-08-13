let themes;
let normalTheme;

function setColorThemes(themeObj) {
    themes = themeObj || {
        bright: {
            color: "black",
            backgroundColor: "white"
        },
        dark: {
            color: "white",
            backgroundColor: "#242424"
        },
        ugly: {
            color: "blue",
            backgroundColor: "orange"
        }
    };
}

function setColorTheme(theme) {
    if(!themes[theme]) console.error(`No Theme called '${theme}'.`);

    for (const key in themes[theme || "dark"]) {
        const value = themes[theme || "dark"][key];

        if (key && value) document.documentElement.style.setProperty("--" + key, value);
    }
}

function setNormalTheme(theme) {
    normalTheme = theme;

    const localTheme = localStorage.getItem("theme");

    if (localTheme || normalTheme) setColorTheme(localTheme || normalTheme);
}

function setUserTheme(theme) {
    localStorage.setItem("theme", theme);

    setColorTheme(theme || normalTheme);
}