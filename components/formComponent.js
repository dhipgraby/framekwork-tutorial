function formComponent(titleContent) {
    const pageTitle = title(titleContent)
    const firstName = input("text", "Jonh");
    const lastName = input("text", "Doe");
    const age = input("number", 10);

    addHtmlToContainer(pageTitle)
    addHtmlToContainer(firstName)
    addHtmlToContainer(lastName)
    addHtmlToContainer(age)
}
