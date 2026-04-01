const startBtn = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz-section');
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const questions = [
    {q:"أحب حل المشكلات الرياضية والمنطقية.", field:"رياضيات/علوم الحاسوب"},
    {q:"أستمتع بتجارب العلوم العملية في المختبرات.", field:"علوم"},
    {q:"أحب رسم وتصميم الأشياء الإبداعية.", field:"تصميم/فن"},
    {q:"أحب تحليل البيانات المالية أو الاقتصادية.", field:"اقتصاد/مالية"},
    {q:"أحب مساعدة المرضى والعمل في الرعاية الصحية.", field:"طب/تمريض"},
    {q:"أستمتع بدراسة الإنسان والمجتمع وسلوكياته.", field:"علوم اجتماعية/علم نفس"},
    {q:"أحب العمل على الحاسوب وبرمجة التطبيقات.", field:"علوم الحاسوب/تقنية"},
    {q:"أحب قراءة النظريات والأبحاث العلمية.", field:"علوم/بحث"},
    {q:"أحب تجربة واختبار أفكار جديدة ومبتكرة.", field:"ابتكار/ريادة أعمال"},
    {q:"أحب الكتابة أو التحدث لإيصال أفكار للآخرين.", field:"إعلام/أدب"},
    {q:"أحب تعلم كيفية عمل الآلات والأجهزة التقنية.", field:"هندسة/تقنية"},
    {q:"أحب دراسة الطبيعة والكائنات الحية.", field:"علوم حيوية/بيولوجيا"},
    {q:"أستمتع بالموسيقى أو الفنون البصرية أو المسرح.", field:"فن/موسيقى"},
    {q:"أحب متابعة الأخبار الاقتصادية أو تحليل الأسواق.", field:"اقتصاد/مالية"},
    {q:"أحب دراسة الأمراض وعلاجها أو العمل في المستشفيات.", field:"طب/تمريض"},
    {q:"أحب دراسة تاريخ المجتمعات والثقافات المختلفة.", field:"تاريخ/علوم اجتماعية"},
    {q:"أحب تطوير مواقع الإنترنت أو التطبيقات الإلكترونية.", field:"تقنية/علوم الحاسوب"},
    {q:"أستمتع بتجربة نظريات الفيزياء أو الرياضيات المعقدة.", field:"علوم/رياضيات"},
    {q:"أحب تصميم شعارات أو أعمال جرافيك أو أزياء.", field:"تصميم/فن"},
    {q:"أحب قيادة المشاريع أو تنظيم الفرق لتحقيق أهداف محددة.", field:"إدارة/ريادة أعمال"}
];

const options = ["نعم","لا","محايد","ممكن"];

startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    quizSection.classList.remove('hidden');
    questions.forEach((item,index)=>{
        const card = document.createElement('div');
        card.classList.add('question-card');
        card.innerHTML = `<p>${index+1}. ${item.q}</p>`;
        const optsDiv = document.createElement('div');
        optsDiv.classList.add('options');
        options.forEach(opt => {
            const id = `q${index}-${opt}`;
            optsDiv.innerHTML += `<label><input type="radio" name="q${index}" value="${opt}" id="${id}"> ${opt}</label>`;
        });
        card.appendChild(optsDiv);
        quizForm.appendChild(card);
    });
    submitBtn.classList.remove('hidden');
});

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const scores = {};
    questions.forEach(q=>{
        scores[q.field] = 0;
    });
    questions.forEach((item,index)=>{
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if(answer){
            const val = answer.value;
            if(val==="نعم") scores[item.field] += 2;
            else if(val==="ممكن") scores[item.field] += 1;
        }
    });
    const sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
    resultDiv.innerHTML = `<h3>المجالات المناسبة لك:</h3>`;
    sorted.slice(0,3).forEach(([field,score])=>{
        if(score>0) resultDiv.innerHTML += `<p>${field} - نقاط: ${score}</p>`;
    });
    resultDiv.classList.remove('hidden');
});