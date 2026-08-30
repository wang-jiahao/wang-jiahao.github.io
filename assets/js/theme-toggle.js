(function (window, document) {
  "use strict";

  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var storageKey = "homepage-theme";
  var colorScheme = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : { matches: false };

  function getStoredTheme() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {}
  }

  function getSystemTheme() {
    return colorScheme.matches ? "dark" : "light";
  }

  function updateButton(theme) {
    if (!button) {
      return;
    }

    var isDark = theme === "dark";
    var label = isDark ? "Switch to light theme" : "Switch to dark theme";
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute("title", label);
  }

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    updateButton(theme);

    if (themeColor) {
      themeColor.setAttribute("content", theme === "dark" ? "#1f3144" : "#ffffff");
    }

    if (persist) {
      storeTheme(theme);
    }
  }

  var storedTheme = getStoredTheme();
  var activeTheme = storedTheme === "dark" || storedTheme === "light"
    ? storedTheme
    : getSystemTheme();

  applyTheme(activeTheme, false);

  if (button) {
    button.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme, true);
    });
  }

  function handleSystemThemeChange() {
    if (!getStoredTheme()) {
      applyTheme(getSystemTheme(), false);
    }
  }

  if (typeof colorScheme.addEventListener === "function") {
    colorScheme.addEventListener("change", handleSystemThemeChange);
  } else if (typeof colorScheme.addListener === "function") {
    colorScheme.addListener(handleSystemThemeChange);
  }
})(window, document);
