function updateForm() {
    const role = document.getElementById("role").value;
    const passwordSection = document.getElementById("passwordSection");
    const usernameField = document.getElementById("username");

    if (role === "student") {
        usernameField.placeholder = "Enter SRN";

        passwordSection.innerHTML = `
            <div class="dob">
                <select id="day" required>
                    <option value="">Day</option>
                    ${[...Array(31)].map((_, i) => `<option>${i+1}</option>`).join("")}
                </select>

                <select id="month" required>
                    <option value="">Month</option>
                    ${[...Array(12)].map((_, i) => `<option>${i+1}</option>`).join("")}
                </select>

                <select id="year" required>
                    <option value="">Year</option>
                    ${[...Array(30)].map((_, i) => `<option>${1995+i}</option>`).join("")}
                </select>
            </div>
        `;
    } else {
        usernameField.placeholder = "Enter Username";

        passwordSection.innerHTML = `
            <input type="password" id="password" placeholder="Enter Password" required>
        `;
    }
}


// LOGIN VALIDATION
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;

    let password = "";

    if (!role) {
        alert("Please select a role!");
        return;
    }

    // STUDENT PASSWORD
    if (role === "student") {
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;

        if (!day || !month || !year) {
            alert("Select full DOB!");
            return;
        }

        password = `${day}-${month}-${year}`;
    } else {
        password = document.getElementById("password").value;
    }

    // 🔴 ADMIN
    if (role === "admin") {
        const usernameRegex = /^[A-Za-z]{10}$/;
        const passwordRegex = /^admin@\d+$/;

        if (!usernameRegex.test(username)) {
            alert("Admin username must be exactly 10 alphabets!");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must start with admin@ and numbers!");
            return;
        }

        window.location.href = "admin.html";
    }

    // 🔵 STUDENT
    else if (role === "student") {
        const srnRegex = /^[0-9]{2}[a-z]{2}[0-9]{2}[a-z]{3}[0-9]{3}$/;

        if (!srnRegex.test(username)) {
            alert("Invalid SRN format!");
            return;
        }

        window.location.href = "student.html";
    }

    // 🟢 COMPANY
    else if (role === "company") {
        const nameRegex = /^[A-Za-z\s]+$/;
        const passwordRegex = /^[A-Za-z].*$/;

        if (!nameRegex.test(username)) {
            alert("Company name must contain only alphabets!");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must start with an alphabet!");
            return;
        }

        window.location.href = "company.html";
    }

});
