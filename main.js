function calculateCAGR() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const finalInvestment = parseFloat(document.getElementById("finalInvestment").value);
    const investmentDuration = parseFloat(document.getElementById("investmentDuration").value);

    // Calculate CAGR formula: ((finalInvestment / initialInvestment)^(1/investmentDuration)) - 1
    const cagr = Math.pow(finalInvestment / initialInvestment, 1 / investmentDuration) - 1;
    const cagrPercentage = (cagr * 100).toFixed(2);

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `CAGR(Compound Annual Growth Rate): ${cagrPercentage}%`;
}
