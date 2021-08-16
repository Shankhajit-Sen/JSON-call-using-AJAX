let fetchBtn = document.getElementById("fetchBtn");
var container = document.getElementById("list");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status === 200) {
      const obj = JSON.parse(this.responseText);
      var names = "";
      for (var i = 0; i < obj.student.length; i++) {
        names += "<li>" + obj.student[i].name + "</li>";
        console.log(obj.student[i].name);
      }
    } else {
      console.warn("Did not receive 200 OK from response");
    }
    container.insertAdjacentHTML("beforeend", names);
  };
  xhr.open("get", "student.json");
  xhr.send();
  document.getElementById("fetchBtn").style.visibility = "hidden";
}
