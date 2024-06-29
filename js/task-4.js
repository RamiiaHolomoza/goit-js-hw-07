const form = document.querySelector('.login-form')
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    const elements = event.currentTarget.elements;
    // console.dir(elements);
    const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
    };

    for (let check in info) {
        if (info[check] === "") {
            alert('All form fields must be filled in');
            return;
        }
    }
    console.log(info);
    event.currentTarget.reset() 
}