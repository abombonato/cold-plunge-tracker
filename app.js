let beforeMood = "";
let afterMood = "";
let difficulty = "";

// handle mood + difficulty buttons
document.querySelectorAll(".mood, .diff").forEach(btn => {
  btn.addEventListener("click", () => {

    const value = btn.dataset.value;
    const type = btn.classList.contains("mood") ? "mood" : "diff";

    if (type === "diff") {
      difficulty = value;
      document.querySelectorAll(".diff").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    } else {

      const group = btn.closest(".field").querySelectorAll(".mood");

      group.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (btn.parentElement.previousElementSibling.textContent.includes("before")) {
        beforeMood = value;
      } else {
        afterMood = value;
      }
    }
  });
});

const form = document.getElementById("plungeForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const plunges = JSON.parse(localStorage.getItem("plunges")) || [];

    plunges.push({
      date: document.getElementById("date").value,
      duration: document.getElementById("duration").value,
      location: document.getElementById("location").value,
      waterTemp: document.getElementById("waterTemp").value,
      outsideTemp: document.getElementById("outsideTemp").value,
      cyclePhase: document.getElementById("cyclePhase").value,
      notes: document.getElementById("notes").value,
      beforeMood,
      afterMood,
      difficulty
    });

    localStorage.setItem("plunges", JSON.stringify(plunges));

    alert("Saved!");
    form.reset();

    beforeMood = "";
    afterMood = "";
    difficulty = "";
  });
}
