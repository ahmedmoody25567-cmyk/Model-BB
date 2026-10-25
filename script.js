const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz8iAovcmIFBZBjWG_4GMav_UMB9ETgSm_6jfLi6TsMYICw-e7Qu7gwNjpMpzyb_q1f/exec";

const rawQuestions = [
    { q: "1. The car still breaks down so often. My father ............. it to the mechanic.", options: ["must have taken", "can't have taken", "must have been taken", "can't have been taken"] },
    { q: "2. \"Lyan paid close attention to what I said.\" The word \"attention\" is closest in meaning to .............", options: ["ignorance", "focus", "silence", "confusion"] },
    { q: "3. The engineer ............ the network system for the last four hours.", options: ["has been repaired", "was repaired", "has repaired", "repaired"] },
    { q: "4. \"Lyan quickly grabbed the falling glass.\" The word \"grabbed\" is closest in meaning to .............", options: ["threw", "seized", "ignored", "released"] },
    { q: "5. Working in an emergency room can be physically exhausting, but many doctors still find it highly .............", options: ["exhausted", "rewarding", "rewarded", "contaminated"] },
    { q: "6. The patient finally regained ............ a few minutes after receiving CPR.", options: ["attention", "consciousness", "pulse", "chaos"] },
    { q: "7. The inspector warned that using non-sterilised equipment could easily leave surgical instruments .............", options: ["exhausted", "anxious", "contaminated", "fulfilled"] },
    { q: "8. I haven't met the boss ......... . It's my first time to meet him.", options: ["yet", "before", "already", "never"] },
    { q: "9. The agent ............ three customer complaints so far this week.", options: ["had handled", "has handled", "handled", "was handled"] },
    { q: "10. I ............ three emails this morning. I'll send two more.", options: ["have been sending", "had sent", "was sent", "have sent"] },
    { q: "11. Lyan ............ her bedroom. It looks very clean and tidy now.", options: ["had cleaned", "has cleaned", "is cleaned", "would clean"] },
    { q: "12. We haven't visited our uncle ............ the last time we gathered at his beach house.", options: ["while", "when", "for", "since"] },
    { q: "13. I haven't travelled to my hometown by bus ......... my early childhood.", options: ["when", "lately", "for", "since"] },
    { q: "14. ......... doing your home assignment yet?", options: ["Have you finished", "Had you finished", "Will you finish", "Are you finishing"] },
    { q: "15. A medical .................. is an instrument used by doctors to inspect internal parts of the body.", options: ["collarbone", "forehead", "scope", "throat"] },
    { q: "16. A: Would you like something to eat? B: No, thanks. I ......... lunch.", options: ["had just had", "have just had", "has just had", "just had"] },
    { q: "17. How long ............ did you launch your new company?", options: ["for", "since", "ago", "a & c"] },
    { q: "18. You cannot buy these antibiotics without showing a signed medical .................. from a registered doctor.", options: ["appointment", "prescription", "construction", "gratitude"] },
    { q: "19. Working in a busy public hospital was an unforgettable .................. that taught her patience and endurance.", options: ["gratitude", "experience", "construction", "hesitation"] },
    { q: "20. Blog posts may include hyperlinks to ........ . ( SB )", options: ["sources and related content", "poems", "advertisements only", "random websites"] },
    { q: "21. Patients in the emergency department often .................. softly when they are waiting for their painkilling medication to take effect.", options: ["cheer", "clutch", "moan", "stitch"] },
    { q: "22. The introduction is usually the ........ paragraph.", options: ["last", "longest", "middle", "first"] },
    { q: "23. Working hours in this company are quite ............., allowing employees to start anytime between 8 AM and 10 AM.", options: ["miserable", "severe", "flexible", "pale"] },
    { q: "24. Make sure you update your app to the latest .................. to access all the newly added safety features.", options: ["version", "artifact", "generation", "groundwork"] },
    { q: "25. Before heading out for the long trip, don't forget to fully .................. your phone's battery so it doesn't run out of power.", options: ["drive", "enhance", "troubleshoot", "charge"] },
    { q: "26. A/An .................. refers to a series of powerful rulers from the same family who govern over a long period.", options: ["artifact", "dynasty", "version", "urgency"] },
    { q: "27. My father ......... us not to tell lies.", options: ["said", "said to", "told", "suggested"] },
    { q: "28. Successful designers often .................. modern furniture with traditional elements to create a stylish living space.", options: ["harm", "blend", "instruct", "computerize"] },
    { q: "29. The historical city is .................. history and culture, making it a prime destination for archaeologists and tourists alike.", options: ["sophisticated", "steeped in", "driven by", "targeted with"] },
    { q: "30. Lyan promised me that she ......... buy a bicycle for me the following week .", options: ["can", "must", "would", "may"] },
    { q: "31. \"I can see the Eiffel Tower from here.\" - She said that ......... the Eiffel Tower from ......... .", options: ["she could see / there", "she can see / there", "I could see / here", "she could see / here"] },
    { q: "32. \"Don't drive so fast!\" - Dad advised me ......... so fast.", options: ["don't drive", "not driving", "not to drive", "to not drove"] },
    { q: "33. The teacher ......... the students to stop running in the corridor.", options: ["recommended", "ordered", "suggested", "avoided"] },
    { q: "34. I told her that she ......... a bad mistake and that she should be cautious later on .", options: ["had made", "is making", "will make", "has made"] },
    { q: "35. We informed him that we ......... after school the previous day.", options: ["played", "had played", "was played", "had been played"] },
    { q: "36. \"Please, close the door.\" - Lyan asked me ......... the door.", options: ["closed", "I close", "to close", "not to close"] },
    { q: "37. The ability to achieve a goal quickly and successfully without wasting time, effort, or resources is called ............. .", options: ["chore", "appliance", "efficiency", "evidence"] },
    { q: "38. Lyan said a moment ago that she will see the dentist ......... .", options: ["the next day", "that day", "tomorrow", "the following day"] },
    { q: "39. \"As a child, I used to like cartoons.\" - He said that he ......... to like cartoons as a child.", options: ["had used", "used", "was used", "had been used"] },
    { q: "40. What distinguishes argumentative essay?", options: ["Emotional storytelling", "Logical argument with evidence", "Personal diary style", "Informal conversation"] },
    { q: "41. Which tone is most suitable for argumentative essay?", options: ["Humorous and casual", "Formal and objective", "Emotional and dramatic", "Informal and friendly"] },
    { q: "42. Maintaining a healthy and ............. diet that includes fruits, vegetables, and proteins is essential for good health.", options: ["banned", "accurate", "medical", "balanced"] },
    { q: "43. Doing daily ............. such as washing dishes and vacuuming the floor can consume a lot of time.", options: ["chores", "efficiency", "standstills", "tracks"] },
    { q: "44. A person who always expects the worst possible outcome in any situation is called ............. .", options: ["profound", "prolonged", "pessimistic", "optimistic"] },
    { q: "45. The ability of communities and systems to recover quickly from environmental challenges is known as ............. .", options: ["extreme weather", "climate resilience", "greenhouse gas emissions", "marginalized communities"] },
    { q: "46. A persuasive essay ........ .", options: ["tells a story about a real-life experience", "describes a person, place or object", "explains a topic using facts, examples and statistics", "tries to convince the reader to accept the writer's opinion or recommendation"] },
    { q: "47. A/An ........ essay seeks to make the reader agree with the writer's point of view.", options: ["narrative", "descriptive", "persuasive", "expository"] },
    { q: "48. Giving everyone equal opportunities and fair treatment in society is the definition of ............. .", options: ["activist", "equity", "meteorologist", "crisis"] },
    { q: "49. To stress the importance of a key detail in your speech is to ............. it.", options: ["forecast", "cause", "emphasize", "summarize"] },
    { q: "50. Severe phenomena like sudden floods, violent storms, and intense heatwaves are examples of ............. .", options: ["marginalized communities", "climate resilience", "extreme weather", "greenhouse gas emissions"] },
    { q: "51. The garden looks wet. It ......... have rained last night.", options: ["must", "might", "can't", "should"] },
    { q: "52. It's very cold outside, but the windows are open. He ......... have forgotten to close them.", options: ["must", "should", "can't", "shouldn't"] },
    { q: "53. Because the region went without a single drop of rain for nearly two years, the severe ............. destroyed our crops .", options: ["flood", "hurricane", "drought", "rainfall"] },
    { q: "54. That watch ......... have cost a lot of money. It is made of plastic.", options: ["must", "can't", "might", "can"] },
    { q: "55. She ......... be happy; she has just passed her final exam.", options: ["must", "had to", "can't", "ought not to"] },
    { q: "56. Joe did not attend the party. He ......... invited. He'd just had a heart attack and is in hospital.", options: ["can't have been", "can't have", "mustn't have been", "shouldn't have"] },
    { q: "57. There's water all over the floor. You ......... to turn off the shower.", options: ["must forget", "can't have forgotten", "must have forgotten", "can't forget"] },
    { q: "58. The car no longer breaks down. It ............. to the mechanic.", options: ["must have taken", "can't have taken", "must have been taken", "can't have been taken"] },
    { q: "59. He ......... be a doctor. I have no idea.", options: ["must", "can't", "might", "a & b"] },
    { q: "60. Successful students show a strong ............. to their studies by practicing regularly every day.", options: ["negligence", "commitment", "inundation", "phenomenon"] }
];

let timeLeft = 75 * 60;
let timerInterval;
let studentData = {};

window.onload = function() {
    if (localStorage.getItem('modelB_submitted') === 'true') {
        showSubmittedScreen();
    }
};

document.getElementById('startForm').addEventListener('submit', function(e) {
    e.preventDefault();
    studentData.name = document.getElementById('studentName').value.trim();
    studentData.phone = document.getElementById('parentPhone').value.trim();

    if (!studentData.name || !studentData.phone) return;

    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('examScreen').style.display = 'block';
    document.getElementById('timerBox').style.display = 'flex';

    renderQuestions();
    startTimer();
});

function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    rawQuestions.forEach((qObj, index) => {
        const card = document.createElement('div');
        card.className = 'card question-card';
        
        let optionsHTML = '';
        qObj.options.forEach((opt) => {
            optionsHTML += `
                <label class="option-label">
                    <input type="radio" name="q_${index}" value="${opt}" required>
                    <span>${opt}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="question-header">${qObj.q}</div>
            <div class="options-container">${optionsHTML}</div>
        `;
        container.appendChild(card);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById('timer').innerText = 
            `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("انتهى الوقت المحدد للامتحان! سيتم تسليم إجاباتك أوتوماتيكياً.");
            submitExam();
        }
    }, 1000);
}

document.getElementById('examForm').addEventListener('submit', function5 => {
    // تم التصحيح لمنع الخطأ البرمجي
});

document.getElementById('examForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (confirm("هل أنت متأكد من تسليم الامتحان؟")) {
        submitExam();
    }
});

function submitExam() {
    clearInterval(timerInterval);
    let userAnswers = {};

    rawQuestions.forEach((qObj, index) => {
        const selected = document.querySelector(`input[name="q_${index}"]:checked`);
        userAnswers[`Q${index+1}`] = selected ? selected.value : "لم يُجب";
    });

    localStorage.setItem('modelB_submitted', 'true');

    const payload = {
        model: "Model B",
        studentName: studentData.name,
        parentPhone: studentData.phone,
        responses: userAnswers,
        submittedAt: new Date().toLocaleString()
    };

    const formBody = Object.keys(payload).map(key => {
        if (typeof payload[key] === 'object') {
            return encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(payload[key]));
        }
        return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');

    fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
    }).then(response => response.text())
      .then(result => {
          console.log("Success:", result);
          showSubmittedScreen();
      })
      .catch(err => {
          console.error("Error:", err);
          showSubmittedScreen();
      });
}

function showSubmittedScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('examScreen').style.display = 'none';
    document.getElementById('timerBox').style.display = 'none';
    document.getElementById('submittedScreen').style.display = 'block';
}
