// Select the body element
let body = document.querySelector('body');

// Add event listener for mousemove event on the body
body.addEventListener('mousemove', function (event) {
    
    // Get the x and y coordinates of the mouse pointer relative to the target element
    let xPos = event.offsetX;
    let yPos = event.offsetY;

    // Create a new span element
    let spanEl = document.createElement('span');
    
    // Set the position of the span element to match the mouse pointer
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos + 'px';

    // Generate a random size for the span element
    let size = Math.random() * 100;
    spanEl.style.width = size + 'px';
    spanEl.style.height = size + 'px';
    
    // Append the span element to the body
    body.appendChild(spanEl);

    // Remove the span element after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})
