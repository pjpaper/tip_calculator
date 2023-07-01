function calc() {
  let billAmount = parseInt(document.getElementById('billAmount').value);
  let tipPer = parseInt(document.getElementById('tipPer').value);

  // Tip Amount
  let tipAmount = (billAmount * tipPer) / 100;
  document.getElementById(
    'tipAmount'
  ).innerHTML = ` Tip Amount :  ₹ ${tipAmount}`;

  // Total Amount
  totalAmount.innerHTML = `Total Amount : ₹  ${tipAmount + billAmount} `;
}

function reset() {
  document.getElementById('billAmount').value = '';
  document.getElementById('tipPer').value = '';
  document.getElementById('tipAmount').innerHTML = ` Tip Amount : `;
  document.getElementById('totalAmount').innerHTML = `Total Amount :`;
}
