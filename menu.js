function addMenu() {
  const menuInput = document.getElementById("menuInput");
  const menuList = document.getElementById("menuList");

  const menuName = menuInput.value.trim();
  if (!menuName) {
    alert("Цэсийн нэр оруулна уу!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = menuName;

  const editButton = document.createElement("button");
  editButton.textContent = "Засах";
  editButton.classList.add("edit-btn");
  editButton.onclick = () => showEdit(li);

  li.ondblclick = () => deleteMenu(li);
  li.appendChild(editButton);
  menuList.appendChild(li);

  menuInput.value = "";
}

function showEdit(li) {
  const editInput = document.getElementById("editInput");
  const saveButton = document.getElementById("saveEditButton");

  editInput.value = li.childNodes[0].nodeValue.trim();
  saveButton.onclick = () => saveEdit(li);
}

function saveEdit(li) {
  const editInput = document.getElementById("editInput");
  const newValue = editInput.value.trim();

  if (!newValue) {
    alert("Хоосон нэр хадгалж болохгүй!");
    return;
  }

  li.childNodes[0].nodeValue = newValue + " ";
  editInput.value = "";
}

function deleteMenu(li) {
  if (confirm("Та энэ цэсийг устгахдаа итгэлтэй байна уу?")) {
    li.remove();
  }
}
