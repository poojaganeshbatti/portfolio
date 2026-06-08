function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
}

// NOTICE SYSTEM
function addNotice() {
    const input = document.getElementById("noticeInput");
    const text = input.value;

    if (!text) {
        alert("Enter notice!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${text}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("noticeList").appendChild(li);

    input.value = "";
}
