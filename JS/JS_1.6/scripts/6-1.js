 function showMessage() {
        let message = "Привет, я JavaScript!"; // локальная переменная

        alert(message);
    }

    showMessage(); // Привет, я JavaScript!

    alert(message); // выдает ошибку так как алерт вызывается первее функции а меседжа еще не существует