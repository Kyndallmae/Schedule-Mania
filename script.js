var today = dayjs();
$('#time').text(today.format('MMM D, YYYY'));
var decriptionElem = document.querySelector(".description");
var buttonElem = document.querySelector(".saveBtn");
//var text = localStorage.setItem(".time-block");
var messages = [];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  buttonElem.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    var message = {
      event: document.querySelector('.description').value
    }

    messages.push(message);
    console.log(messages);
    messages.textContent = JSON.stringify(message);
    localStorage.setItem("myMessages", JSON.stringify(message));
  
    function renderMessage() {
      var lastMessage = JSON.parse(localStorage.getItem("myMessages"));
        if (lastMessage !== null) {
          document.querySelector(".description").textContent = lastMessage
          console.log(lastMessage)
        }
    };
  });
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
