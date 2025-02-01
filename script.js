const openPopup = document.querySelector("#openPopup");
const popup = document.querySelector("#popup");
const hidePopup = document.querySelector("#close");
const taskList = document.querySelector("ol");
const notice = document.querySelector("#notice");
const addBtn = document.querySelector("#addBtn");
let listValues = JSON.parse(localStorage.getItem("list")) || [];
const addToLocalStorage = (todo) => {
  listValues.push(todo);
  return localStorage.setItem("list", JSON.stringify(listValues));
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("list"));
};
openPopup.addEventListener("click", () => {
  popup.classList.remove("hidden");
  popup.classList.add("flex");
});

hidePopup.addEventListener("click", () => {
  popup.classList.remove("flex");
  popup.classList.add("hidden");
});
const removeFromLocalStorage = (todo) => {
  listValues = listValues.filter((item) => item !== todo);
  localStorage.setItem("list", JSON.stringify(listValues));
};
const addTask = (task) => {
  const newTask = document.createElement("li");
  newTask.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "gap-2",
    "p-2",
    "border-0"
  );
  const taskText = document.createElement("span");
  taskText.textContent = task;
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = " delete";
  deleteBtn.addEventListener("click", () => {
    newTask.remove();
    removeFromLocalStorage(task);
  });
  checkBox.addEventListener("change", () => {
    taskText.style.textDecoration = checkBox.checked ? "line-through" : "none";
    taskText.style.opacity = checkBox.checked ? "50%" : "100%";
  });
  newTask.appendChild(checkBox);
  newTask.appendChild(taskText);
  newTask.appendChild(deleteBtn);
  return newTask;
};
addBtn.addEventListener("click", () => {
  let usrInput = document.querySelector("#usrInput").value.trim();

  if (listValues.includes(usrInput)) {
    notice.textContent = "This Task Already exists!";
  } else if (usrInput === "") {
    notice.textContent = "Enter a task!";
  } else {
    taskList.appendChild(addTask(usrInput));
    notice.textContent = "";
    addToLocalStorage(usrInput);
    document.querySelector("#usrInput").value = "";
  }
});

window.addEventListener("load", () => {
  listValues.forEach((task) => {
  taskList.appendChild(addTask(task));
  });
});

