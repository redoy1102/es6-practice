const age = [12,25,25,36,47];
const age1 = [45,58,56,98];
const age2 = [47,78,89,58];
const totalAge = [...age,...age1,5,...age2];
// console.log(totalAge);

const amarTaka = 54000;
const torTaka = 5822;
const arekjonnerTaka = 8925;
const maximum = Math.max(amarTaka,torTaka,arekjonnerTaka);
// console.log(maximum);

const Google = [10,12,13,15];
const max = Math.max(...Google);
console.log(max);