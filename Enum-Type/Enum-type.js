var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sept"] = 8] = "Sept";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
;
function checkSeason(month) {
    if (month == Months.Feb || month == Months.March || month == Months.April || month == Months.May) {
        console.log("It is Summer Season");
    }
    else if (month == Months.June || month == Months.July || month == Months.Aug || month == Months.Sept) {
        console.log("It is Rainy season");
    }
    else if (month == Months.Oct || month == Months.Nov || month == Months.Dec || month == Months.Jan) {
        console.log("Winter is here");
    }
    else {
        console.log("Invalid Month");
    }
}
checkSeason(Months.Jan);
