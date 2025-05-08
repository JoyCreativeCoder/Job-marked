const jobUrl = window.location.href;

chrome.runtime.sendMessage({type : "CHECK_JOB", url :jobUrl }, (response) => {
    if(response.applied) {
        //show applied banner
        showAppliedBanner()
    } else {
        //show marked as applied button
        showMarkedBtn()
    }
})


function showAppliedBanner() {
    const banner = document.createElement("div");
    banner.className = "jobmarked-banner";
    banner.textContent = "✅You've already applied for this job!";
    document.body.appendChild(banner);
}

function showMarkedBtn() {
    const btn = document.createElement("button")
    btn.className = "jobmarked-button";
    btn.textContent = "Mark as Applied"

    btn.addEventListenr("click", () => {
        chrome.runtime.sendMessage({type:"MARK_JOB", url:jobUrl}, (response) => {
            if(response.success) {
                button.remove(); 
                showAppliedBanner()
            } else {
                alert("Something went wrong. Try again.");
            }
        })
    })

    document.body.appendChild(btn);
}