document.addEventListener("DOMContentLoaded", function () {
  const cart = [];
  const cartContainer = document.getElementById("cart");

  const updateCart = () => {
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>No items in cart</p>";
    } else {
      let total = 0;
      cart.forEach((item) => {
        total += item.price;
        cartContainer.innerHTML += `
                  <div class="cart-item">
                      <span>${item.name}</span>
                      <span>$${item.price}</span>
                  </div>
              `;
      });
      cartContainer.innerHTML += `<p class="cart-total">Total: $${total}</p>`;
    }
  };

  const buttons = document.querySelectorAll(".add-to-cart-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));

      cart.push({ name, price });
      updateCart();
    });
  });

  updateCart();
});
