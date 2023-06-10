/** @format */

(function data() {
  fetch("/inventory/getCategory/ajax")
    .then((response) => response.json())
    .then((subcategories) => {
      subcatageory = subcategories.data;
    })
    .catch((error) => {
      console.error(error);
    });
})();

function updateSubcategories() {
  const categorySelect = document.getElementById("category");
  const subcategorySelect = document.getElementById("subcategory");

  // Clear previous subcategories
  subcategorySelect.innerHTML = "";

  // Get the selected category
  const selectedCategory = categorySelect.value;

  // Populate subcategories based on the selected category
  if (selectedCategory in subcatageory) {
    const categorySubcategories = subcatageory[selectedCategory];
    categorySubcategories.forEach(function (subcategory) {
      const option = document.createElement("option");
      option.text = subcategory;
      subcategorySelect.add(option);
    });
  }
}


let addProductToInventory = function () {
  let addInventorySelect = $("#addInventory");
  addInventorySelect.submit(function (e) {
    e.preventDefault();
    const categorySelect = $("#category");
    const subcategorySelect = $("#subcategory");
    let category = categorySelect.value;
    console.log(category);
    let subCategory = subcategorySelect.value;
    console.log(subCategory);
    $.ajax({
      type: "post",
      url: `/inventory/addInventory/${category}/${subCategory}`,
      data: addInventorySelect.serialize(),
      success: function (data) {
        console.log("Data ********", data.message);
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
    document.getElementById('addInventory').reset();
    alert('Inventory Added');
  });
};
addProductToInventory();
