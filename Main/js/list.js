document.addEventListener("DOMContentLoaded", function() {
    fetch('data/list.csv')  // Ensure this is the correct path
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                header: true, // Use the first row as headers
                skipEmptyLines: true,
                complete: function(results) {
                    const tableBody = document.getElementById('list-table').getElementsByTagName('tbody')[0];

                    results.data.forEach(row => {
                        const tr = document.createElement('tr');

                        Object.values(row).forEach(column => {
                            const td = document.createElement('td');
                            td.textContent = column.trim();
                            tr.appendChild(td);
                        });

                        tableBody.appendChild(tr);
                    });
                }
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
