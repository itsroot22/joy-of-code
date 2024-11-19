// app.js

// Simulate data storage (replace with real backend calls if needed)
let internshipData = [];

// Function to handle user role login
function setRole(role) {
  // Hide all dashboards first
  document.querySelectorAll('.dashboard').forEach(dashboard => {
    dashboard.style.display = 'none';
  });

  // Show the corresponding dashboard
  if (role === 'intern') {
    document.getElementById('internDashboard').style.display = 'block';
  } else if (role === 'mentor') {
    document.getElementById('mentorDashboard').style.display = 'block';
  } else if (role === 'coordinator') {
    document.getElementById('coordinatorDashboard').style.display = 'block';
  }

  // Hide login section
  document.getElementById('loginSection').style.display = 'none';
}

// Function to log out
function logout() {
  document.getElementById('loginSection').style.display = 'block';
  document.querySelectorAll('.dashboard').forEach(dashboard => {
    dashboard.style.display = 'none';
  });
}

// Handle intern details form submission (Intern Dashboard)
document.getElementById('internDetailsForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let internDetails = {
    startDate: document.getElementById('startDate').value,
    companyName: document.getElementById('companyName').value,
    companyAddress: document.getElementById('companyAddress').value,
    externalMentor: document.getElementById('externalMentor').value,
    mentorContact: document.getElementById('mentorContact').value,
    mentorEmail: document.getElementById('mentorEmail').value,
    companyRegNumber: document.getElementById('companyRegNumber').value,
    stipend: document.getElementById('stipend').value,
    offerLetter: document.getElementById('offerLetter').files[0]?.name
  };

  internshipData.push(internDetails);
  console.log('Intern details submitted:', internDetails);
  alert('Intern details submitted successfully!');
});
