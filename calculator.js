
let siteVisits = 1000;
let conversionPercent = 10;
siteVisits = document.getElementById('numVisit').value;
conversionPercent = document.getElementById('rate').value;


function conversionRate (visitors, percentage) {
    percentage = percentage / 100;
    return visitors * percentage;
}

result = conversionRate(siteVisits, conversionPercent);

console.log("If you have " + siteVisits + " site visits a month and " + conversionPercent + "% conversion then you have");

console.log(result + " Potential customers");