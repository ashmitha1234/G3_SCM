const cartItems = [
      { name: "Masala Dosa", qty: 2, price: 25 },
    ];

const cartBody = document.getElementById('cart-body');

function renderCart() {
      cartBody.innerHTML = '';
      let subtotal = 0;

      cartItems.forEach((item, index) => {
        const itemTotal = item.qty * item.price;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td class="quantity">
            <input type="number" min="1" value="${item.qty}" onchange="updateQty(${index}, this.value)">
          </td>
          <td>₹${item.price}</td>
          <td>₹${itemTotal}</td>
          <td><button class="btn remove-btn" onclick="removeItem(${index})">Remove</button></td>
        `;
        cartBody.appendChild(row);
      });

      updateBill(subtotal);
    }

function updateQty(index, newQty) {
      cartItems[index].qty = parseInt(newQty);
      renderCart();
    }

function removeItem(index) {
      cartItems.splice(index, 1);
      renderCart();
    }

function updateBill(subtotal) {
      const tax = subtotal * 0.05;
      const discount = subtotal * 0.10;
      const grandTotal = subtotal + tax - discount;

      document.getElementById('subtotal').innerText = `₹${subtotal.toFixed(2)}`;
      document.getElementById('tax').innerText = `₹${tax.toFixed(2)}`;
      document.getElementById('discount').innerText = `-₹${discount.toFixed(2)}`;
      document.getElementById('grand-total').innerText = `₹${grandTotal.toFixed(2)}`;
    }

// Initial render
renderCart();
