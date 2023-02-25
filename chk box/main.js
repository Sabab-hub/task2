const checkboxes = document.querySelectorAll('input[type=checkbox]');
const buttonContainer = document.getElementById('button-container');
const selectedItemsDiv = document.getElementById('selected-items');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
        const selectedItems = Array.from(selectedCheckboxes).map(checkbox => checkbox.name);
        buttonContainer.innerHTML = '';
        if (selectedItems.length > 0) {
            selectedItems.forEach(item => {
                const button = document.createElement('button');
                button.innerText = `${item}`;
                button.addEventListener('click', () => {
                    selectedItemsDiv.innerHTML = `Selected items: ${selectedItems.join(', ')}`;
                });
                buttonContainer.appendChild(button);
            });
        }
        else
        {
            selectedItemsDiv.innerHTML = 'No items selected';
        }
    });
});
