function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const tableBody = document.getElementById('productTableBody');

            data.products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                        <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>${product.description}</td>
                        <td>$${product.price}/-</td>
                        <td>${product.stock}</td>
                    `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
