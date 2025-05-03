const formData = {
    email: '',
    message: ''
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", event => {
    //Витягуємо ім'я та нове значення   з поля форми, яке було змінено 
    const { name, value } = event.target;
    //Онолює об'єкт formData з новим значенням
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedFormData = localStorage.getItem('feedback-form-state');
    if (savedFormData) {
        const { email, message } = JSON.parse(savedFormData); 
        formData.email = email;
        formData.message = message;
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('textarea[name="message"]').value = message;
    }
})
form.addEventListener("submit", event => {
    event.preventDefault();
    const { email, message } = formData;
    if (email.trim() === "" || message.trim() === "") {
        alert("Fill please all fields");
        return;
    }
  // Вивести дані в консоль
    console.log(formData);

    // Очистити локальне сховище
    localStorage.removeItem('feedback-form-state');

    // Очистити об'єкт formData
    formData.email = "";
    formData.message = "";

    // Очистити поля форми
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
});