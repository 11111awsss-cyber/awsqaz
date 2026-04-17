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



window.loadData = async function(){

  let out = document.getElementById("output");
  out.innerHTML = "";

  let data = await getDocs(collection(db,"forms"));

  data.forEach(doc=>{
    let d = doc.data();


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { ... };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


    
    out.innerHTML += `
      <div class="card">
        <b>🕒 الوقت:</b> ${d.time}<br><br>

        <b>🏫 المدرسة:</b> ${d.school}<br>
        <b>👤 النوع:</b> ${d.type}<br><br>

        <b>📊 السؤال 1:</b> ${d.q1}<br>
        <b>📊 السؤال 2:</b> ${d.q2}<br>
        <b>📊 السؤال 3:</b> ${d.q3}<br><br>

        <b>💡 اقتراح:</b> ${d.suggestions}
      </div>
    `;
  });
}


  
  alert("تم إرسال النموذج بنجاح!");
  document.getElementById('schoolName').value = '';
  document.getElementById('parentSatisfaction').value = '';
  document.getElementById('studentSatisfaction').value = '';
  document.getElementById('forumSatisfaction').value = '';
  document.getElementById('suggestions').value = '';
});
