document.querySelectorAll('.image-container').forEach(item => {
    item.addEventListener('click', event => {
        const index = item.getAttribute('data-index');
        replaceImageWithText(item, index);
    });
});

function replaceImageWithText(container, index) {
    // Fetch or generate the data dynamically, for example from a CSV
    const data = [
        { title: 'Image 1', details: 'This is the data for Image 1.' },
        { title: 'Image 2', details: 'This is the data for Image 2.' }
    ];

    const info = data[index - 1]; // Adjust index as necessary
    container.innerHTML = `<div class="text-square">
        <h2>${info.title}</h2>
        <p>${info.details}</p>
    </div>`;
}
