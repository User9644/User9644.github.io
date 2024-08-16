setColorThemes();
setNormalTheme("dark");

class Settings {
    static storageKeys = ['theme'];

    static showSettings = function () {
        document.getElementById('themeSelector').value = localStorage.getItem("theme") || "dark";

        document.getElementById('settings').style.display = 'block';
    }

    static changeTheme = function () {
        const theme = document.getElementById('themeSelector').value;

        setUserTheme(theme);
    }

    static resetSettings = function () {
        //localStorage.clear();

        this.storageKeys.forEach(key => {
            localStorage.removeItem(key);
        });
    }
}