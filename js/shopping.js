/*-- VARIABLES --*/
// The text field for the item
var shoppingItem = document.querySelector('input[type = text][name = item]');
// The 'Add item' button
var itemButton = document.getElementById('itemButton');
// The unordered list
var unorderedList = document.querySelector('ul');

/*-- FUNCTIONS --*/ 
// Execute when 'Add item' button is clicked
itemButton.onclick = function() {
    // Gets the value of the text field
    var shoppingItemValue = shoppingItem.value;
    // Creates a new list item
    var listItem = document.createElement('li');
    // Sets the listItem to the value of the shopping item (user input)
    listItem.textContent = shoppingItemValue;
    // Creates the delete button
    var deleteButton = document.createElement('button');
    // Adds an ID for styling purposes
    deleteButton.setAttribute('id', 'deleteButton');
    // Sets the value to 'delete'
    deleteButton.textContent = 'Delete';
    // Append the button to the list item
    listItem.append(deleteButton);

    // Function to remove shopping item from list when delete button is clicked
    // Adds event listener to function on click
    deleteButton.addEventListener ('click', function() {
        // Remove the selected child from the ul list
        unorderedList.removeChild(listItem);
    });

    // Append the list item (along with the button) to the unordered list
    unorderedList.appendChild(listItem);
    // Clears the shopping item text field
    shoppingItem.value = '';
    // Focuses the shopping item text field
    shoppingItem.focus();
}