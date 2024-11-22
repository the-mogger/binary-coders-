document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;
  const result = document.getElementById('feedbackResult');
  result.innerHTML = `<p>Thank you, <strong>${name}</strong>, for your feedback!</p><p>"${feedback}"</p>`;
  this.reset();
});
