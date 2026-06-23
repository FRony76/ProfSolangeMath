// Application Logic - Prof pour Solange

// --- State Management ---
let state = {
  currentView: 'dashboard', // 'dashboard', 'chapter', 'progress'
  currentChapterId: null,
  currentTab: 'course', // 'course', 'exercises'
  userProgress: {
    completedChapters: {}, // chapterId: true/false
    scores: {}, // exerciseId: true (correct) or false (incorrect)
    selectedAnswers: {} // exerciseId: optionIndex
  }
};

// --- Virtual Coach Speech Bubbles ---
const COACH_MESSAGES = {
  welcome: "Bonjour ! Prête à conquérir le programme de maths aujourd'hui ? Chaque petit pas te rapproche de la Spécialité de Première ! 💪",
  courseOpened: "Excellente idée de commencer par le cours. Note bien les formules clés dans un cahier dédié, cela aide à mémoriser ! 📝",
  exercisesOpened: "C'est l'heure de s'entraîner ! Prends un brouillon et un stylo. Prends ton temps, pas de précipitation. 🧠",
  answerCorrect: "Superbe ! C'est tout à fait ça. Tu as fait preuve de rigueur. Continue comme ça ! 🌟",
  answerIncorrect: "Ce n'est pas tout à fait la bonne réponse, mais c'est comme ça qu'on progresse ! Regarde le corrigé pas à pas pour comprendre l'astuce. 💡",
  chapterComplete: "Félicitations ! Tu as validé tous les exercices de ce chapitre. Tu es sur la bonne voie ! 🎉",
  allDone: "Incroyable ! Tu as terminé le module entier. Ton niveau en algèbre commence à ressembler à celui d'une élève de Première ! 🚀"
};

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  initNavigation();
  showView('dashboard');
  updateCoachSpeech(COACH_MESSAGES.welcome);
  updateProgressBar();
});

// --- LocalStorage Logic ---
function loadProgress() {
  const saved = localStorage.getItem('profsolange_progress');
  if (saved) {
    try {
      state.userProgress = JSON.parse(saved);
      // Ensure sub-objects exist
      if (!state.userProgress.completedChapters) state.userProgress.completedChapters = {};
      if (!state.userProgress.scores) state.userProgress.scores = {};
      if (!state.userProgress.selectedAnswers) state.userProgress.selectedAnswers = {};
    } catch (e) {
      console.error("Erreur de chargement de la progression", e);
    }
  }
}

function saveProgress() {
  localStorage.setItem('profsolange_progress', JSON.stringify(state.userProgress));
  updateProgressBar();
}

function resetProgress() {
  if (confirm("Es-tu sûre de vouloir réinitialiser toute ta progression ?")) {
    state.userProgress = {
      completedChapters: {},
      scores: {},
      selectedAnswers: {}
    };
    saveProgress();
    showView('dashboard');
    updateCoachSpeech("On reprend à zéro ! C'est reparti pour de nouvelles victoires. 🧭");
  }
}

// --- Navigation ---
function initNavigation() {
  // Sidebar links (Desktop)
  document.querySelectorAll('.sidebar .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.dataset.target;
      if (target === 'reset') {
        resetProgress();
      } else {
        showView(target);
      }
    });
  });

  // Bottom nav (Mobile)
  document.querySelectorAll('.mobile-nav .mobile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.dataset.target;
      if (target === 'reset') {
        resetProgress();
      } else {
        showView(target);
      }
    });
  });
}

function showView(viewName) {
  state.currentView = viewName;
  
  // Update active states in navigation
  document.querySelectorAll('.nav-item').forEach(nav => {
    nav.classList.toggle('active', nav.dataset.target === viewName);
  });
  document.querySelectorAll('.mobile-nav-item').forEach(nav => {
    nav.classList.toggle('active', nav.dataset.target === viewName);
  });

  // Show/Hide views in DOM
  const mainArea = document.getElementById('view-content');
  mainArea.innerHTML = '';

  if (viewName === 'dashboard') {
    renderDashboard(mainArea);
  } else if (viewName === 'progress') {
    renderProgressView(mainArea);
  }
}

// --- Math Rendering Helper ---
function triggerMathRendering(element) {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(element, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ],
      throwOnError: false
    });
  }
}

// --- Render Dashboard ---
function renderDashboard(container) {
  let modulesHtml = '';

  COURSE_DATA.forEach(module => {
    let chaptersHtml = '';
    module.chapters.forEach(ch => {
      const isCompleted = isChapterCompleted(ch.id);
      const scoreText = getChapterScoreText(ch);
      const badgeClass = isCompleted ? 'completed' : '';
      const badgeText = isCompleted ? 'Complété' : 'À faire';

      const yearBadge = ch.yearLevel
        ? `<span class="year-badge" title="Niveau d'origine de cette notion">${ch.yearLevel}</span>`
        : '';

      chaptersHtml += `
        <div class="chapter-card" data-chapter-id="${ch.id}">
          <div class="chapter-card-header">
            <div class="chapter-card-icon">${ch.icon}</div>
            <div class="chapter-card-info">
              <h4>${ch.title}</h4>
              <div class="chapter-card-badges">
                <span class="chapter-badge ${badgeClass}">${badgeText}</span>
                ${yearBadge}
              </div>
            </div>
          </div>
          <div class="chapter-card-progress">
            <span>Score : ${scoreText}</span>
            <span>Commencer →</span>
          </div>
        </div>
      `;
    });

    modulesHtml += `
      <div class="module-section">
        <h3>${module.title}</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem;">${module.description}</p>
        <div class="chapters-grid">
          ${chaptersHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="dashboard-grid">
      <div class="welcome-card">
        <span class="welcome-badge">🚀 Objectif Spé Maths 1ère</span>
        <h3>Bienvenue dans ton espace de réussite !</h3>
        <p>Ce programme sur-mesure est conçu pour t'aider à combler tes lacunes en algèbre, fonctions, géométrie et probabilités/statistiques. Pas à pas, avec rigueur et bienveillance, tu vas acquérir les automatismes exigés en Première.</p>
        <button class="btn-start" id="btn-start-first">
          <span>Lancer le Chapitre 1</span>
          <span>➜</span>
        </button>
      </div>

      ${modulesHtml}
    </div>
  `;

  // Attach card event click handlers
  container.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      openChapter(card.dataset.chapterId);
    });
  });

  const startBtn = container.querySelector('#btn-start-first');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      openChapter(COURSE_DATA[0].chapters[0].id);
    });
  }

  triggerMathRendering(container);
}

// --- Render Chapter View ---
function openChapter(chapterId) {
  state.currentView = 'chapter';
  state.currentChapterId = chapterId;
  state.currentTab = 'course';

  renderChapterView();
  updateCoachSpeech(COACH_MESSAGES.courseOpened);
}

function renderChapterView() {
  const container = document.getElementById('view-content');
  const chapter = findChapterById(state.currentChapterId);
  
  if (!chapter) return;

  container.innerHTML = `
    <button class="back-btn" id="btn-back">
      <span>← Retour au tableau de bord</span>
    </button>

    <div class="header-bar chapter-header" style="margin-bottom: 1rem;">
      <h2>${chapter.title}</h2>
      ${chapter.yearLevel ? `<span class="year-badge" title="Niveau d'origine de cette notion">${chapter.yearLevel}</span>` : ''}
    </div>

    <div class="tabs-container">
      <button class="tab-btn ${state.currentTab === 'course' ? 'active' : ''}" data-tab="course">Fiche de Cours</button>
      <button class="tab-btn ${state.currentTab === 'exercises' ? 'active' : ''}" data-tab="exercises">Exercices d'Entraînement</button>
    </div>

    <div id="course-pane" class="content-pane ${state.currentTab === 'course' ? 'active' : ''}">
      <div class="course-pane">
        ${chapter.courseHtml}
      </div>
    </div>

    <div id="exercises-pane" class="content-pane ${state.currentTab === 'exercises' ? 'active' : ''}">
      <div class="exercises-container">
        ${renderExercisesList(chapter)}
      </div>
    </div>
  `;

  // Register Handlers
  container.querySelector('#btn-back').addEventListener('click', () => {
    showView('dashboard');
    updateCoachSpeech(COACH_MESSAGES.welcome);
  });

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Attach exercise events
  initExerciseInteractions(chapter);

  triggerMathRendering(container);
}

function switchTab(tabName) {
  state.currentTab = tabName;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === tabName || btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.content-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const activePane = document.getElementById(`${tabName}-pane`);
  if (activePane) activePane.classList.add('active');

  if (tabName === 'course') {
    updateCoachSpeech(COACH_MESSAGES.courseOpened);
  } else {
    updateCoachSpeech(COACH_MESSAGES.exercisesOpened);
  }
}

// --- Render Exercises ---
function renderExercisesList(chapter) {
  let listHtml = '';

  chapter.exercises.forEach((ex, idx) => {
    const isAnswered = state.userProgress.scores[ex.id] !== undefined;
    const selectedAnsIndex = state.userProgress.selectedAnswers[ex.id];
    
    let optionsHtml = '';
    ex.options.forEach((opt, optIdx) => {
      let optClass = '';
      let badge = '';

      if (isAnswered) {
        if (opt.isCorrect) {
          optClass = 'correct';
          badge = ' ✓';
        } else if (selectedAnsIndex === optIdx) {
          optClass = 'wrong';
          badge = ' ✗';
        }
      } else if (selectedAnsIndex === optIdx) {
        optClass = 'selected';
      }

      optionsHtml += `
        <button class="option-btn ${optClass}" data-ex-id="${ex.id}" data-opt-idx="${optIdx}" ${isAnswered ? 'disabled' : ''}>
          <span>${opt.text}</span>
          <span class="badge">${badge}</span>
        </button>
      `;
    });

    const checkBtnDisabled = selectedAnsIndex === undefined || isAnswered ? 'disabled' : '';
    
    // Feedback and step-by-step corrections
    let feedbackHtml = '';
    if (isAnswered) {
      const isCorrect = state.userProgress.scores[ex.id] === true;
      const feedbackClass = isCorrect ? 'correct' : 'wrong';
      const feedbackText = isCorrect 
        ? "Excellent travail ! C'est la bonne réponse." 
        : "Ce n'est pas tout à fait ça. Prends le temps d'analyser la correction détaillée ci-dessous.";

      feedbackHtml = `
        <div class="exercise-feedback ${feedbackClass}">
          <p><strong>${isCorrect ? 'Correct !' : 'Essaie encore la prochaine fois !'}</strong> ${feedbackText}</p>
          <div class="correction-box">
            ${ex.correction}
          </div>
        </div>
      `;
    }

    listHtml += `
      <div class="exercise-card level-${ex.level} ${isAnswered ? 'answered' : ''}" id="card-${ex.id}">
        <span class="exercise-level">Niveau ${ex.level} • ${getLevelLabel(ex.level)}</span>
        <div class="exercise-question">
          ${ex.question}
        </div>
        <div class="exercise-options">
          ${optionsHtml}
        </div>
        ${!isAnswered ? `<button class="btn-check" id="btn-check-${ex.id}" ${checkBtnDisabled}>Vérifier ma réponse</button>` : ''}
        ${feedbackHtml}
      </div>
    `;
  });

  return listHtml;
}

function initExerciseInteractions(chapter) {
  chapter.exercises.forEach(ex => {
    const card = document.getElementById(`card-${ex.id}`);
    if (!card) return;

    const optButtons = card.querySelectorAll('.option-btn');
    const checkBtn = card.querySelector('.btn-check');

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Clear previous selections for this question (if not already locked/answered)
        if (state.userProgress.scores[ex.id] !== undefined) return;

        optButtons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        const optIdx = parseInt(btn.dataset.optIdx);
        state.userProgress.selectedAnswers[ex.id] = optIdx;
        
        if (checkBtn) checkBtn.removeAttribute('disabled');
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const selectedIdx = state.userProgress.selectedAnswers[ex.id];
        if (selectedIdx === undefined) return;

        const correctOpt = ex.options[selectedIdx].isCorrect;
        state.userProgress.scores[ex.id] = correctOpt;

        // Visual speech bubble update
        if (correctOpt) {
          updateCoachSpeech(COACH_MESSAGES.answerCorrect);
        } else {
          updateCoachSpeech(COACH_MESSAGES.answerIncorrect);
        }

        // Check if all exercises in this chapter are now answered
        checkChapterCompletion(chapter);
        
        saveProgress();
        renderChapterView(); // Re-render this view to display corrections & lock options
      });
    }
  });
}

function checkChapterCompletion(chapter) {
  const allAnswered = chapter.exercises.every(ex => state.userProgress.scores[ex.id] !== undefined);
  if (allAnswered) {
    state.userProgress.completedChapters[chapter.id] = true;
    updateCoachSpeech(COACH_MESSAGES.chapterComplete);

    // Find the module this chapter belongs to, and check if ALL its chapters are done
    const parentModule = COURSE_DATA.find(m => m.chapters.some(ch => ch.id === chapter.id));
    const allChaptersDone = parentModule && parentModule.chapters.every(ch => state.userProgress.completedChapters[ch.id] === true);
    if (allChaptersDone) {
      setTimeout(() => {
        updateCoachSpeech(COACH_MESSAGES.allDone);
      }, 3000);
    }
  }
}

function getLevelLabel(level) {
  switch(level) {
    case 1: return "Application directe";
    case 2: return "Intermédiaire";
    case 3: return "Objectif Première";
    default: return "";
  }
}

// --- Render Progress View ---
function renderProgressView(container) {
  let moduleSectionsHtml = '';

  let totalQuestions = 0;
  let correctAnswers = 0;
  let answeredQuestions = 0;

  COURSE_DATA.forEach(module => {
    let chapterListHtml = '';

    module.chapters.forEach(ch => {
      let chTotal = ch.exercises.length;
      let chCorrect = 0;
      let chAnswered = 0;

      ch.exercises.forEach(ex => {
        totalQuestions++;
        if (state.userProgress.scores[ex.id] !== undefined) {
          chAnswered++;
          answeredQuestions++;
          if (state.userProgress.scores[ex.id] === true) {
            chCorrect++;
            correctAnswers++;
          }
        }
      });

      const pct = chTotal > 0 ? Math.round((chAnswered / chTotal) * 100) : 0;
      const completedBadge = state.userProgress.completedChapters[ch.id]
        ? `<span class="chapter-badge completed">Validé</span>`
        : `<span class="chapter-badge">En cours</span>`;

      chapterListHtml += `
        <div class="chapter-card" style="cursor: default;">
          <div class="chapter-card-header">
            <div class="chapter-card-icon">${ch.icon}</div>
            <div class="chapter-card-info">
              <h4>${ch.title}</h4>
              <p>${chAnswered}/${chTotal} questions complétées (${chCorrect} correctes)</p>
            </div>
            <div style="margin-left: auto;">
              ${completedBadge}
            </div>
          </div>
          <div style="width: 100%; height: 6px; background-color: var(--border); border-radius: 3px; overflow: hidden; margin-top: 10px;">
            <div style="width: ${pct}%; height: 100%; background-color: var(--primary); transition: width 0.3s;"></div>
          </div>
        </div>
      `;
    });

    moduleSectionsHtml += `
      <div class="module-section">
        <h3>${module.title}</h3>
        <div class="chapters-grid" style="grid-template-columns: 1fr;">
          ${chapterListHtml}
        </div>
      </div>
    `;
  });

  const modulePct = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
  const globalScore = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

  container.innerHTML = `
    <div class="dashboard-grid">
      <div class="welcome-card" style="background: linear-gradient(135deg, #065f46 0%, #047857 100%);">
        <span class="welcome-badge" style="background: rgba(255,255,255,0.2);">📊 Tableau de Progression</span>
        <h3>Suivi de tes efforts</h3>
        <p>Le travail régulier paie toujours en mathématiques. Voici le récapitulatif de tes performances et des compétences acquises.</p>
        <div style="display: flex; gap: 2rem; margin-top: 1.5rem;">
          <div>
            <div style="font-size: 2.2rem; font-weight: 800; font-family: 'Outfit';">${modulePct}%</div>
            <div style="font-size: 0.8rem; color: #a7f3d0;">Avancement global</div>
          </div>
          <div>
            <div style="font-size: 2.2rem; font-weight: 800; font-family: 'Outfit';">${correctAnswers}/${answeredQuestions}</div>
            <div style="font-size: 0.8rem; color: #a7f3d0;">Réponses correctes</div>
          </div>
          <div>
            <div style="font-size: 2.2rem; font-weight: 800; font-family: 'Outfit';">${globalScore}%</div>
            <div style="font-size: 0.8rem; color: #a7f3d0;">Taux de réussite</div>
          </div>
        </div>
      </div>

      ${moduleSectionsHtml}
    </div>
  `;
}

// --- UI Updates ---
function updateCoachSpeech(text) {
  const speechBubble = document.getElementById('coach-bubble');
  if (speechBubble) {
    speechBubble.textContent = text;
  }
}

function updateProgressBar() {
  let totalEx = 0;
  let answeredEx = 0;

  COURSE_DATA.forEach(module => {
    module.chapters.forEach(ch => {
      ch.exercises.forEach(ex => {
        totalEx++;
        if (state.userProgress.scores[ex.id] !== undefined) {
          answeredEx++;
        }
      });
    });
  });

  const pct = totalEx > 0 ? Math.round((answeredEx / totalEx) * 100) : 0;
  
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');

  if (fill) fill.style.width = `${pct}%`;
  if (label) label.textContent = `${pct}%`;
}

// --- Helpers ---
function findChapterById(chapterId) {
  for (const module of COURSE_DATA) {
    const found = module.chapters.find(ch => ch.id === chapterId);
    if (found) return found;
  }
  return null;
}

function isChapterCompleted(chapterId) {
  return state.userProgress.completedChapters[chapterId] === true;
}

function getChapterScoreText(chapter) {
  let count = 0;
  let correct = 0;
  chapter.exercises.forEach(ex => {
    if (state.userProgress.scores[ex.id] !== undefined) {
      count++;
      if (state.userProgress.scores[ex.id] === true) {
        correct++;
      }
    }
  });
  if (count === 0) return "--";
  return `${correct}/${count}`;
}
