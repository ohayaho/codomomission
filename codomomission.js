const buttons = document.querySelectorAll("button[name='action']");
const resetButton = document.getElementById("reset");
const celebrationDiv = document.getElementById("celebration");
const actionDiv = document.getElementById("action");
let clickedButtonsCount = 0;

buttons.forEach(button => {
    button.addEventListener("click", event => {
        //event.preventDefault();

        if (!button.classList.contains("flipped")) {
            const imageUrl = button.getAttribute("data-image-url");
            button.style.backgroundImage = `url(${imageUrl})`;
            // button.style.opacity = "1";

            button.textContent = "";
            button.classList.add("flipped");
            button.disabled = true;
            clickedButtonsCount++;

            if (clickedButtonsCount === buttons.length) {
                actionDiv.style.display = "none";
                celebrationDiv.style.opacity = "1";
                celebrationDiv.style.position = "static";
                celebrationDiv.style.display = "block";
                celebrationDiv.style.margin = "1rem auto";
                // celebrationDiv.justifycontent = "center";
            }
        }
    });
});

document.querySelectorAll('button[name="action"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const imgURL = event.target.dataset.imageUrl;
        event.target.style.backgroundImage = `url(${imgURL})`;
        event.target.disabled = true;
        checkCompletion();
    });
});

resetButton.addEventListener("click", () => {
    window.location.reload();
});
