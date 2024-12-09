const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    cart.push({ name: productName, price: productPrice });

    alert(`${productName} has been added to your cart.`);
    console.log(cart);
  });
});