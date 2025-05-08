function signup() {
    const user = document.getElementById('signupUser').value;
    const pass = document.getElementById('signupPass').value;
    localStorage.setItem(user, pass);
    alert('Signup successful!');
  }
  
  function login() {
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    if (localStorage.getItem(user) === pass) {
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials!');
    }
  }
  
  function saveSurvey() {
    const title = document.getElementById('surveyTitle').value;
    const desc = document.getElementById('surveyDesc').value;
    const surveys = JSON.parse(localStorage.getItem('surveys') || '[]');
    surveys.push({ title, desc });
    localStorage.setItem('surveys', JSON.stringify(surveys));
    alert('Survey saved!');
    window.location.href = 'dashboard.html';
  }
  
  function loadSurveys() {
    const container = document.getElementById('surveyContainer');
    const surveys = JSON.parse(localStorage.getItem('surveys') || '[]');
    if (surveys.length === 0) {
      container.innerHTML = '<p>No surveys found.</p>';
    } else {
      container.innerHTML = surveys.map(s => `<div><h3>${s.title}</h3><p>${s.desc}</p></div>`).join('');
    }
  }
  