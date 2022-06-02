enum Months {
      Jan,
      Feb,
      March,
      April,
      May,
      June,
      July,
      Aug,
      Sept,
      Oct,
      Nov,
      Dec
};

function checkSeason(month:Months) {
    if(month==Months.Feb ||month== Months.March || month == Months.April || month==Months.May) {
        console.log("It is Summer Season");
    }
    else if(month==Months.June ||month== Months.July || month == Months.Aug || month==Months.Sept) {
        console.log("It is Rainy season");
    }
    else if(month==Months.Oct ||month== Months.Nov || month == Months.Dec || month==Months.Jan) {
        console.log("Winter is here");
    }
    else {
        console.log("Invalid Month")
    }
}
checkSeason(Months.Jan);