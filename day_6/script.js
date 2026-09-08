let students = [];

function addStudent() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNo").value;
    let course = document.getElementById("course").value;
    let marks = Number(document.getElementById("marks").value);

    if (name == "" || roll == "" || course == "") {
        alert("Please fill all fields");
        return;
    }

    let grade;

    if (marks >= 90)
        grade = "A";
    else if (marks >= 80)
        grade = "B";
    else if (marks >= 70)
        grade = "C";
    else if (marks >= 60)
        grade = "D";
    else
        grade = "F";

    students.push({
        name: name,
        roll: roll,
        course: course,
        marks: marks,
        grade: grade
    });

    clearForm();
    displayStudents();
}

function displayStudents() {

    let table = document.getElementById("studentTable");
    let search = document.getElementById("search").value.toLowerCase();

    table.innerHTML = "";

    let total = 0;
    let count = 0;

    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        if (
            student.name.toLowerCase().includes(search) ||
            student.roll.toLowerCase().includes(search)
        ) {

            table.innerHTML += `
                <tr>
                    <td>${student.roll}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.marks}</td>
                    <td>${student.grade}</td>
                    <td>
                        <button onclick="deleteStudent(${i})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;

            total += student.marks;
            count++;
        }
    }

    document.getElementById("totalStudents").innerText = count;

    if (count > 0)
        document.getElementById("averageMarks").innerText =
            (total / count).toFixed(2);
    else
        document.getElementById("averageMarks").innerText = 0;
}

function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}

function clearForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "";
    document.getElementById("marks").value = "";
}

displayStudents();