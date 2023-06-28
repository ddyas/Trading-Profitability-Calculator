document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var accountBalance = parseFloat(document.getElementById('accountBalance').value);
  var percentageUsedPerTrade = parseFloat(document.getElementById('percentageUsedPerTrade').value);
  var takeProfitPercentage = parseFloat(document.getElementById('takeProfitPercentage').value);
  var stopLossPercentage = parseFloat(document.getElementById('stopLossPercentage').value);
  var winningTradePercentage = parseFloat(document.getElementById('winningTradePercentage').value);
  var numberOfTrades = parseFloat(document.getElementById('numberOfTrades').value);
  var leverage = parseFloat(document.getElementById('leverage').value);

  // Perform calculations
  var positionSize = accountBalance * (percentageUsedPerTrade / 100) * leverage;
  var riskPerTrade = accountBalance * (percentageUsedPerTrade / 100);
  var takeProfitAmount = positionSize * (takeProfitPercentage / 100);
  var stopLossAmount = positionSize * (stopLossPercentage / 100);
  var expectedProfitability = ((takeProfitAmount * winningTradePercentage / 100) - (stopLossAmount * (100 - winningTradePercentage) / 100)) * numberOfTrades;
  var finalAccountBalance = accountBalance + expectedProfitability;

  // Update result elements
  document.getElementById('positionSize').textContent = positionSize.toFixed(2);
  document.getElementById('riskPerTrade').textContent = riskPerTrade.toFixed(2);
  document.getElementById('takeProfitAmount').textContent = takeProfitAmount.toFixed(2);
  document.getElementById('stopLossAmount').textContent = stopLossAmount.toFixed(2);
  document.getElementById('expectedProfitability').textContent = expectedProfitability.toFixed(2);
  document.getElementById('estimatedAccountBalance').textContent = finalAccountBalance.toFixed(2);

  // Show the results and final balance section
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('finalBalance').classList.remove('hidden');
});
