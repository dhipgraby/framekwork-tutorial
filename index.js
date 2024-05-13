
function init() {
    render();
    reactivity();
}

function addHtmlToContainer(html) {
    return getContainer().innerHTML += html
}

function getContainer() {
    const container = getElement("container")
    return container
}
//ALWAYS AT FIRST LOAD
document.addEventListener("DOMContentLoaded", function () {
    init()
});

