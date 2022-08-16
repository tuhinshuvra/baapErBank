



document.getElementById('widrow_btn').addEventListener('click', function () {
    const widrowInput = document.getElementById('widrow');
    const newWidrowAmount = parseFloat(widrowInput.value);
    // console.log(newWidrowAmount);

    // widrow total
    const widrowTotal = document.getElementById('widrow_total');
    const preWidrowAmount = parseFloat(widrowTotal.innerText);



    //  update current balance
    const preBalance = document.getElementById('balance_total')
    const preBalanceAmount = parseFloat(preBalance.innerText);

    widrowInput.value = '';
    if (isNaN(newWidrowAmount)) {
        alert('Wrong Input, Enter a valid number');
        return;
    }
    if (newWidrowAmount > preBalanceAmount) {
        alert('Baaper bank e ato taka nai');
        return;
    }

    // current widow total
    const currentWidrowTotal = preWidrowAmount + newWidrowAmount;
    widrowTotal.innerText = currentWidrowTotal;


    const newBalanceTotal = preBalanceAmount - newWidrowAmount;
    preBalance.innerText = newBalanceTotal;
})