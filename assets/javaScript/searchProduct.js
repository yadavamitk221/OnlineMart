var inputBox = document.getElementById("searchBar");
var storeid = document.getElementById("searchBtn").value;
var btn = document.getElementById("searchBtn");

// Eventlistener
btn.addEventListener("click", getInputValue);

// Gets the Entered input string From input Box
function getInputValue() {
    var searchedString = inputBox.value.trim();
    if (searchedString.length > 1) {
        getProduct(searchedString);
    }
    console.log("inputBox.value",searchedString);  

}
  
// display Product
async function getProduct(searchedString) {
    $.get(`/product/showProduct/${storeid}/${searchedString}`,
    // displayMovieList(data.Search);
        async (data) => {
         await displayProduct(data.data);
        }
    );
};

async function displayProduct(data) {
    var card = document.getElementsByClassName("product-body");
    const mainContainer = document.querySelector('.main-container');

    console.log("data", data)
    mainContainer.innerHTML = '';


    mainContainer.innerHTML = `<div class="card">
    <div class="header"> ${data[0].productName}</div>
    <div class="bodys">
      <div class="details">
        <div class="details-name">MRP: ${ data[0].mrp}</div>
      </div>
      <div class="details">
        <div class="details-name">SP: ${data[0].sp}</div>
      </div>
      <div class="details">
        <div class="details-name">qty: ${data[0].qty}</div>
      </div>
    </div>
  </div>`;
  
}