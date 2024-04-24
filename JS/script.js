
// Function to display different cheat sheets based on the type
function showCheatSheet(sheetType) {
    const content = document.getElementById('cheatSheetContent');
    let data = '';
    switch (sheetType) {
        case 'html':
            data = `<h2>HTML Cheat Sheet</h2>
                    <ul>
                        <li><strong>&lt;div&gt;</strong> - Defines a division or a section.</li>
                        <li><strong>&lt;p&gt;</strong> - Represents a paragraph.</li>
                        <li><strong>&lt;a href="..."&gt;</strong> - Defines a hyperlink.</li>
                        <li><strong>&lt;span&gt;</strong> - Inline container for text and other elements.</li>
                        <li><strong>&lt;img src="..." alt="..."&gt;</strong> - Embeds an image.</li>
                        <li><strong>&lt;form&gt;</strong> - Defines an HTML form for user input.</li>
                        <li><strong>&lt;input&gt;</strong> - Defines an input control.</li>
                        <li><strong>&lt;label&gt;</strong> - Defines a label for &lt;input&gt; elements.</li>
                        <li><strong>&lt;textarea&gt;</strong> - Defines a multi-line text input.</li>
                        <li><strong>&lt;select&gt;</strong> - Creates a drop-down list.</li>
                        <li><strong>&lt;option&gt;</strong> - Defines an option in a drop-down list.</li>
                        <li><strong>&lt;button&gt;</strong> - Defines a clickable button.</li>
                        <li><strong>&lt;ul&gt;</strong> - Defines an unordered list.</li>
                        <li><strong>&lt;ol&gt;</strong> - Defines an ordered list.</li>
                        <li><strong>&lt;table&gt;</strong> - Defines a table.</li>
                    </ul>
                    <p>More about HTML: <a href="https://www.w3schools.com/html/" target="_blank">Visit W3Schools HTML Tutorial</a></p>`;
            break;
        case 'css':
            data = `<h2>CSS Cheat Sheet</h2>
                    <ul>
                        <li><strong>margin</strong> - Controls the space outside of an element.</li>
                        <li><strong>padding</strong> - Controls the space inside of an element.</li>
                        <li><strong>border</strong> - Specifies the border of an element.</li>
                        <li><strong>width</strong> - Sets the width of an element.</li>
                        <li><strong>height</strong> - Sets the height of an element.</li>
                        <li><strong>background-color</strong> - Sets the background color of an element.</li>
                        <li><strong>font-size</strong> - Controls the font size of an element.</li>
                        <li><strong>text-align</strong> - Aligns the text within an element.</li>
                        <li><strong>position</strong> - Specifies the type of positioning method used.</li>
                        <li><strong>display</strong> - Specifies the display behavior of an element.</li>
                        <li><strong>flexbox</strong> - A layout mode intended for arranging elements.</li>
                        <li><strong>grid</strong> - Defines a grid-based layout system.</li>
                        <li><strong>media query</strong> - A technique to make designs more responsive.</li>
                        <li><strong>transition</strong> - Allows you to change property values smoothly.</li>
                        <li><strong>transform</strong> - Applies a 2D or 3D transformation to an element.</li>
                    </ul>
                    <p>More about CSS: <a href="https://www.w3schools.com/css/" target="_blank">Visit W3Schools CSS Tutorial</a></p>`;
            break;
        case 'javascript':
            data = `<h2>JavaScript Cheat Sheet</h2>
                    <ul>
                        <li><strong>var</strong> - Declares a variable.</li>
                        <li><strong>let</strong> - Declares a block scope local variable.</li>
                        <li><strong>const</strong> - Declares a block scope read-only variable.</li>
                        <li><strong>if</strong> - Specifies a block of code to be executed, if a specified condition is true.</li>
                        <li><strong>else</strong> - Specifies a block of code to be executed, if the same condition is false.</li>
                        <li><strong>for</strong> - Creates a loop that runs a specified number of times.</li>
                        <li><strong>while</strong> - Creates a loop that executes as long as the specified condition is true.</li>
                        <li><strong>function</strong> - Defines a function.</li>
                        <li><strong>return</strong> - Exits a function and returns a value.</li>
                        <li><strong>Array</strong> - Lets you store multiple values in a single variable.</li>
                        <li><strong>Object</strong> - Allows you to store keyed collections of values.</li>
                        <li><strong>addEventListener</strong> - Attaches an event handler to an element.</li>
                        <li><strong>setTimeout</strong> - Calls a function or evaluates an expression after a specified number of milliseconds.</li>
                        <li><strong>console.log</strong> - Outputs a message to the web console.</li>
                    </ul>
                    <p>More about JavaScript: <a href="https://www.w3schools.com/js/" target="_blank">Visit W3Schools JavaScript Tutorial</a></p>`;
            break;
    }
    content.innerHTML = data;
    content.style.display = 'block'; // Show the cheat sheet
}

// Simplified function to handle contact form submission
function handleContactFormSubmission(event) {
    event.preventDefault();  // Prevent the default form submission behavior
    
    // Display success message
    alert('Message sent successfully!');
    
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize or pre-load any necessary functionality
    animateSkills(); // You might want to call animateSkills here or wherever it's appropriate
});

document.getElementById('contactForm').addEventListener('submit', handleContactFormSubmission);
