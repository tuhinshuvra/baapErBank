



document.getElementById('widrow_btn').addEventListener('click', function () {
    const widrowInput = document.getElementById('widrow');
    const newWidrowAmount = parseFloat(widrowInput.value);
    // console.log(newWidrowAmount);

    // widrow total
    const widrowTotal = document.getElementById('widrow_total');
    const preWidrowAmount = parseFloat(widrowTotal.innerText);
    const currentWidrowTotal = preWidrowAmount + newWidrowAmount;
    widrowTotal.innerText = currentWidrowTotal;
    widrowInput.value = '';

    //  update current balance
    const preBalance = document.getElementById('balance_total')
    const preBalanceAmount = parseFloat(preBalance.innerText);

    const newBalanceTotal = preBalanceAmount - newWidrowAmount;

    preBalance.innerText = newBalanceTotal;





})