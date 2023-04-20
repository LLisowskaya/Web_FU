//В виде стрелочной функции реализуйте функцию, вычисляющую количество дней до нового года.

const daysUntilNewYear = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
    const timeDiff = newYear.getTime() - now.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  };
  
  // Пример использования:
  console.log(daysUntilNewYear()); // Выводит количество дней до нового года