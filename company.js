// Switch sections
function showSection(id) {
    document.querySelectorAll(".section")
        .forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

// Store jobs
let jobs = [];

// Post job
function postJob() {

    let job = {
        title: document.getElementById("title").value,
        type: document.getElementById("type").value,
        dept: document.getElementById("dept").value,
        package: document.getElementById("package").value,
        cgpa: document.getElementById("cgpa").value
    };

    jobs.push(job);
    displayJobs();
}

// Display jobs
function displayJobs() {
    let container = document.getElementById("jobList");
    container.innerHTML = "";

    jobs.forEach(j => {
        container.innerHTML += `
            <div class="job-card">
                <h3>${j.title}</h3>
                <p>${j.type} | ${j.dept}</p>
                <p>Package: ${j.package}</p>
                <p>Min CGPA: ${j.cgpa}</p>
            </div>
        `;
    });
}
