



document.getElementById('deposit_btn').addEventListener('click', function () {

    // Deposit entry
    const depositInput = document.getElementById('deposit');
    const newDepositAmount = parseFloat(depositInput.value);

    // Deposit update
    const depositTotal = document.getElementById('deposit_total');
    const preDepositAmount = parseFloat(depositTotal.innerText);
    const currentDepositTotal = parseFloat(preDepositAmount + newDepositAmount);

    depositTotal.innerText = currentDepositTotal
    depositInput.value = '';

    // Update current balance
    const balanceTotal = document.getElementById('balance_total');
    const cureentBalance = parseFloat(balanceTotal.innerText);

    const totalBalance = cureentBalance + newDepositAmount;
    balanceTotal.innerText = totalBalance
})