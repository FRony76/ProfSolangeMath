# Rapport de validation — Contenu ProfSolange vs. sources de référence

Sources croisées : article [cours-thierry.paris](https://cours-thierry.paris/mathematiques-quels-chapitres-reviser-entre-la-seconde-et-la-1ere/) (table de priorisation officielle), *Livret-3eme-2nde.pdf* (LLG/Henri-IV), *PREMIERE-MATHS_Entree-en-spe-maths-premiere.pdf* (livret de liaison 2nde→1ère spé).

## 1. Validation mathématique

Les 50 exercices de `data.js` ont été recalculés un par un (vérification symbolique et numérique automatisée). **Aucune erreur détectée** : tous les résultats annoncés comme corrects le sont, et tous les distracteurs (mauvaises réponses) sont bien faux. La double relecture pédagogique (clarté des corrigés, absence de saut de complexité, conformité au programme) ne soulève pas non plus de problème — la progression Niveau 1 → 2 → 3 est cohérente dans chaque chapitre.

## 2. Anomalie technique à corriger en priorité

**`build_data.js` est obsolète et dangereux.** Ce script ne contient qu'un sous-ensemble ancien du contenu (il manque par exemple tout le chapitre Trigonométrie, et plusieurs exercices Niveau 3 dans presque tous les chapitres). Si quelqu'un l'exécute (`node build_data.js`) pour régénérer `data.js`, **il effacera silencieusement tout le contenu ajouté depuis** (environ 35% des exercices actuels). Il faut soit le supprimer, soit le resynchroniser avec `data.js` avant de le garder dans le dépôt.

## 3. Couverture du programme — lacunes identifiées

Le contenu actuel est mathématiquement solide mais **incomplet** par rapport aux deux livrets de référence, qui couvrent tous deux explicitement ces points comme prioritaires pour l'entrée en Spé Maths 1ère :

**Module Algèbre (lacunes) :**
- Ensembles de nombres (ℕ, ℤ, 𝔻, ℚ, ℝ et les symboles ∈, ⊂, ∩, ∪) — absent alors que c'est le tout premier chapitre du livret de liaison.
- Racines carrées (simplification, $\sqrt{a \times b}$, rationalisation de dénominateur) — absent.
- Valeur absolue — absent.
- Systèmes d'équations à deux inconnues (substitution, combinaison linéaire) — absent, alors que l'article le classe priorité 1 en tronc commun.

**Module Fonctions (lacunes) :**
- Fonctions de référence carré/racine/cube/inverse (tableaux de variations types, courbes) — actuellement seule la fonction affine est traitée en détail.
- Équations de droites sous forme cartésienne ($ax+by+c=0$, vecteur directeur) — seule la forme réduite $y=ax+b$ est couverte.
- Tableau de signes d'une fonction affine, présenté explicitement (actuellement traité seulement en filigrane dans eq_n5).

**Module Géométrie (lacunes) :**
- Quadrilatères et leurs propriétés (parallélogramme, etc.) — absent.
- Équations cartésiennes de droites en lien avec les vecteurs directeurs — absent (cf. ci-dessus).

**Module Probabilités/Statistiques (lacunes) :**
- Pourcentages et taux d'évolution (augmentation/diminution successives, taux global) — absent alors que c'est un point central des deux livrets.
- Écart-type — absent.

**Transversal :**
- Algorithmique/Python (boucles, tests, calcul de moyenne ou de seuil) — entièrement absent, alors que l'article le mentionne comme attendu en Module 2 et que le livret de liaison y consacre une section dédiée.

## 4. Ce qui est bien calibré (à ne pas toucher)

La progression interne de chaque chapitre existant (fractions, puissances, calcul littéral, équations/inéquations, généralités sur les fonctions, fonctions affines, variations, repérage, vecteurs, trigonométrie, statistiques, probabilités) correspond bien au niveau d'exigence des deux livrets, avec une vulgarisation pédagogique adaptée à une élève en difficulté (cards-tip, warnings, exemples pas-à-pas) sans perte de rigueur. Le chapitre Trigonométrie en particulier est complet et bien gradué (CAH-SOH-TOA → valeurs remarquables → formule fondamentale → problèmes contextualisés).

## 5. Recommandation

Combler les lacunes ci-dessus nécessite l'ajout d'environ 5 à 6 nouveaux chapitres (ensembles de nombres, racines/valeur absolue, systèmes d'équations, fonctions de référence, équations cartésiennes de droites, pourcentages/écart-type) plus, si souhaité, un module d'introduction à l'algorithmique. Je peux rédiger ce contenu (cours + exercices progressifs + corrigés, avec double validation interne) chapitre par chapitre dans la foulée — dites-moi si vous voulez que je commence, et par lequel.
