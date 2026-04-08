document.getElementById('submitBtn').addEventListener('click', () => {
  const schoolName = document.getElementById('schoolName').value;
  const parent = document.getElementById('parentSatisfaction').value;
  const student = document.getElementById('studentSatisfaction').value;
  const forum = document.getElementById('forumSatisfaction').value;
  const suggestions = document.getElementById('suggestions').value;

  if (!schoolName || !parent || !student || !forum) {
    alert("الرجاء ملء جميع الحقول المطلوبة");
    return;
  }

  const submission = { schoolName, parent, student, forum, suggestions };
  let submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
  submissions.push(submission);
  localStorage.setItem('submissions', JSON.stringify(submissions));

  alert("تم إرسال النموذج بنجاح!");
  document.getElementById('schoolName').value = '';
  document.getElementById('parentSatisfaction').value = '';
  document.getElementById('studentSatisfaction').value = '';
  document.getElementById('forumSatisfaction').value = '';
  document.getElementById('suggestions').value = '';
});