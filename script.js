function applyJob(jobName) {
    const name = prompt("Enter your name:");

    if (name && name.trim() !== "") {
        alert(
            "Application submitted successfully!\n\n" +
            "Applicant: " + name.trim() + "\n" +
            "Job: " + jobName
        );
    }
}

function searchJobs() {
    const searchInput = document.getElementById("searchJob");

    if (!searchInput) {
        return;
    }

    const search = searchInput.value.toLowerCase().trim();
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(function(job) {
        const text = job.textContent.toLowerCase();

        if (text.includes(search)) {
            job.style.display = "";
        } else {
            job.style.display = "none";
        }
    });
}