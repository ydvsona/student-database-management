const API = "http://localhost:5000";

function login() {
  fetch(API + "/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(() => window.location = "dashboard.html");
}

function addStudent() {
  fetch(API + "/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      rollNo: roll.value,
      className: class.value,
      email: email.value,
      phone: phone.value
    })
  })
  .then(() => loadStudents());
}

function loadStudents() {
  fetch(API + "/students")
  .then(res => res.json())
  .then(data => {
    list.innerHTML = "";
    data.forEach(s => {
      list.innerHTML += `<li>${s.name}
      <button onclick="deleteStudent('${s._id}')">X</button></li>`;
    });
  });
}

function deleteStudent(id) {
  fetch(API + "/students/" + id, { method: "DELETE" })
  .then(() => loadStudents());
}

loadStudents();