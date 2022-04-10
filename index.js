const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, str){
    let filterDrivers = []
    for(const driver of drivers){
        if(driver.toUpperCase() == str.toUpperCase()){
            filterDrivers.push(driver)
        }
    }
    return filterDrivers
}

console.log(findMatching(drivers,'Bobby'));

function fuzzyMatch(drivers, str){
    let matches = []
    for (let driver of drivers) {
        if(String(driver).substring(0,3).match(str)){
            matches.push(driver)
        }
    }
    return matches;
}
console.log(fuzzyMatch(drivers, "B"));

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers2, str){
    let finalArr = []
    for(let driver of drivers2){
        if(driver.name == str){
            finalArr.push(driver)
        }
    }
    return finalArr
}
console.log(matchName(drivers2, "Bobby"));




