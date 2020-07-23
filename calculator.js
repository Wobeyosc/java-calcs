let siteVisits = 1000
let conversionPercent = 5

siteVisits = prompt("Enter number of visitors", "1000");
conversionPercent = prompt("Enter perecentage of visitors without % sign", "5");


function conversionRate (visitors, percentage) {
    percentage = percentage / 100;
    return visitors * percentage;
}

result = conversionRate(siteVisits, conversionPercent);

console.log("If you have " + siteVisits + " and " + conversionPercent + "% then you have");

console.log(result + " Potential customers");