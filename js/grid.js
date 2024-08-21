document.addEventListener("DOMContentLoaded", function () {
    const numberOfImages = 175; // Adjust this number to match your total number of images
    const container = document.querySelector('.grid-container');

    console.log("Script is running, attempting to load images...");

    for (let i = 1; i <= numberOfImages; i++) {
        const img = document.createElement('img');
        const imgNumber = String(i).padStart(3, '0'); // Pad numbers with leading zeros (e.g., 001)
        const imgPath = `Images/${imgNumber}.jpeg`;

        // Check if the image exists
        img.src = imgPath;
        img.onerror = function () {
            console.error(`Failed to load image: ${imgPath}`);
            img.style.display = 'none'; // Hide broken images
        };

        img.onload = function() {
            console.log(`Successfully loaded image: ${imgPath}`);
        };

        img.classList.add('token'); // Add a class for styling

        // Randomly position the image within the container
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight - 50; // Account for 50px margin at the top and bottom
        const randomX = Math.random() * (containerWidth - 100); // 100 is the assumed image width
        const randomY = Math.random() * (containerHeight - 100) + 50; // Add 50px to prevent overlap with the top margin

        img.style.position = 'absolute';
        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

        container.appendChild(img);
    }

    console.log("Finished attempting to load images.");
});
