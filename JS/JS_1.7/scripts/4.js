//Реализуйте в виде стрелочной функции вычисление среднего значения данных в массиве

const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
  };
  
  // Пример использования:
  console.log(calculateAverage([2, 4, 6, 8])); // Выводит 5
  console.log(calculateAverage([10, 20, 30])); // Выводит 20
  console.log(calculateAverage([1, 2, 3, 4, 5])); // Выводит 3
  