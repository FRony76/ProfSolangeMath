/**
 * build_data.js — Script de VALIDATION de data.js (et non plus de generation/ecrasement).
 *
 * IMPORTANT : data.js est desormais la SEULE source de verite du contenu pedagogique.
 * Ce script ne contient plus aucune copie du contenu (modules, chapitres, exercices) :
 * une ancienne version de ce fichier reecrivait data.js avec un sous-ensemble obsolete
 * du cours, ce qui a provoque une perte de contenu (chapitres et exercices manquants).
 *
 * Ce script se contente de :
 *   1. Lire data.js
 *   2. Verifier qu'il est un JSON valide
 *   3. Verifier la structure attendue (modules > chapters > exercises)
 *   4. Afficher un resume (nombre de modules, chapitres, exercices)
 *
 * Il ne modifie JAMAIS data.js. Pour ajouter du contenu, editer data.js directement.
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.js');
const src = fs.readFileSync(dataPath, 'utf8');

let COURSE_DATA;
try {
  const jsonText = src.replace(/^const COURSE_DATA = /, '').replace(/;\s*$/, '');
  COURSE_DATA = JSON.parse(jsonText);
} catch (err) {
  console.error('ERREUR : data.js ne contient pas un JSON valide.');
  console.error(err.message);
  process.exit(1);
}

if (!Array.isArray(COURSE_DATA)) {
  console.error('ERREUR : COURSE_DATA doit etre un tableau de modules.');
  process.exit(1);
}

let totalChapters = 0;
let totalExercises = 0;
let errors = [];

COURSE_DATA.forEach(function(module, mIdx) {
  if (!module.id || !module.title || !Array.isArray(module.chapters)) {
    errors.push('Module ' + mIdx + ' : structure invalide (id/title/chapters manquant).');
    return;
  }
  module.chapters.forEach(function(chapter, cIdx) {
    totalChapters++;
    if (!chapter.id || !chapter.title || !chapter.courseHtml || !Array.isArray(chapter.exercises)) {
      errors.push('Module "' + module.id + '", chapitre ' + cIdx + ' : structure invalide.');
      return;
    }
    chapter.exercises.forEach(function(ex, eIdx) {
      totalExercises++;
      if (!ex.id || [1, 2, 3].indexOf(ex.level) === -1 || !ex.question || !Array.isArray(ex.options) || !ex.correction) {
        errors.push('Chapitre "' + chapter.id + '", exercice ' + eIdx + ' : structure invalide.');
        return;
      }
      const correctCount = ex.options.filter(function(o) { return o.isCorrect; }).length;
      if (correctCount !== 1) {
        errors.push('Exercice "' + ex.id + '" : doit avoir exactement 1 bonne reponse (trouve ' + correctCount + ').');
      }
    });
  });
});

console.log('Modules     : ' + COURSE_DATA.length);
console.log('Chapitres   : ' + totalChapters);
console.log('Exercices   : ' + totalExercises);

if (errors.length > 0) {
  console.error('\n' + errors.length + ' erreur(s) de structure detectee(s) :');
  errors.forEach(function(e) { console.error(' - ' + e); });
  process.exit(1);
}

console.log('\nOK : data.js est valide et coherent.');
