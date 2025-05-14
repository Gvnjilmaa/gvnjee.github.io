function addMenu() {
    // Input элементийг авах
    const menuInput = document.getElementById("menuInput");
    const menuText = menuInput.value.trim();

    // Хоосон утга шалгах
    if (menuText === "") {
        alert("Цэсний нэрийг оруулна уу");
        return;
    }

    try {
        // Цэсний жагсаалт руу нэмэх
        const menuList = document.getElementById("menuList");
        if (!menuList) {
            throw new Error("menuList element олдсонгүй");
        }

        const newItem = document.createElement("li");
        newItem.textContent = menuText;

        // Нэг дарахад засах
        newItem.addEventListener("click", function () {
            const editInput = document.getElementById("editInput");
            const editSection = document.getElementById("editSection");
            if (editInput && editSection) {
                editInput.value = newItem.textContent;
                editSection.style.display = "block";
                window.currentEditItem = newItem;
            }
        });

        // Хоёр дарахад устгах
        newItem.addEventListener("dblclick", function () {
            if (confirm("Та энэ цэсийг устгахдаа итгэлтэй байна уу?")) {
                newItem.remove();
            }
        });

        menuList.appendChild(newItem);
        menuInput.value = "";
    } catch (error) {
        console.error("Цэс нэмэх үед алдаа гарлаа:", error);
        alert("Цэс нэмэх үед алдаа гарлаа");
    }
}
