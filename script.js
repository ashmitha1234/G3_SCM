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
