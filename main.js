const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
  const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
  amount.value = "";
  guests.value = "";
  quality.value = "";

  if (tip === "NaN"){
    tipAmount.textContent = "Tip $0 each";
    showTipAmount();
  } else {
    tipAmount.textContent = "Tip $" + tip + " each";
    showTipAmount();
  }
}

showTipAmount = () =>{
  let x = document.querySelector('#tip-amount');
  x.className = 'show';
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
