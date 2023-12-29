const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

toggleModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    changeIcon();
});

function changeIcon() {
    const icon = document.getElementById("mode-icon");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}
