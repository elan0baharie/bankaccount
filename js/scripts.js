//B.L.


var Account = function (name, newDeposit, withdrawal, currentAmount) {
  this.name = name;
  this.newDeposit = newDeposit;
  this.withdrawal = withdrawal;
  this.balance = currentAmount;
}

Account.prototype.makeDeposit = function() {
  var depTest = document.getElementById("newDeposit");
  var withTest = document.getElementById("withdrawal");

  if (depTest = "") {
    depTest.replace("", 0);
  } else if (withTest = "") {
    withTest.replace("", 0);
  } else {
    var newBalance = this.newDeposit + this.balance - this.withdrawal;
    this.balance = newBalance;
    document.getElementById("newDeposit").value = "0";
    document.getElementById("withdrawal").value = "0";
    return newBalance;
  }
  console.log(this.balance);

}



//U.I.
$(document).ready(function() {

  var newAccount = new Account();

  document.getElementById("newDeposit").value = "0";
  document.getElementById("withdrawal").value = "0";

  $("form#formone").submit(function(event) {
    event.preventDefault();

    newAccount.name = $("input#name").val();
    newAccount.balance = parseInt($("#bankAmount").val());
    $(".orig-amnt").hide(800);

    $("ul#test").append("<li>" + newAccount.balance +"</li>");

  });

  $("form#formtwo").submit(function(event) {
    event.preventDefault();
    newAccount.newDeposit = parseInt($("#newDeposit").val());
    newAccount.withdrawal = parseInt($("#withdrawal").val());
    var test = newAccount.makeDeposit();
    $("ul#test").append("<li>" + test +"</li>");
    // newAccount.clearBal();
  });
});
