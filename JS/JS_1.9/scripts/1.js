// Создание объекта "Клиент банка"
const bankClient = {
    name: "John Doe",
    age: 30,
    accountNumber: "1234567890",
    balance: 50000,
    [Symbol.for("email")]: "john.doe@example.com",
    [Symbol.for("phone")]: "+1-123-456-7890"
  };
  
  // Создание объекта "Работник клиники"
  const clinicWorker = {
    name: "Jane Smith",
    age: 25,
    jobTitle: "Nurse",
    [Symbol.for("email")]: "jane.smith@example.com",
    [Symbol.for("phone")]: "+1-234-567-8901"
  };
  
  // Создание объекта "Гражданин РФ"
  const russianCitizen = {
    name: "Ivan Ivanov",
    age: 40,
    passportNumber: "1234 567890",
    [Symbol.for("email")]: "ivan.ivanov@example.com",
    [Symbol.for("phone")]: "+7-123-456-7890"
  };
  
  // Вывод свойств объектов на экран
  console.log("Клиент банка:", bankClient);
  console.log("Работник клиники:", clinicWorker);
  console.log("Гражданин РФ:", russianCitizen);
  