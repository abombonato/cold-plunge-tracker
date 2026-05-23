let beforeMood = "";
let afterMood = "";
let difficulty = "";

// mood selection
document.querySelectorAll(".mood").forEach(btn => {
  btn.onclick = () => {
    const type = btn.dataset.type;
    const value = btn.dataset.value;

    const group = btn.closest(".grid").querySelectorAll(".mood");
    group.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (type === "before") beforeMood = value;
    if (type === "after") afterMood = value;
  };
});

// difficulty
document.querySelectorAll(".diff").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".diff").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    difficulty = btn.dataset.value;
  };
});

// save
const form = document.getElementById("plungeForm");

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("plunges")) || [];

    data.push({
      date: date.value,
      duration: duration.value,
      location: location.value,
      waterTemp: waterTemp.value,
      outsideTemp: outsideTemp.value,
      cyclePhase: cyclePhase.value,
      notes: notes.value,
      beforeMood,
      afterMood,
      difficulty
    });

    localStorage.setItem("plunges", JSON.stringify(data));

    window.location.href = "stats.html";
  };
}
