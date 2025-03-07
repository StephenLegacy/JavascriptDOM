document.addEventListener("DOMContentLoaded", function () {
    // Function to update total price
    const updateTotal = () => {
      let total = 0;
      document.querySelectorAll(".card .card-body").forEach((card) => {
        const quantity = parseInt(card.querySelector(".quantity").innerText);
        const unitPrice = parseInt(card.querySelector(".unit-price").innerText);
        total += quantity * unitPrice;
      });
      document.querySelector(".total").innerText = `${total} $`;
    };
  
    // Iterate over each product card (only inner .card-body)
    document.querySelectorAll(".card .card-body").forEach((card) => {
      const plusBtn = card.querySelector(".fa-plus-circle");
      const minusBtn = card.querySelector(".fa-minus-circle");
      const deleteBtn = card.querySelector(".fa-trash-alt");
      const likeBtn = card.querySelector(".fa-heart");
      const quantitySpan = card.querySelector(".quantity");
  
      // Increase quantity by 1 on clicking plus button
      plusBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event bubbling
        let quantity = parseInt(quantitySpan.innerText);
        quantitySpan.innerText = quantity + 1;
        updateTotal();
      });
  
      // Decrease quantity by 1 (minimum 0)
      minusBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        let quantity = parseInt(quantitySpan.innerText);
        if (quantity > 0) {
          quantitySpan.innerText = quantity - 1;
          updateTotal();
        }
      });
  
      // Delete item from the cart
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        card.closest(".card-body").remove(); // Remove the outer container
        updateTotal();
      });
  
      // Toggle like button color
      likeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        likeBtn.classList.toggle("text-danger");
      });
    });
  
    // Initialize total price on page load
    updateTotal();
  });