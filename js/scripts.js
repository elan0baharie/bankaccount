//B.L.


var Account = function (name, newDeposit, withdrawal, currentAmount) {
  this.name = name;
  this.newDeposit = newDeposit;
  this.withdrawal = withdrawal;
  this.balance = currentAmount;
}

Account.prototype.makeDeposit = function() {
  var newBalance= this.newDeposit + this.balance;
  return newBalance;


}

//U.I.
$(document).ready(function() {

  var newAccount = new Account();

  $("form#formone").submit(function(event) {
    event.preventDefault();

    newAccount.name = $("input#name").val();
    newAccount.balance = parseInt($("#bankAmount").val());
    newAccount.newDeposit = parseInt($("#newDeposit").val());
    newAccount.withdrawal = parseInt($("#withdrawal").val());

    console.log(newAccount.name);
    console.log(newAccount.balance);
    // console.log(newAccount.name);
    // console.log(newAccount.name);
    $("ul#test").append("<li>" + newAccount.balance +"</li>");

  });

  $("form#formtwo").submit(function(event) {
    event.preventDefault();
    var test = newAccount.makeDeposit();
    $("ul#test").append("<li>" + test +"</li>");
  });
});
