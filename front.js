function addExpense() {
            const name = document.getElementById('expenseName').value;
            const amount = document.getElementById('expenseAmount').value;

            if (!name || !amount) {
                alert('Please fill in both fields!');
                return;
            }

            const list = document.getElementById('expenseList');

            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${name}</span> <span>$${parseFloat(amount).toFixed(2)}</span>`;
            list.appendChild(listItem);

            document.getElementById('expenseName').value = '';
            document.getElementById('expenseAmount').value = '';
        }