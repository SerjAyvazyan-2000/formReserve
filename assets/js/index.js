document.querySelectorAll(".form-select-box").forEach(selectBox => {
    const title = selectBox.querySelector(".select-titles");
    const optionsContainer = selectBox.querySelector(".select-cnt");

    title.addEventListener("click", () => {
        const isActive = optionsContainer.classList.contains("active");

        document.querySelectorAll(".select-cnt").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".select-titles").forEach(el => el.classList.remove("active"));

        if (!isActive) {
            optionsContainer.classList.add("active");
            title.classList.add("active");
        }
    });

    optionsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("select-option")) {
            title.querySelector("span").textContent = event.target.textContent;
        }
    });
});

document.querySelector(".privacy-policy").addEventListener("click", function () {
    this.classList.toggle("active");
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Валидация имени
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (name.value.trim().length < 3) {
        name.classList.add("error");
        nameError.style.display = "inline";
        isValid = false;
    } else {
        name.classList.remove("error");
        nameError.style.display = "none";
    }

    // Валидация email
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        emailError.style.display = "inline";
        isValid = false;
    } else {
        email.classList.remove("error");
        emailError.style.display = "none";
    }

    // Валидация телефона
    let phone = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");
    let phonePattern = /^(?:\+7|7|8)\d{10}$/; // Паттерн для телефона

    // Проверяем формат только при отправке формы
    if (!phonePattern.test(phone.value.trim()) || phone.value.trim().length < 10) {
        alert("Неверный формат номера! Введите номер в формате +7XXXXXXXXXX, 7XXXXXXXXXX или 8XXXXXXXXXX.");
        phone.classList.add("error");
        phoneError.style.display = "inline";
        isValid = false;
    } else {
        phone.classList.remove("error");
        phoneError.style.display = "none";
    }

    // Проверка на согласие с Privacy Policy
    let privacyPolicy = document.querySelector(".privacy-policy");
    if (!privacyPolicy.classList.contains("active")) {
        alert("Please agree to the Privacy Policy.");
        isValid = false;
    }

    // Если форма валидна
    if (isValid) {
        alert("Form successfully submitted!");
        // Здесь можно отправить данные на сервер, если нужно
        this.reset(); // Очищаем форму
    }
});

// Удаление ошибки при вводе в поле
document.getElementById("name").addEventListener("input", function() {
    if (this.value.trim().length >= 3) {
        this.classList.remove("error");
        document.getElementById("nameError").style.display = "none";
    }
});

document.getElementById("email").addEventListener("input", function() {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.value.trim())) {
        this.classList.remove("error");
        document.getElementById("emailError").style.display = "none";
    }
});

document.getElementById("phone").addEventListener("input", function() {
    // Убираем ошибку на вводе, не показывая alert
    this.classList.remove("error");
    document.getElementById("phoneError").style.display = "none";
});