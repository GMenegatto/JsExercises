const html = document.querySelector("html");
const checkbox = document.querySelector('input[name = theme');

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {     // pegar esse estilo do css
    bg: getStyle(html,"--bg"),
    bgPanel: getStyle(html,"--bg-panel"),
    colorHeadings: getStyle(html,"--color-headings"),
    colorText: getStyle(html,"--color-text")
}

const darkMode = {     // pegar esse estilo do css
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
}

const transformKey= key =>
     "--" + key.replace(/([A-Z])/)


const changeColors = (colors) =>{
    html.style.setProperty("--bg", colors.bg)
    html.style.setProperty("--bg-panel", colors.bgPanel)
    html.style.setProperty("--color-headings", colors.colorHeadings)
    html.style.setProperty("--color-text", colors.colorText)
}



checkbox.addEventListener("change", ({target}) =>{

    target.checked ? changeColors(darkMode): changeColors(initialColors)

})