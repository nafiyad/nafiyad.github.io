
// Function to display different cheat sheets based on the type
function showCheatSheet(sheetType) {
    const content = document.getElementById('cheatSheetContent');
    let data = '';
    switch (sheetType) {
        case 'html':
            data = `<h2>HTML Cheat Sheet</h2>
                    <ul>`;
            data += generateList([
                "<strong>&lt;div&gt;</strong> - Defines a division or a section.",
                "<strong>&lt;p&gt;</strong> - Represents a paragraph.",
                "<strong>&lt;a href=\"...\"&gt;</strong> - Defines a hyperlink.",
                "<strong>&lt;span&gt;</strong> - Inline container for text and other elements.",
                "<strong>&lt;img src=\"...\" alt=\"...\"&gt;</strong> - Embeds an image.",
                "<strong>&lt;form&gt;</strong> - Defines an HTML form for user input.",
                "<strong>&lt;input&gt;</strong> - Defines an input control.",
                "<strong>&lt;label&gt;</strong> - Defines a label for &lt;input&gt; elements.",
                "<strong>&lt;textarea&gt;</strong> - Defines a multi-line text input.",
                "<strong>&lt;select&gt;</strong> - Creates a drop-down list.",
                "<strong>&lt;option&gt;</strong> - Defines an option in a drop-down list.",
                "<strong>&lt;button&gt;</strong> - Defines a clickable button.",
                "<strong>&lt;ul&gt;</strong> - Defines an unordered list.",
                "<strong>&lt;ol&gt;</strong> - Defines an ordered list.",
                "<strong>&lt;table&gt;</strong> - Defines a table."
            ]);
            data += `</ul>
                    <p>More about HTML: <a href="https://www.w3schools.com/html/" target="_blank">Visit W3Schools HTML Tutorial</a></p>`;
            break;
        case 'css':
            data = `<h2>CSS Cheat Sheet</h2>
                    <ul>`;
            data += generateList([
                "<strong>margin</strong> - Controls the space outside of an element.",
                "<strong>padding</strong> - Controls the space inside of an element.",
                "<strong>border</strong> - Specifies the border of an element.",
                "<strong>width</strong> - Sets the width of an element.",
                "<strong>height</strong> - Sets the height of an element.",
                "<strong>background-color</strong> - Sets the background color of an element.",
                "<strong>font-size</strong> - Controls the font size of an element.",
                "<strong>text-align</strong> - Aligns the text within an element.",
                "<strong>position</strong> - Specifies the type of positioning method used.",
                "<strong>display</strong> - Specifies the display behavior of an element.",
                "<strong>flexbox</strong> - A layout mode intended for arranging elements.",
                "<strong>grid</strong> - Defines a grid-based layout system.",
                "<strong>media query</strong> - A technique to make designs more responsive.",
                "<strong>transition</strong> - Allows you to change property values smoothly.",
                "<strong>transform</strong> - Applies a 2D or 3D transformation to an element."
            ]);
            data += `</ul>
                    <p>More about CSS: <a href="https://www.w3schools.com/css/" target="_blank">Visit W3Schools CSS Tutorial</a></p>`;
            break;
        case 'javascript':
            data = `<h2>JavaScript Cheat Sheet</h2>
                    <ul>`;
            data += generateList([
                "<strong>var</strong> - Declares a variable.",
                "<strong>let</strong> - Declares a block scope local variable.",
                "<strong>const</strong> - Declares a block scope read-only variable.",
                "<strong>if</strong> - Specifies a block of code to be executed, if a specified condition is true.",
                "<strong>else</strong> - Specifies a block of code to be executed, if the same condition is false.",
                "<strong>for</strong> - Creates a loop that runs a specified number of times.",
                "<strong>while</strong> - Creates a loop that executes as long as the specified condition is true.",
                "<strong>function</strong> - Defines a function.",
                "<strong>return</strong> - Exits a function and returns a value.",
                "<strong>Array</strong> - Lets you store multiple values in a single variable.",
                "<strong>Object</strong> - Allows you to store keyed collections of values.",
                "<strong>addEventListener</strong> - Attaches an event handler to an element.",
                "<strong>setTimeout</strong> - Calls a function or evaluates an expression after a specified number of milliseconds.",
                "<strong>console.log</strong> - Outputs a message to the web console.",
                "<strong>document.getElementById</strong> - Retrieves an element by its ID attribute."
            ]);
            data += `</ul>
                    <p>More about JavaScript: <a href="https://www.w3schools.com/js/" target="_blank">Visit W3Schools JavaScript Tutorial</a></p>`;
            break;
    }
    
    function generateList(items) {
        let list = '';
        for (let item of items) {
            list += `<li>${item}</li>`;
        }
        return list;
    }
    
    
    content.innerHTML = data;
    content.style.display = 'block'; // Show the cheat sheet
}

function handleContactFormSubmission(event) {
    event.preventDefault();  
    
    // Display success message
    alert('Message sent successfully!');
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    animateSkills(); 
});

document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmission);
