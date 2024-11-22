(function () {
    const quantityContainer = document.querySelector(".quantity-container");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
      inputBox.setAttribute("disabled", "disabled");
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
  
      console.log("Quantity changed:", value);
    }
  })();
  