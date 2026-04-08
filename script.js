const questions = [
    // الأسئلة الأصلية (20)
    {q:"أحب حل المشكلات الرياضية والمنطقية.", field:"العلوم والهندسة"},
    {q:"أستمتع بتجارب العلوم العملية في المختبرات.", field:"العلوم الصحية"},
    {q:"أحب رسم وتصميم الأشياء الإبداعية.", field:"الفنون والتصميم"},
    {q:"أحب تحليل البيانات المالية أو الاقتصادية.", field:"الأعمال والإدارة"},
    {q:"أحب مساعدة المرضى والعمل في الرعاية الصحية.", field:"العلوم الصحية"},
    {q:"أستمتع بدراسة الإنسان والمجتمع وسلوكياته.", field:"العلوم الاجتماعية"},
    {q:"أحب العمل على الحاسوب وبرمجة التطبيقات.", field:"التكنولوجيا والبرمجة"},
    {q:"أحب قراءة النظريات والأبحاث العلمية.", field:"البحث العلمي"},
    {q:"أحب تجربة واختبار أفكار جديدة ومبتكرة.", field:"ريادة الأعمال"},
    {q:"أحب الكتابة أو التحدث لإيصال أفكار للآخرين.", field:"الإعلام والاتصال"},
    {q:"أحب تعلم كيفية عمل الآلات والأجهزة التقنية.", field:"العلوم والهندسة"},
    {q:"أحب دراسة الطبيعة والكائنات الحية.", field:"العلوم الصحية"},
    {q:"أستمتع بالموسيقى أو الفنون البصرية أو المسرح.", field:"الفنون والتصميم"},
    {q:"أحب متابعة الأخبار الاقتصادية أو تحليل الأسواق.", field:"الأعمال والإدارة"},
    {q:"أحب دراسة الأمراض وعلاجها أو العمل في المستشفيات.", field:"العلوم الصحية"},
    {q:"أحب دراسة تاريخ المجتمعات والثقافات المختلفة.", field:"العلوم الاجتماعية"},
    {q:"أحب تطوير مواقع الإنترنت أو التطبيقات الإلكترونية.", field:"التكنولوجيا والبرمجة"},
    {q:"أستمتع بتجربة نظريات الفيزياء أو الرياضيات المعقدة.", field:"العلوم والهندسة"},
    {q:"أحب تصميم شعارات أو أعمال جرافيك أو أزياء.", field:"الفنون والتصميم"},
    {q:"أحب قيادة المشاريع أو تنظيم الفرق لتحقيق أهداف محددة.", field:"الأعمال والإدارة"},

    // الأسئلة الجديدة (20 إضافية - دقيقة واستراتيجية)
    {q:"أجد متعة في تنظيم الجداول والبيانات بدقة عالية.", field:"الأعمال والإدارة"},
    {q:"أهتم بمعرفة كيفية حماية الأنظمة من الاختراق السيبراني.", field:"التكنولوجيا والبرمجة"},
    {q:"أحب التفكير في طرق لتقليل التلوث وحماية البيئة.", field:"العلوم والهندسة"},
    {q:"أستمتع بشرح المفاهيم المعقدة للآخرين بأسلوب مبسط.", field:"الإعلام والاتصال"},
    {q:"أهتم بمتابعة القضايا القانونية وكيفية تحقيق العدالة.", field:"العلوم الاجتماعية"},
    {q:"أحب استكشاف كيف تؤثر التكنولوجيا على سلوك البشر.", field:"التكنولوجيا والبرمجة"},
    {q:"أميل إلى التخطيط المالي طويل الأمد والاستثمار.", field:"الأعمال والإدارة"},
    {q:"أحب العمل اليدوي الدقيق مثل فك وتركيب الأجهزة.", field:"العلوم والهندسة"},
    {q:"أجد نفسي مهتماً بتصميم واجهات التطبيقات لتكون سهلة.", field:"الفنون والتصميم"},
    {q:"أحب دراسة اللغات واكتشاف أسرار الترجمة.", field:"الإعلام والاتصال"},
    {q:"أهتم بعلم الفلك واستكشاف الفضاء والكون.", field:"البحث العلمي"},
    {q:"أحب العمل في بيئة حيوية تتطلب اتخاذ قرارات سريعة.", field:"ريادة الأعمال"},
    {q:"أهتم بمعرفة كيفية صناعة الأدوية وتأثيرها الكيميائي.", field:"العلوم الصحية"},
    {q:"أحب الدفاع عن حقوق الآخرين وتمثيلهم في النقاشات.", field:"العلوم الاجتماعية"},
    {q:"أستمتع بإنتاج مقاطع الفيديو أو المحتوى الرقمي.", field:"الإعلام والاتصال"},
    {q:"أميل إلى تحليل الذكاء الاصطناعي ومستقبل الروبوتات.", field:"التكنولوجيا والبرمجة"},
    {q:"أحب تنظيم الفعاليات والمناسبات من الألف إلى الياء.", field:"ريادة الأعمال"},
    {q:"أهتم بدراسة التغذية وكيفية تأثير الغذاء على الجسم.", field:"العلوم الصحية"},
    {q:"أحب البحث في الأرشيف والوثائق القديمة لاستخراج الحقائق.", field:"البحث العلمي"},
    {q:"أهتم بتصميم المباني والمساحات العمرانية الذكية.", field:"العلوم والهندسة"}
];

const options = ["نعم", "ممكن", "محايد", "لا"];
const startBtn = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const quizContainer = document.getElementById('quiz-container');

startBtn.addEventListener('click', () => {
    document.querySelector('.header').style.padding = '20px';
    startBtn.classList.add('hidden');
    quizSection.classList.remove('hidden');
    renderQuestions();
});

function renderQuestions() {
    questions.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <span class="question-text">${index + 1}. ${item.q}</span>
            <div class="options-group">
                ${options.map(opt => `
                    <input type="radio" name="q${index}" value="${opt}" id="q${index}${opt}">
                    <label class="option-label" for="q${index}${opt}">${opt}</label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(card);
    });
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const scores = {};
    questions.forEach(q => scores[q.field] = 0);

    questions.forEach((item, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if (answer) {
            if (answer.value === "نعم") scores[item.field] += 3;
            else if (answer.value === "ممكن") scores[item.field] += 1;
        }
    });

    showResults(scores);
});

function showResults(scores) {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topFields = sorted.slice(0, 3);

    const grid = document.getElementById('top-fields-grid');
    grid.innerHTML = topFields.map(([field, score]) => `
        <div class="result-card">
            <h4>${field}</h4>
            <p>نسبة التوافق: ${Math.round((score / 12) * 100)}%</p>
        </div>
    `).join('');

    // رسم بياني بسيط باستخدام Chart.js
    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(s => s[0]),
            datasets: [{
                label: 'قوة الميول',
                data: sorted.map(s => s[1]),
                backgroundColor: '#2d3436'
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });
}