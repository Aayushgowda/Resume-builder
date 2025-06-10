function generateResume() {
  document.getElementById('preview-name').textContent = document.getElementById('name').value;
  document.getElementById('preview-email').textContent = document.getElementById('email').value;
  document.getElementById('preview-phone').textContent = document.getElementById('phone').value;
  document.getElementById('preview-summary').textContent = document.getElementById('summary').value;
  
  const skills = document.getElementById('skills').value.split(',');
  const skillList = document.getElementById('preview-skills');
  skillList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillList.appendChild(li);
  });

  document.getElementById('preview-experience').textContent = document.getElementById('experience').value;
  document.getElementById('preview-education').textContent = document.getElementById('education').value;
}

function downloadPDF() {
  const element = document.getElementById('resume-preview');
  html2pdf()
    .from(element)
    .set({
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    })
    .save();
}