let salary = 0;
let totalExpenses = 0;
let savings = 0;
let salaryHistory = [];

function addSalary() {
    let salaryInput = document.getElementById('salaryInput').value;
    salary += parseFloat(salaryInput);
    salaryHistory.push(`Added salary: ${salaryInput}`);
    calculateSavings();
    alert('Salary added successfully!');
    viewBalance();
}

function addExpense() {
    let expenseInput = document.getElementById('expenseInput').value;
    let categoryInput = document.getElementById('categoryInput').value;

    if (parseFloat(expenseInput) <= salary - totalExpenses) {
        totalExpenses += parseFloat(expenseInput);
        salaryHistory.push(`Added expense: ${expenseInput} under category: ${categoryInput}`);
        calculateSavings();
        alert('Expense added successfully!');
        viewBalance();
    } else {
        alert('Insufficient balance for this expense.');
    }
}

function calculateSavings() {
    savings = salary - totalExpenses;
}

function viewBalance() {
    document.getElementById('salaryDisplay').textContent = salary.toFixed(2);
    document.getElementById('expensesDisplay').textContent = totalExpenses.toFixed(2);
    document.getElementById('savingsDisplay').textContent = savings.toFixed(2);
}

function viewHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear previous entries

    salaryHistory.forEach(entry => {
        let li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}
