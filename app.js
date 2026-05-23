const form = document.getElementById('plungeForm');

if (form) {

  form.addEventListener('submit', function(e) {

    e.preventDefault();

    const beforeFeeling = document.querySelector('input[name="beforeFeeling"]:checked')?.value || '';

    const afterFeeling = document.querySelector('input[name="afterFeeling"]:checked')?.value || '';

    const plunge = {
      date: document.getElementById('date').value,
      duration: document.getElementById('duration').value,
      location: document.getElementById('location').value,
      waterTemp: document.getElementById('waterTemp').value,
      outsideTemp: document.getElementById('outsideTemp').value,
      cyclePhase: document.getElementById('cyclePhase').value,
      notes: document.getElementById('notes').value,
      beforeFeeling,
      afterFeeling,
      difficulty: document.getElementById('difficulty').value
    };

    const plunges = JSON.parse(localStorage.getItem('plunges')) || [];

    plunges.push(plunge);

    localStorage.setItem('plunges', JSON.stringify(plunges));

    alert('Session saved!');

    form.reset();

  });
}
