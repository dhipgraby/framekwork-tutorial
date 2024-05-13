
function reactivity() {
    const oldName = getElement("title").innerHTML
    setInterval(() => {
        console.log('rendering');
        const newName = getElement("Jonh").value
        if (oldName !== newName) {
            getElement("title").innerHTML = newName

            const NewInput = input("text", "Bob")
            if (newName === "addInput") addHtmlToContainer(NewInput)
        }
    }, reactivityTime)
}