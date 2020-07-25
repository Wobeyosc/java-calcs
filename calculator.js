
let siteVisits = document.getElementById('numVisit').value;
let conversionPercent = document.getElementById('rate').value;


function conversionRate (visitors, percentage) {
    percentage = percentage / 100;
    return visitors * percentage;
}

result = conversionRate(siteVisits, conversionPercent);

console.log("If you have " + siteVisits + " site visits a month and " + conversionPercent + "% conversion then you have");

console.log(result + " Potential customers");