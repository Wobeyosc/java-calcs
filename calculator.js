function conversionRate (visitors, percentageConvert) {
    percentageConvert = percentageConvert / 100;
    return visitors * percentageConvert;
}

console.log(conversionRate(1000, 5));