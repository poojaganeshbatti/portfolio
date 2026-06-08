function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
}

function saveProfile() {
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    const cgpa = document.getElementById("cgpa").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("displayName").innerText = name;
    document.getElementById("displayCgpa").innerText = cgpa;
    document.getElementById("displaySkills").innerText = skills;

    // Avatar initials
    const initials = name.split(" ").map(n => n[0]).join("");
    document.querySelector(".avatar").innerText = initials;
}

function uploadResume() {
    alert("Resume upload feature coming soon!");
}
