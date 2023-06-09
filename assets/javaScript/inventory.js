/** @format */

var categorySelect = document.getElementById("category");
var subcategorySelect = document.getElementById("subcategory");

// Add subcategory options based on the selected category
categorySelect.addEventListener("change", function () {
  // Clear previous options
  subcategorySelect.innerHTML = '<option value="">Select Subcategory</option>';

  // Get selected category
  var selectedCategory = categorySelect.value;

  // Add subcategory options based on the selected category
  if (selectedCategory === "electronics") {
    subcategorySelect.innerHTML +=
      '<option value="smartphones">Smartphones</option>';
    subcategorySelect.innerHTML += '<option value="laptops">Laptops</option>';
    subcategorySelect.innerHTML += '<option value="cameras">Cameras</option>';
  } else if (selectedCategory === "clothing") {
    subcategorySelect.innerHTML += '<option value="men">Men</option>';
    subcategorySelect.innerHTML += '<option value="women">Women</option>';
    subcategorySelect.innerHTML += '<option value="kids">Kids</option>';
  } else if (selectedCategory === "books") {
    subcategorySelect.innerHTML += '<option value="fiction">Fiction</option>';
    subcategorySelect.innerHTML +=
      '<option value="nonfiction">Nonfiction</option>';
    subcategorySelect.innerHTML += '<option value="science">Science</option>';
  }
});

let addProductToInventory = function () {
  let addInventorySelect = $("#addInventory");
  addInventorySelect.submit(function (e) {
    e.preventDefault();
    console.log("==--------==========");
    console.log("Inside a addProduct to Inventoryy");
    let category = categorySelect.value;
    console.log(category);
    let subCategory = subcategorySelect.value;
    console.log(subCategory);
    $.ajax({
      type: "post",
      url: `/inventory/addInventory/:${category}/:${subCategory}`,
      data: addInventorySelect.serialize(),
    //   success: function (data) {
    //   },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
};
addProductToInventory();
