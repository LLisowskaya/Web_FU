let min = 55;
let quarter;

switch (true) {
  case (min >= 0 && min < 15):
    quarter = "первая";
    break;
  case (min >= 15 && min < 30):
    quarter = "вторая";
    break;
  case (min >= 30 && min < 45):
    quarter = "третья";
    break;
  case (min >= 45 && min < 60):
    quarter = "четвертая";
    break;
  default:
    quarter = "неверное значение";
}

console.log(`Число ${min} попадает в ${quarter} четверть часа`);
