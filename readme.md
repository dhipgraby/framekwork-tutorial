# Fun HTML Form Framework 🚀

Welcome to our exciting HTML form framework! This lightweight framework lets you easily create dynamic forms with just a few lines of code. Let's dive in and see how you can use it to build awesome forms.

## Features 🌟

- Simple and intuitive API
- Dynamic form elements
- Reactive updates
- Easy customization

## Getting Started 🚀

### Prerequisites ✨

Make sure you have the following installed:

- A modern web browser

### Installation 💻

Simply include the framework files in your HTML:

```html
<script src="/config/config.js"></script>
<script src="/components/inputComponent.js"></script>
<script src="/components/titleComponent.js"></script>
<script src="/components/formComponent.js"></script>
<script src="framework.js"></script>
<script src="render.js"></script>
<script src="reactivity.js"></script>
<script src="index.js"></script>
```

### Usage 🛠️

1. Create a container in your HTML where you want the form to appear:

```html
<div id="container" class="container">
    <!-- Form will be rendered here -->
</div>
```

2. Define your form components using the provided functions:

```javascript
function formComponent(titleContent) {
    const pageTitle = title(titleContent)
    const firstName = input("text", "John");
    const lastName = input("text", "Doe");
    const age = input("number", 10);

    addHtmlToContainer(pageTitle)
    addHtmlToContainer(firstName)
    addHtmlToContainer(lastName)
    addHtmlToContainer(age)
}
```

3. Initialize the form:

```javascript
function init() {
    render();
    reactivity();
}

// Run initialization on page load
document.addEventListener("DOMContentLoaded", function () {
    init()
});
```

4. Customize your form as needed and enjoy dynamic updates!

## Examples 🌈

### Simple Form

```javascript
// Render a basic registration form
formComponent("Register");
```

### Customization

```javascript
// Add additional input dynamically
const newInput = input("text", "Custom Field");
addHtmlToContainer(newInput);
```

## Contributing 🤝

We welcome contributions! Feel free to submit pull requests, suggest features, or report issues.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Thanks to all contributors who helped make this project possible!
- Inspired by the desire to simplify web development.

---

Happy coding! If you have any questions or need assistance, feel free to reach out to us. We hope you enjoy using our HTML form framework! 😊
