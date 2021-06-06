var getUserName = prompt ("Hello, who are you");

console.log (getUserName);

document.getElementById("username").innerText = getUserName;


// tooltip example //
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
