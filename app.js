let selectedBefore = "";
let selectedAfter = "";
let selectedDifficulty = "";

// Mood selection
function setupButtons(selector, onSelect) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onSelect(btn.dataset.value);
    });
  });
}

setupButtons('.mood-btn', (val) => {
  if (event.target.closest('[data-value]').parentElement.previousElementSibling.textContent.includes('Before')) {
    selectedBefore = val;
  } else {
    selectedAfter = val;
  }
});

setupButtons('.diff-btn', (val) => {
  selectedDifficulty = val;
});

const form = document.getElementById('plungeForm');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const plunges = JSON.parse(localStorage.getItem('plunges')) || [];

    plunges.push({
      date: document.getElementById('date').value,
      duration: document.getElementById('duration').value,
      location: document.getElementById('location').value,
      waterTemp: document.getElementById('waterTemp').value,
      outsideTemp: document.getElementById('outsideTemp').value,
      cyclePhase: document.getElementById('cyclePhase').value,
      notes: document.getElementById('notes').value,
      beforeFeeling: selectedBefore,
      afterFeeling: selectedAfter,
      difficulty: selectedDifficulty
    });

    localStorage.setItem('plunges', JSON.stringify(plunges));

    alert('Session saved!');
    form.reset();
  });
}
