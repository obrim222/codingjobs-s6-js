/**
 * Home exercise
 *
 * Starting from the code below:
 * - add a 'close' button inside each product HTML element
 * - when each element's 'close' button is clicked, make it's parent product element disappear in the opposite direction + fade out, using the animate() function (i.e. reverse the animation)
 *
 * Bonus
 * - only display the 'close' button when you hover the product with the mouse (using a mouseover event listener)
 */
const products = [{ name: "apple" }, { name: "banana" }, { name: "pineapple" }];

products.forEach((product, index) => {
  $("<div>")
    .text(product.name)
    .css({ opacity: 0, position: "relative" })
    .appendTo($(".container"))
    .delay(1000 * index)
    .animate({ opacity: 1, left: "250px" }, 2000)
    .on("mouseover", function () {
      $(this).stop();
    })
    .fadeOut(500)
    .addClass("selected");
});

$("<button>Close</button>")
  .appendTo($(".selected"))
  .on("mouseover", function () {
    $(this).hide();
  });
