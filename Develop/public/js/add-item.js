const $addItemBtn = document.querySelector("#add-item");
const $transactionForm = document.querySelector("#transaction-form");
const $customItemList = document.querySelector("#custom-Item-list");

const handleAddItem = (event) => {
  event.preventDefault();

  const itemValue = document.querySelector("#new-item").value;

  if (!itemValue) {
    return false;
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "cost";
  checkbox.value = itemValue;
  checkbox.id = itemValue.toLowerCase().split(" ").join("-");

  const label = document.createElement("label");
  label.textContent = itemValue;
  label.htmlFor = itemValue.toLowerCase().split(" ").join("-");

  const divWrapper = document.createElement("div");

  divWrapper.appendChild(checkbox);
  divWrapper.appendChild(label);
  $customItemList.appendChild(divWrapper);

  itemValue.value = "";
};

const handleTransactionSubmit = (event) => {
  event.preventDefault();

  const itemName = $itemForm.querySelector("#item-name").value;
  const createdBy = $itemForm.querySelector("#created-by").value;
  const price = $itemForm.querySelector("#item-price").value;
  const items = [...$itemForm.querySelectorAll("[name=cost]:checked")].map(
    (cost) => {
      return cost.value;
    }
  );

  if (!itemName || !createdBy || !items.length) {
    return;
  }

  const formData = { itemName, createdBy, price, cost };
};

$itemForm.addEventListener("submit", handleItemSubmit);
$addItemBtn.addEventListener("click", handleAddItem);
