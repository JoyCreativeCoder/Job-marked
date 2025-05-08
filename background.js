let appliedJobs = new Set();

chrome.runtime.onMessage((message, sender, sendResponse) => {
    if(message.type === CHECK_JOB) {
        const alreadyApplied = appliedJobs.has(message.url);
        sendResponse({applied: alreadyApplied })
    }

    if(message.type === MARK_JOB) {
        appliedJobs.add(message.url);
        sendResponse({success: true })
    }

    return true;
})
