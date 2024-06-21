// Grab all elements with the class of ".box-details"
let boxDetails = document.querySelectorAll('.box-details');
  
// Iterate over each overlay in the array of elements and add event listeners to each.
//Toggle the "active" class on the button's parent node, or sections with the "card" class.

for (let i = 0; i < boxDetails.length; i++){
   boxDetails[i].addEventListener('click', function(){
   boxDetails[i].parentNode.classList.toggle('show-details')
  });
};
