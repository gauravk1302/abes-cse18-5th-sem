const name = document.getElementById("name");
const btn  = document.getElementById("btn");
const email  = document.getElementById("email");
const password  = document.getElementById("password");
const students = document.getElementById("students");


const emailDisplay = btn.addEventListener("click", () => {
    console.log(`Email -> ${email.value}`);
})



const nameDisplay = btn.addEventListener("click", () => {
        console.log(`Name -> ${name.value}`);

})

const passwordDisplay = btn.addEventListener("click", () => {
    console.log(`Password -> ${password.value}`);
})

btn.addEventListener("click", () => {

})

btn.addEventListener("click", () => {

    students.style.display = "block";

    students.innerHTML = `
        <p><strong>Name:</strong> ${name.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Password:</strong> ${password.value}</p>
    `;
});