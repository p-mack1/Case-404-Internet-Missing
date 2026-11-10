console.log("Case 404 loaded successfully.");

const spinnerBtn = document.querySelector("#spinnerBtn");
const spinnerReply = document.querySelector("#spinnerReply");
function questionSpinner() {
    spinnerReply.textContent =
    "I was buffering all night. Ask the cookie.";
}
spinnerBtn.addEventListener("click", questionSpinner);

const InspectBtn = document.querySelector("#InspectBtn");
const evidenceCount = document.querySelector("#evidenceCount");
const evidenceList = document.querySelector("#evidenceList");
const evidence = [];
function addEvidence(clue) {
    if (evidence.includes(clue)) return;
    evidence.push(clue);
    const item = document.createElement("li");
    item.textContent = clue;
    evidenceList.appendChild(item);
    evidenceCount.textContent = "Evidence collected: " + evidence.length + " / 3";
}
function inspectLog() {
    addEvidence("Log: Cookie accessed the router at 2:14.")
}
inspectBtn.addEventListener("click", inspectLog);