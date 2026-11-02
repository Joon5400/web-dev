
// 1. Store menu prices and names
const menu = {
    coffee: { name: "Coffee", price: 3.00 },
    latte: { name: "Latte", price: 4.50 },
    tea: { name: "Tea", price: 2.50 },
    muffin: { name: "Muffin", price: 3.50 },
    sandwich: { name: "Sandwich", price: 7.00 }
};

// 2. Create an empty order array
let order = [];

// 3. Get HTML elements
const menuSelect = document.getElementById("menu");
const quantityInput = document.getElementById("quantity");
const orderList = document.getElementById("order-list");
const totalDisplay = document.getElementById("total");

// 4. Add a selected item to the order
function addToOrder() {
    const selectedItem = menuSelect.value;
    const quantity = Number(quantityInput.value);

    // Validate the quantity
    if (!Number.isInteger(quantity) ||
        quantity < 1 || quantity > 20) {
        alert("Enter a whole number between 1 and 20.");
        return;
    }

    // Find the item's information
    const item = menu[selectedItem];

    // Add item to the array
    order.push({
        name: item.name,
        price: item.price,
        quantity: quantity
    });

    updateOrder();
}

// 5. Display the order and calculate total
function updateOrder() {
    orderList.innerHTML = "";

    let total = 0;

    order.forEach(function(item, index) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create a list item
        const li = document.createElement("li");
        li.textContent =
            item.name + " x " + item.quantity +
            " = $" + itemTotal.toFixed(2);

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove";

        removeButton.addEventListener("click", function() {
            order.splice(index, 1);
            updateOrder();
        });

        li.appendChild(removeButton);
        orderList.appendChild(li);
    });

    // Display total price
    totalDisplay.textContent = "$" + total.toFixed(2);

    document.getElementById("empty").hidden =
        order.length > 0;
}

// 6. Clear the entire order
function clearOrder() {
    order = [];
    updateOrder();
}

// 7. Connect buttons to functions
document.getElementById("add")
    .addEventListener("click", addToOrder);

document.getElementById("clear")
    .addEventListener("click", clearOrder);
