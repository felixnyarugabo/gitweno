
const main = document.querySelector('.main');

function addproduct() {

    // 1. Create new products
    const products = [];

    const product1 = "phone";
    const product2 = "laptop";

    products.push(product1, product2);

    // 2. Retrieve previously saved products
    const savedData = JSON.parse(localStorage.getItem('inventory')) || [];

    // 3. Combine old and new products
    const rstorage = [...savedData, ...products];

    // 4. Save everything in localStorage
    localStorage.setItem('inventory', JSON.stringify(rstorage));

    // 5. Create a separate display container
    const display = document.createElement('div');
    main.append(display);

    // 6. Create Show Data button
    const showdata = document.createElement('button');
    showdata.innerText = 'Show Data';

    main.append(showdata);

    // 7. Show saved products when clicked
    showdata.addEventListener('click', function () {

        // Clear previous displayed products
        display.innerHTML = '';

        // Retrieve the latest saved data
        const latestData = JSON.parse(localStorage.getItem('inventory')) || [];

        for (let i = 0; i < latestData.length; i++) {

            const p = document.createElement('p');

            p.textContent = latestData[i];

            display.append(p);
        }

    });

    // 8. Create Clear button
    const button = document.createElement('button');
    button.innerText = 'Clear';

    main.append(button);

    // 9. Clear saved and displayed products
    button.addEventListener('click', function () {

        localStorage.removeItem('inventory');

        display.innerHTML = '';

        alert('Inventory cleared successfully!');

    });

}

addproduct();
