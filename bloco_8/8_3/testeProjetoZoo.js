function increasePrices(percentage) {
  const increseAdult = prices.Adult * (percentage / 100);
  const increseSenior = prices.Senior * (percentage / 100);
  const increseChild = prices.Child * (percentage / 100);
  const resultAdult = Math.round((prices.Adult + increseAdult) * 100) / 100;
  const resultSenior = Math.round((prices.Senior + increseSenior) * 100) / 100;
  const resultChild = Math.round((prices.Child + increseChild) * 100) / 100;
  prices.Adult = resultAdult;
  prices.Senior = resultSenior;
  prices.Child = resultChild;
}
