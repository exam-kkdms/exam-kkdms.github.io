function saveTeacherSession(teacher) {
  localStorage.setItem("teacherData", JSON.stringify(teacher));
}

function getTeacherSession() {
  return JSON.parse(localStorage.getItem("teacherData"));
}

function clearTeacherSession() {
  localStorage.removeItem("teacherData");
}

function checkLogin() {
  let teacher = getTeacherSession();
  if (!teacher) {
    window.location.href = "login.html";
  }
}
