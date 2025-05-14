function addMenu() {
    const menuText = document.getElementById("menuInput").value.trim();
    if (!menuText) return;
  
    const li = document.createElement("li");
    li.textContent = menuText;
    li.onclick = () => showEdit(li);
    li.ondblclick = () => deleteMenu(li);
  
    document.getElementById("menuList").appendChild(li);
    document.getElementById("menuInput").value = "";
  }
  
  function showEdit(li) {
    document.getElementById("editSection").style.display = "block";
    document.getElementById("editInput").value = li.textContent;
    document.getElementById("editInput").dataset.target = li;
  }
  
  function saveEdit() {
    const input = document.getElementById("editInput");
    const targetLi = input.dataset.target;
  
    if (targetLi && input.value.trim()) {
      targetLi.textContent = input.value.trim();
      targetLi.onclick = () => showEdit(targetLi);
      targetLi.ondblclick = () => deleteMenu(targetLi);
      input.value = "";
      document.getElementById("editSection").style.display = "none";
    }
  }
  
  function deleteMenu(li) {
    if (confirm("Та энэ цэсийг устгах уу?")) {
      li.remove();
    }
  }
  