const COURSE_DATA = [
  {
    "id": "module1",
    "title": "Module 1 : Algèbre et Calcul",
    "description": "Ce module pose les bases indispensables de calcul pour aborder sereinement la Spécialité Mathématiques en Première. Nous allons revoir les fractions, les puissances, le calcul littéral et les équations/inéquations.",
    "chapters": [
      {
        "id": "ensembles_nombres",
        "title": "Chapitre 0 : Les Ensembles de Nombres",
        "icon": "🧩",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Avant de calculer, il faut savoir <strong>dans quel \"monde\" de nombres</strong> on se trouve. Les mathématiciens ont classé les nombres en plusieurs familles, les unes incluses dans les autres, comme des poupées russes.</p>\n\n        <h3>1. Les cinq grands ensembles</h3>\n        <ul>\n          <li><strong>$\\mathbb{N}$</strong> — les entiers <strong>naturels</strong> : $0, 1, 2, 3, 4, \\dots$ (jamais négatifs, jamais à virgule).</li>\n          <li><strong>$\\mathbb{Z}$</strong> — les entiers <strong>relatifs</strong> : tous les entiers, positifs ou négatifs : $\\dots, -2, -1, 0, 1, 2, \\dots$</li>\n          <li><strong>$\\mathbb{D}$</strong> — les <strong>décimaux</strong> : tous les nombres qui s'écrivent avec un nombre <em>fini</em> de chiffres après la virgule (ex : $3,25$ ; $-7$ ; $0,5$).</li>\n          <li><strong>$\\mathbb{Q}$</strong> — les <strong>rationnels</strong> : tous les nombres qui peuvent s'écrire comme une fraction $\\frac{a}{b}$ avec $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{Z}^*$ (un entier divisé par un entier non nul). Cela inclut des nombres à virgule <em>infinie mais répétitive</em>, comme $\\frac{1}{3} = 0,333...$</li>\n          <li><strong>$\\mathbb{R}$</strong> — les <strong>réels</strong> : absolument tous les nombres utilisés au lycée, y compris les <strong>irrationnels</strong> comme $\\sqrt{2}$ ou $\\pi$, qui ont une infinité de décimales <em>non répétitives</em> et ne peuvent jamais s'écrire en fraction exacte.</li>\n        </ul>\n\n        <div class=\"card-warning\">\n          <strong>Piège classique :</strong> $\\frac{1}{3}$ est un nombre <strong>rationnel</strong> ($\\mathbb{Q}$) mais <strong>pas décimal</strong> ($\\mathbb{D}$), car son écriture décimale $0,333...$ ne s'arrête jamais ! En revanche, $0,75 = \\frac{3}{4}$ est à la fois décimal et rationnel.\n        </div>\n\n        <h3>2. L'inclusion des ensembles</h3>\n        <p>Chaque ensemble est <strong>inclus</strong> dans le suivant (symbole $\\subset$) :</p>\n        <div class=\"formula\">\n          <p>$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$</p>\n        </div>\n        <p>Cela signifie que tout nombre naturel est aussi un entier relatif, qui est aussi un décimal, etc. Mais l'inverse est faux : $-5$ est un entier relatif ($\\mathbb{Z}$) mais pas un entier naturel ($\\mathbb{N}$), puisqu'il est négatif.</p>\n\n        <h3>3. Le vocabulaire des ensembles</h3>\n        <ul>\n          <li><strong>$\\in$</strong> se lit \"appartient à\". Exemple : $3 \\in \\mathbb{N}$ (3 appartient à $\\mathbb{N}$).</li>\n          <li><strong>$\\notin$</strong> se lit \"n'appartient pas à\". Exemple : $\\sqrt{2} \\notin \\mathbb{Q}$.</li>\n          <li><strong>$\\subset$</strong> se lit \"est inclus dans\". Exemple : $\\mathbb{N} \\subset \\mathbb{R}$.</li>\n          <li><strong>$\\cap$</strong> (intersection) : les éléments communs à deux ensembles.</li>\n          <li><strong>$\\cup$</strong> (réunion) : tous les éléments d'au moins un des deux ensembles.</li>\n        </ul>\n\n        <div class=\"card-tip\">\n          <strong>Astuce pour reconnaître un irrationnel :</strong> si un nombre contient une racine carrée d'un nombre qui n'est pas un carré parfait (comme $\\sqrt{2}$, $\\sqrt{3}$, $\\sqrt{5}$...) ou s'il s'agit de $\\pi$, il est irrationnel : il appartient à $\\mathbb{R}$ mais pas à $\\mathbb{Q}$.\n        </div>\n      ",
        "exercises": [
          {
            "id": "ens_n1",
            "level": 1,
            "title": "Niveau 1 : Identifier le plus petit ensemble",
            "question": "<p>Quel est le plus petit ensemble (parmi $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$) auquel appartient le nombre $-4$ ?</p>",
            "options": [
              {
                "text": "$\\mathbb{Z}$",
                "isCorrect": true
              },
              {
                "text": "$\\mathbb{N}$",
                "isCorrect": false
              },
              {
                "text": "$\\mathbb{Q}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$-4$ est un entier négatif. Il n'appartient pas à $\\mathbb{N}$ (les naturels sont tous positifs ou nuls).</p>\n            <p>Il appartient en revanche à $\\mathbb{Z}$ (les entiers relatifs incluent les négatifs). Comme $\\mathbb{Z}$ est le plus petit ensemble proposé qui contient $-4$, la réponse est $\\mathbb{Z}$.</p>\n            <p><em>Remarque :</em> $-4$ appartient aussi à $\\mathbb{Q}$ et à $\\mathbb{R}$ (puisque $\\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$), mais $\\mathbb{Z}$ est le plus \"petit\" ensemble cité qui le contient.</p>\n          "
          },
          {
            "id": "ens_n2",
            "level": 1,
            "title": "Niveau 1 : Vrai ou faux sur l'appartenance",
            "question": "<p>Le nombre $0,5$ appartient-il à l'ensemble $\\mathbb{D}$ des décimaux ?</p>",
            "options": [
              {
                "text": "Oui, car $0,5$ a un nombre fini de chiffres après la virgule",
                "isCorrect": true
              },
              {
                "text": "Non, car $0,5$ n'est pas un entier",
                "isCorrect": false
              },
              {
                "text": "On ne peut pas savoir",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Un nombre décimal est un nombre qui s'écrit avec un nombre <strong>fini</strong> de chiffres après la virgule. $0,5$ n'a qu'un seul chiffre après la virgule : c'est donc bien un décimal.</p>\n            <p>⚠️ Ne pas confondre \"décimal\" avec \"entier\" ! Un décimal peut avoir une virgule (ce n'est pas un synonyme de nombre à virgule comme on l'entend parfois familièrement : ici \"décimal\" est un terme mathématique précis incluant aussi les entiers).</p>\n          "
          },
          {
            "id": "ens_n3",
            "level": 2,
            "title": "Niveau 2 : Rationnel mais pas décimal",
            "question": "<p>Parmi les propositions suivantes, laquelle est correcte concernant $\\frac{1}{3}$ ?</p>",
            "options": [
              {
                "text": "$\\frac{1}{3} \\in \\mathbb{Q}$ mais $\\frac{1}{3} \\notin \\mathbb{D}$",
                "isCorrect": true
              },
              {
                "text": "$\\frac{1}{3} \\in \\mathbb{D}$ et $\\frac{1}{3} \\in \\mathbb{Q}$",
                "isCorrect": false
              },
              {
                "text": "$\\frac{1}{3} \\notin \\mathbb{Q}$ car ce n'est pas un entier",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>$\\frac{1}{3}$ est bien une fraction d'entiers ($1$ et $3$ sont des entiers, $3 \\neq 0$), donc par définition $\\frac{1}{3} \\in \\mathbb{Q}$.</p>\n            <p>Cependant, son écriture décimale est $0,3333...$, avec une infinité de chiffres $3$ après la virgule. Comme cette écriture n'est pas <em>finie</em>, $\\frac{1}{3} \\notin \\mathbb{D}$.</p>\n            <p>C'est l'exemple classique d'un nombre rationnel qui n'est pas décimal : $\\mathbb{D} \\subset \\mathbb{Q}$ mais $\\mathbb{D} \\neq \\mathbb{Q}$.</p>\n          "
          },
          {
            "id": "ens_n4",
            "level": 2,
            "title": "Niveau 2 : Utiliser les symboles ∈ et ⊂",
            "question": "<p>Compléter avec le bon symbole : $\\mathbb{N} \\, \\square \\, \\mathbb{Z}$ et $7 \\, \\square \\, \\mathbb{N}$.</p>",
            "options": [
              {
                "text": "$\\mathbb{N} \\subset \\mathbb{Z}$ et $7 \\in \\mathbb{N}$",
                "isCorrect": true
              },
              {
                "text": "$\\mathbb{N} \\in \\mathbb{Z}$ et $7 \\subset \\mathbb{N}$",
                "isCorrect": false
              },
              {
                "text": "$\\mathbb{N} \\subset \\mathbb{Z}$ et $7 \\subset \\mathbb{N}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>⚠️ Règle importante : $\\in$ relie un <strong>nombre</strong> à un <strong>ensemble</strong> (ex : $7 \\in \\mathbb{N}$), tandis que $\\subset$ relie deux <strong>ensembles</strong> entre eux (ex : $\\mathbb{N} \\subset \\mathbb{Z}$). On ne mélange jamais les deux !</p>\n            <p>$\\mathbb{N}$ est un ensemble et $\\mathbb{Z}$ aussi : on utilise donc $\\subset$ : $\\mathbb{N} \\subset \\mathbb{Z}$ (tout naturel est un relatif).</p>\n            <p>$7$ est un nombre et $\\mathbb{N}$ est un ensemble : on utilise donc $\\in$ : $7 \\in \\mathbb{N}$.</p>\n          "
          },
          {
            "id": "ens_n5",
            "level": 3,
            "title": "Niveau 3 : Reconnaître un irrationnel",
            "question": "<p>Le nombre $\\sqrt{2}$ appartient-il à $\\mathbb{Q}$ ?</p>",
            "options": [
              {
                "text": "Non, $\\sqrt{2}$ est irrationnel : $\\sqrt{2} \\in \\mathbb{R}$ mais $\\sqrt{2} \\notin \\mathbb{Q}$",
                "isCorrect": true
              },
              {
                "text": "Oui, car on peut écrire $\\sqrt{2} = \\frac{2}{\\sqrt{2}}$",
                "isCorrect": false
              },
              {
                "text": "Oui, tous les nombres réels sont rationnels",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>$\\sqrt{2}$ ne peut <strong>jamais</strong> s'écrire exactement sous la forme d'une fraction $\\frac{a}{b}$ avec $a, b$ entiers (ce résultat se démontre par l'absurde, c'est un grand classique des mathématiques depuis l'Antiquité).</p>\n            <p>Son écriture décimale $1,41421356...$ est infinie et ne se répète jamais de façon périodique.</p>\n            <p>⚠️ La proposition $\\sqrt{2} = \\frac{2}{\\sqrt{2}}$ est vraie mathématiquement, mais $\\frac{2}{\\sqrt{2}}$ n'est <strong>pas</strong> une fraction d'entiers (le dénominateur $\\sqrt{2}$ n'est pas un entier) : cela ne prouve donc pas que $\\sqrt{2} \\in \\mathbb{Q}$.</p>\n            <p>$\\sqrt{2}$ est donc un nombre réel ($\\sqrt{2} \\in \\mathbb{R}$) mais pas rationnel ($\\sqrt{2} \\notin \\mathbb{Q}$) : on dit qu'il est <strong>irrationnel</strong>.</p>\n          "
          },
          {
            "id": "ens_n6",
            "level": 3,
            "title": "Niveau 3 : Intersection et réunion d'ensembles",
            "question": "<p>On note $A = \\{-3 ; -1 ; 0 ; 2 ; 5\\}$ et $B = \\{-1 ; 0 ; 1 ; 2 ; 3\\}$. Que vaut $A \\cap B$ ?</p>",
            "options": [
              {
                "text": "$A \\cap B = \\{-1 ; 0 ; 2\\}$",
                "isCorrect": true
              },
              {
                "text": "$A \\cap B = \\{-3 ; -1 ; 0 ; 1 ; 2 ; 3 ; 5\\}$",
                "isCorrect": false
              },
              {
                "text": "$A \\cap B = \\{-3 ; 5\\}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>$A \\cap B$ (intersection) désigne les éléments qui appartiennent <strong>à la fois</strong> à $A$ <strong>et</strong> à $B$.</p>\n            <p>En comparant les deux listes : $-1$ est dans $A$ et dans $B$ ✓ ; $0$ est dans $A$ et dans $B$ ✓ ; $2$ est dans $A$ et dans $B$ ✓. Les autres éléments ($-3$, $5$ pour $A$ ; $1$, $3$ pour $B$) ne sont que dans un seul des deux ensembles.</p>\n            <p>Donc $A \\cap B = \\{-1 ; 0 ; 2\\}$.</p>\n            <p><em>Remarque :</em> la réunion $A \\cup B$ contiendrait tous les éléments des deux listes réunies (sans répéter ceux comptés deux fois) : $A \\cup B = \\{-3 ; -1 ; 0 ; 1 ; 2 ; 3 ; 5\\}$.</p>\n          "
          }
        ],
        "yearLevel": "2de"
      },
      {
        "id": "fractions",
        "title": "Chapitre 1 : Les Fractions",
        "icon": "🔢",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Les fractions sont le cauchemar de beaucoup d'élèves, mais elles sont pourtant indispensables en Première ! En Spécialité Mathématiques, on ne travaille presque plus avec des nombres décimaux (comme 0,33). On garde toujours les valeurs exactes sous forme de fractions simplifiées.</p>\n        \n        <div class=\"card-tip\">\n          <strong>Règle d'or :</strong> On ne peut additionner ou soustraire des fractions <em>que</em> si elles ont le <strong>même dénominateur</strong> (le nombre du bas). Pour la multiplication et la division, ce n'est pas nécessaire !\n        </div>\n\n        <h3>1. Addition et Soustraction</h3>\n        <p>Pour additionner ou soustraire deux fractions, on trouve un dénominateur commun :</p>\n        <div class=\"formula\">\n          <p>$$\\frac{a}{b} + \\frac{c}{d} = \\frac{a \\times d}{b \\times d} + \\frac{c \\times b}{d \\times b} = \\frac{ad + cb}{bd}$$</p>\n        </div>\n        <p><strong>Exemple concret :</strong> Calculons $A = \\frac{2}{3} + \\frac{5}{6}$.<br>\n        Ici, le dénominateur commun est $6$ (car $6 = 3 \\times 2$).<br>\n        $A = \\frac{2 \\times 2}{3 \\times 2} + \\frac{5}{6} = \\frac{4}{6} + \\frac{5}{6} = \\frac{4+5}{6} = \\frac{9}{6}$<br>\n        On simplifie ensuite en divisant le haut et le bas par $3$ : $A = \\frac{3}{2}$.</p>\n\n        <h3>2. Multiplication et Division</h3>\n        <p><strong>La multiplication</strong> est l'opération la plus simple : on multiplie les numérateurs entre eux et les dénominateurs entre eux.</p>\n        <div class=\"formula\">\n          <p>$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$</p>\n        </div>\n        <p><em>Astuce pédagogique :</em> Simplifie toujours avant de faire les grands calculs !</p>\n        <p><strong>La division</strong> consiste à multiplier la première fraction par l'inverse de la deuxième.</p>\n        <div class=\"formula\">\n          <p>$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> Diviser par $\\frac{3}{4}$, c'est multiplier par $\\frac{4}{3}$.</p>\n      ",
        "exercises": [
          {
            "id": "frac_n1",
            "level": 1,
            "title": "Niveau 1 : Addition de fractions",
            "question": "<p>Calculer l'expression suivante et donner le résultat sous forme de fraction simplifiée au maximum :</p><p>$$A = \\frac{7}{12} + \\frac{5}{8}$$</p>",
            "options": [
              {
                "text": "$A = \\frac{29}{24}$",
                "isCorrect": true
              },
              {
                "text": "$A = \\frac{12}{20}$",
                "isCorrect": false
              },
              {
                "text": "$A = \\frac{31}{24}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>Il faut trouver le plus petit dénominateur commun pour $12$ et $8$.<br>\n            Listons les multiples :<br>\n            - Multiples de $12$ : $12, 24, 36, 48...$<br>\n            - Multiples de $8$ : $8, 16, 24, 32...$<br>\n            Le plus petit dénominateur commun est donc <strong>24</strong>.</p>\n            <p>Mettons les fractions sur 24 :<br>\n            $\\frac{7}{12} = \\frac{7 \\times 2}{12 \\times 2} = \\frac{14}{24}$<br>\n            $\\frac{5}{8} = \\frac{5 \\times 3}{8 \\times 3} = \\frac{15}{24}$</p>\n            <p>Maintenant, on additionne :<br>\n            $A = \\frac{14}{24} + \\frac{15}{24} = \\frac{14 + 15}{24} = \\mathbf{\\frac{29}{24}}$ (fraction irréductible).</p>\n          "
          },
          {
            "id": "frac_n2",
            "level": 1,
            "title": "Niveau 1 : Multiplication de fractions",
            "question": "<p>Calculer et simplifier :</p><p>$$B = \\frac{15}{14} \\times \\frac{21}{10}$$</p>",
            "options": [
              {
                "text": "$B = \\frac{9}{4}$",
                "isCorrect": true
              },
              {
                "text": "$B = \\frac{315}{140}$",
                "isCorrect": false
              },
              {
                "text": "$B = \\frac{3}{2}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Plutôt que de calculer $15 \\times 21$, décomposons les nombres pour simplifier d'abord !<br>\n            - $15 = 3 \\times 5$<br>\n            - $21 = 3 \\times 7$<br>\n            - $14 = 2 \\times 7$<br>\n            - $10 = 2 \\times 5$</p>\n            <p>Écrivons le produit :<br>\n            $B = \\frac{15 \\times 21}{14 \\times 10} = \\frac{(3 \\times 5) \\times (3 \\times 7)}{(2 \\times 7) \\times (2 \\times 5)}$</p>\n            <p>Nous pouvons simplifier par $5$ en haut et en bas, et par $7$ en haut et en bas :<br>\n            $B = \\frac{3 \\times 3}{2 \\times 2} = \\mathbf{\\frac{9}{4}}$</p>\n          "
          },
          {
            "id": "frac_n3",
            "level": 2,
            "title": "Niveau 2 : Soustraction de fractions à dénominateurs multiples",
            "question": "<p>Calculer l'expression suivante :</p><p>$$C = \\frac{7}{6} - \\frac{3}{4}$$</p>",
            "options": [
              {
                "text": "$C = \\frac{5}{12}$",
                "isCorrect": true
              },
              {
                "text": "$C = \\frac{4}{2}$",
                "isCorrect": false
              },
              {
                "text": "$C = \\frac{2}{3}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>Dénominateur commun de $6$ et $4$ : $12$.</p>\n            <p>Mise au même dénominateur :<br>\n            $\\frac{7 \\times 2}{6 \\times 2} - \\frac{3 \\times 3}{4 \\times 3} = \\frac{14}{12} - \\frac{9}{12} = \\mathbf{\\frac{5}{12}}$</p>\n          "
          },
          {
            "id": "frac_n4",
            "level": 2,
            "title": "Niveau 2 : Priorités opératoires",
            "question": "<p>Calculer l'expression suivante :</p><p>$$D = \\frac{2}{3} - \\frac{5}{3} \\times \\frac{4}{15}$$</p>",
            "options": [
              {
                "text": "$D = \\frac{2}{9}$",
                "isCorrect": true
              },
              {
                "text": "$D = -\\frac{4}{9}$",
                "isCorrect": false
              },
              {
                "text": "$D = -\\frac{12}{15}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>⚠️ <strong>Attention à la priorité !</strong> La multiplication est prioritaire sur la soustraction.</p>\n            <p>Calculons le produit : $\\frac{5}{3} \\times \\frac{4}{15} = \\frac{5 \\times 4}{3 \\times 15}$</p>\n            <p>Simplifions en remarquant que $15 = 5 \\times 3$ :<br>\n            $\\frac{5 \\times 4}{3 \\times 5 \\times 3} = \\frac{4}{3 \\times 3} = \\frac{4}{9}$</p>\n            <p>Nous pouvons maintenant réécrire l'expression initiale :<br>\n            $D = \\frac{2}{3} - \\frac{4}{9}$</p>\n            <p>Dénominateur commun $9$ :<br>\n            $D = \\frac{6}{9} - \\frac{4}{9} = \\mathbf{\\frac{2}{9}}$</p>\n          "
          },
          {
            "id": "frac_n5",
            "level": 3,
            "title": "Niveau 3 : Division de fractions complexes",
            "question": "<p>Calculer l'expression :</p><p>$$E = \\frac{\\frac{3}{4} + \\frac{1}{2}}{\\frac{5}{8}}$$</p>",
            "options": [
              {
                "text": "$E = 2$",
                "isCorrect": true
              },
              {
                "text": "$E = \\frac{25}{32}$",
                "isCorrect": false
              },
              {
                "text": "$E = \\frac{1}{2}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>Commençons par calculer le numérateur : $\\frac{3}{4} + \\frac{1}{2} = \\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$.</p>\n            <p>L'expression devient donc $\\frac{\\frac{5}{4}}{\\frac{5}{8}}$. Diviser par une fraction revient à multiplier par son inverse.</p>\n            <p>$\\frac{5}{4} \\times \\frac{8}{5} = \\frac{8}{4} = \\mathbf{2}$.</p>\n          "
          },
          {
            "id": "frac_n6",
            "level": 3,
            "title": "Niveau 3 : Calcul littéral fractionnaire",
            "question": "<p>Exprimer sous la forme d'une seule fraction simplifiée pour $x \\neq -1$ et $x \\neq 1$ :</p><p>$$F(x) = \\frac{x}{x+1} - \\frac{1}{x-1}$$</p>",
            "options": [
              {
                "text": "$F(x) = \\frac{x^2 - 2x - 1}{x^2 - 1}$",
                "isCorrect": true
              },
              {
                "text": "$F(x) = \\frac{x^2 - x - 1}{x^2 - 1}$",
                "isCorrect": false
              },
              {
                "text": "$F(x) = \\frac{x - 1}{x^2 - 1}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>Le dénominateur commun est $(x+1)(x-1) = x^2 - 1$.</p>\n            <p>Mise au même dénominateur :<br>\n            $\\frac{x(x-1)}{(x+1)(x-1)} - \\frac{1(x+1)}{(x-1)(x+1)}$</p>\n            <p>Soustraction :<br>\n            $F(x) = \\frac{x^2 - x - (x + 1)}{x^2 - 1}$</p>\n            <p>⚠️ Attention au signe moins :<br>\n            $F(x) = \\frac{x^2 - 2x - 1}{x^2 - 1}$</p>\n          "
          }
        ],
        "yearLevel": "4e→3e"
      },
      {
        "id": "puissances",
        "title": "Chapitre 2 : Les Puissances",
        "icon": "⚡",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Les puissances permettent d'écrire de façon courte une multiplication d'un même nombre par lui-même, et de manipuler aussi bien de très grands que de très petits nombres. En Première, elles reviennent partout : en calcul, en notation scientifique et dans l'étude des fonctions.</p>\n\n        <div class=\"card-tip\">\n          <strong>Définition :</strong> pour un nombre $a$ et un entier $n \\ge 1$, $a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ facteurs}}$. Par convention, $a^0 = 1$ (pour $a \\neq 0$) et $a^1 = a$.\n        </div>\n\n        <h3>1. Les cinq règles fondamentales</h3>\n        <p>Tout le calcul sur les puissances repose sur ces cinq règles. Il faut les connaître par cœur.</p>\n        <div class=\"formula\">\n          <p>$$a^n \\times a^p = a^{n+p} \\qquad \\frac{a^n}{a^p} = a^{n-p} \\qquad (a^n)^p = a^{n \\times p}$$</p>\n          <p>$$(a \\times b)^n = a^n \\times b^n \\qquad a^{-n} = \\frac{1}{a^n}$$</p>\n        </div>\n        <p><strong>Exemple concret :</strong> $2^3 \\times 2^5 = 2^{3+5} = 2^8$. On <em>ajoute</em> les exposants quand on <em>multiplie</em> deux puissances d'un même nombre — on ne multiplie surtout pas les exposants !</p>\n\n        <div class=\"card-warning\">\n          <strong>Piège classique :</strong> $a^n \\times a^p$ n'est <strong>pas</strong> $a^{n \\times p}$. On additionne les exposants ($a^{n+p}$). La multiplication des exposants n'apparaît que pour une puissance de puissance : $(a^n)^p = a^{n\\times p}$.\n        </div>\n\n        <h3>2. Le signe d'une puissance</h3>\n        <ul>\n          <li>Une puissance d'un nombre <strong>positif</strong> est toujours positive.</li>\n          <li>Pour un nombre négatif : $(-a)^n$ est <strong>positif si $n$ est pair</strong>, <strong>négatif si $n$ est impair</strong>. Exemple : $(-2)^4 = 16$ mais $(-2)^3 = -8$.</li>\n        </ul>\n        <div class=\"card-warning\">\n          <strong>Attention aux parenthèses :</strong> $(-2)^4 = 16$ (on élève $-2$ à la puissance 4), mais $-2^4 = -(2^4) = -16$ (on élève seulement $2$, puis on prend l'opposé). Les parenthèses changent tout !\n        </div>\n\n        <h3>3. La notation scientifique</h3>\n        <p>Tout nombre peut s'écrire sous la forme $a \\times 10^n$ où $1 \\le a < 10$ (un seul chiffre non nul avant la virgule) et $n$ est un entier relatif.</p>\n        <div class=\"formula\">\n          <p>$$48\\,500 = 4{,}85 \\times 10^4 \\qquad 0{,}00037 = 3{,}7 \\times 10^{-4}$$</p>\n        </div>\n        <p><strong>Astuce :</strong> l'exposant de $10$ compte de combien de rangs on a déplacé la virgule. Vers la gauche → exposant positif ; vers la droite → exposant négatif.</p>\n      ",
        "exercises": [
          {
            "id": "puis_n1",
            "level": 1,
            "title": "Niveau 1 : Produit et quotient",
            "question": "<p>Simplifier l'expression $A$ :</p><p>$$A = \\frac{2^3 \\times 2^5}{2^4}$$</p>",
            "options": [
              {
                "text": "$A = 2^4$",
                "isCorrect": true
              },
              {
                "text": "$A = 2^2$",
                "isCorrect": false
              },
              {
                "text": "$A = 2^8$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>On applique la règle du produit au numérateur : $2^3 \\times 2^5 = 2^8$.</p>\n            <p>Puis la règle du quotient : $A = \\frac{2^8}{2^4} = 2^{8-4} = \\mathbf{2^4}$ (qui vaut 16).</p>\n          "
          },
          {
            "id": "puis_n2",
            "level": 1,
            "title": "Niveau 1 : Écriture scientifique",
            "question": "<p>Donner l'écriture scientifique de $B$ :</p><p>$$B = 0,000034 \\times 10^7$$</p>",
            "options": [
              {
                "text": "$B = 3,4 \\times 10^2$",
                "isCorrect": true
              },
              {
                "text": "$B = 34 \\times 10^1$",
                "isCorrect": false
              },
              {
                "text": "$B = 3,4 \\times 10^3$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>$0,000034 = 3,4 \\times 10^{-5}$</p>\n            <p>$B = (3,4 \\times 10^{-5}) \\times 10^7 = 3,4 \\times 10^{-5+7} = \\mathbf{3,4 \\times 10^2}$</p>\n          "
          },
          {
            "id": "puis_n3",
            "level": 2,
            "title": "Niveau 2 : Puissances de 10",
            "question": "<p>Simplifier au maximum sous la forme d'une seule puissance de 10 :</p><p>$$C = \\frac{10^{-3} \\times (10^2)^4}{10^5}$$</p>",
            "options": [
              {
                "text": "$C = 10^0$",
                "isCorrect": true
              },
              {
                "text": "$C = 10^{-5}$",
                "isCorrect": false
              },
              {
                "text": "$C = 10^{-2}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>Numérateur : $(10^2)^4 = 10^8$. Donc $10^{-3} \\times 10^8 = 10^5$.</p>\n            <p>Quotient : $C = \\frac{10^5}{10^5} = 10^{5-5} = 10^0 = 1$.</p>\n          "
          },
          {
            "id": "puis_n4",
            "level": 2,
            "title": "Niveau 2 : Règle des signes et puissances",
            "question": "<p>Calculer $D = (-2)^4 - 2^4$.</p>",
            "options": [
              {
                "text": "$D = 0$",
                "isCorrect": true
              },
              {
                "text": "$D = 32$",
                "isCorrect": false
              },
              {
                "text": "$D = -32$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2) = 16$. La puissance paire enlève le signe négatif.</p>\n            <p>$2^4 = 16$. Le signe moins devant n'est pas dans la puissance.</p>\n            <p>$D = 16 - 16 = 0$.</p>\n          "
          },
          {
            "id": "puis_n5",
            "level": 3,
            "title": "Niveau 3 : Calcul algébrique",
            "question": "<p>Simplifier l'expression suivante pour tous réels $x, y$ non nuls :</p><p>$$E = \\frac{x^3 \\times (y^{-2})^2}{x^{-1} \\times y^3}$$</p>",
            "options": [
              {
                "text": "$E = x^4 y^{-7}$",
                "isCorrect": true
              },
              {
                "text": "$E = x^2 y^{-1}$",
                "isCorrect": false
              },
              {
                "text": "$E = x^4 y^{-1}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>Étape 1 : $(y^{-2})^2 = y^{-4}$.</p>\n            <p>Étape 2 : Quotient des $x$ : $\\frac{x^3}{x^{-1}} = x^{3 - (-1)} = x^4$.</p>\n            <p>Étape 3 : Quotient des $y$ : $\\frac{y^{-4}}{y^3} = y^{-4 - 3} = y^{-7}$.</p>\n            <p>Résultat : $E = x^4 y^{-7}$.</p>\n          "
          },
          {
            "id": "puis_n6",
            "level": 3,
            "title": "Niveau 3 : Expression littérale avec exposants négatifs",
            "question": "<p>Écrire sous la forme $a^n$ avec $n$ entier : $$F = \\frac{(a^2)^3 \\times a^{-4}}{a^{-3}}$$ (pour $a \\neq 0$).</p>",
            "options": [
              {
                "text": "$F = a^{5}$",
                "isCorrect": true
              },
              {
                "text": "$F = a^{2}$",
                "isCorrect": false
              },
              {
                "text": "$F = a^{-1}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 3)</h4>\n            <p>On applique les règles dans l'ordre. Au numérateur : $(a^2)^3 = a^{6}$ (puissance de puissance : on multiplie les exposants), puis $a^6 \\times a^{-4} = a^{6-4} = a^{2}$.</p>\n            <p>Il reste $\\dfrac{a^2}{a^{-3}} = a^{2-(-3)} = a^{2+3} = a^{5}$.</p>\n            <p>Donc $F = a^{5}$.</p>\n          "
          }
        ],
        "yearLevel": "4e→3e"
      },
      {
        "id": "racines_valeur_absolue",
        "title": "Chapitre 5 : Racines carrées et valeur absolue",
        "icon": "√",
        "courseHtml": "\n        <h3>Partie A — Les racines carrées</h3>\n\n        <h4>1. Définition</h4>\n        <p>La racine carrée d'un nombre positif $a$, notée $\\sqrt{a}$, est le nombre positif dont le carré vaut $a$. Par exemple $\\sqrt{9} = 3$ car $3^2 = 9$.</p>\n        <div class=\"card-warning\">\n          <strong>Attention :</strong> $\\sqrt{a}$ n'existe que si $a \\geqslant 0$. Et $\\sqrt{a}$ est <strong>toujours positif</strong> (ou nul), même si $a$ a deux racines carrées possibles en théorie ($3$ et $-3$ sont tous deux solutions de $x^2=9$, mais $\\sqrt{9}$ désigne uniquement la solution positive $3$).\n        </div>\n\n        <h4>2. Les deux règles de calcul fondamentales</h4>\n        <div class=\"formula\">\n          <p>$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad \\text{et} \\qquad \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\quad (a \\geqslant 0, \\, b > 0)$$</p>\n        </div>\n        <div class=\"card-warning\">\n          <strong>Piège très fréquent :</strong> $\\sqrt{a+b} \\neq \\sqrt{a} + \\sqrt{b}$ ! Il n'existe <strong>aucune</strong> règle pour distribuer une racine sur une somme. Exemple : $\\sqrt{9+16} = \\sqrt{25} = 5$, alors que $\\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Ce sont deux résultats différents !\n        </div>\n\n        <h4>3. Simplifier une racine carrée</h4>\n        <p>Pour simplifier $\\sqrt{75}$, on cherche le plus grand <strong>carré parfait</strong> (1, 4, 9, 16, 25, 36, 49...) qui divise $75$.</p>\n        <p>$75 = 25 \\times 3$, et $25$ est un carré parfait ($5^2=25$). Donc :</p>\n        <p>$$\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}$$</p>\n\n        <h4>4. Addition et soustraction de racines</h4>\n        <p>On ne peut additionner que des racines <strong>identiques</strong> (comme pour additionner $3x + 2x = 5x$ en calcul littéral) :</p>\n        <p><strong>Exemple :</strong> $\\sqrt{12} + \\sqrt{27} = \\sqrt{4 \\times 3} + \\sqrt{9 \\times 3} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$</p>\n\n        <h4>5. Rationaliser un dénominateur</h4>\n        <p>On évite de laisser une racine carrée au dénominateur. Pour la faire disparaître, on multiplie en haut et en bas par cette même racine :</p>\n        <p>$$\\frac{1}{\\sqrt{5}} = \\frac{1 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{\\sqrt{5}}{5}$$</p>\n\n        <h3>Partie B — La valeur absolue</h3>\n\n        <h4>1. Définition</h4>\n        <p>La valeur absolue d'un nombre $x$, notée $|x|$, représente sa <strong>distance à zéro</strong> sur la droite numérique. Elle est toujours positive ou nulle.</p>\n        <div class=\"formula\">\n          <p>$$|x| = x \\text{ si } x \\geqslant 0 \\qquad \\qquad |x| = -x \\text{ si } x < 0$$</p>\n        </div>\n        <p><strong>Exemples :</strong> $|7| = 7$ (car $7 \\geqslant 0$) et $|-7| = -(-7) = 7$ (car $-7<0$).</p>\n\n        <div class=\"card-tip\">\n          <strong>Astuce :</strong> $|x|$ \"efface\" toujours le signe négatif. Plus généralement, $|x-a|$ représente la <strong>distance entre $x$ et $a$</strong> sur la droite numérique.\n        </div>\n\n        <h4>2. Résoudre une équation avec valeur absolue</h4>\n        <p>L'équation $|x-a| = r$ (avec $r > 0$) se traduit par : \"la distance entre $x$ et $a$ vaut $r$\". Cela donne <strong>deux solutions</strong> :</p>\n        <div class=\"formula\">\n          <p>$$x - a = r \\quad \\text{ou} \\quad x - a = -r$$</p>\n        </div>\n        <p><strong>Exemple :</strong> Résoudre $|x-3| = 5$.<br>\n        Cela signifie $x-3=5$ ou $x-3=-5$, donc $x=8$ ou $x=-2$.</p>\n      ",
        "exercises": [
          {
            "id": "rac_n1",
            "level": 1,
            "title": "Niveau 1 : Simplifier une racine carrée",
            "question": "<p>Simplifier $\\sqrt{75}$.</p>",
            "options": [
              {
                "text": "$5\\sqrt{3}$",
                "isCorrect": true
              },
              {
                "text": "$25\\sqrt{3}$",
                "isCorrect": false
              },
              {
                "text": "$3\\sqrt{5}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>On cherche le plus grand carré parfait qui divise $75$. On remarque que $75 = 25 \\times 3$, et $25$ est un carré parfait ($5^2=25$).</p>\n            <p>$$\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}$$</p>\n          "
          },
          {
            "id": "rac_n2",
            "level": 1,
            "title": "Niveau 1 : Calculer une valeur absolue",
            "question": "<p>Calculer $|-7|$ et $|3|$.</p>",
            "options": [
              {
                "text": "$|-7| = 7$ et $|3| = 3$",
                "isCorrect": true
              },
              {
                "text": "$|-7| = -7$ et $|3| = 3$",
                "isCorrect": false
              },
              {
                "text": "$|-7| = 7$ et $|3| = -3$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>La valeur absolue transforme tout nombre négatif en son opposé positif, et laisse inchangé un nombre déjà positif.</p>\n            <p>$-7 < 0$, donc $|-7| = -(-7) = 7$.</p>\n            <p>$3 \\geqslant 0$, donc $|3| = 3$.</p>\n          "
          },
          {
            "id": "rac_n3",
            "level": 2,
            "title": "Niveau 2 : Additionner des racines carrées",
            "question": "<p>Simplifier $\\sqrt{12} + \\sqrt{27}$.</p>",
            "options": [
              {
                "text": "$5\\sqrt{3}$",
                "isCorrect": true
              },
              {
                "text": "$\\sqrt{39}$",
                "isCorrect": false
              },
              {
                "text": "$2\\sqrt{3} + 3\\sqrt{3} = 6\\sqrt{6}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On simplifie chaque racine séparément avant d'additionner :</p>\n            <p>$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$</p>\n            <p>$\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$</p>\n            <p>Les deux racines obtenues sont identiques ($\\sqrt{3}$), on peut donc les additionner comme des termes en $x$ :</p>\n            <p>$$2\\sqrt{3} + 3\\sqrt{3} = (2+3)\\sqrt{3} = 5\\sqrt{3}$$</p>\n            <p>⚠️ $\\sqrt{12}+\\sqrt{27}$ n'est <strong>pas</strong> égal à $\\sqrt{12+27}=\\sqrt{39}$ : il n'existe pas de règle pour additionner sous une même racine.</p>\n          "
          },
          {
            "id": "rac_n4",
            "level": 2,
            "title": "Niveau 2 : Rationaliser un dénominateur",
            "question": "<p>Écrire $\\frac{1}{\\sqrt{5}}$ sans racine carrée au dénominateur.</p>",
            "options": [
              {
                "text": "$\\frac{\\sqrt{5}}{5}$",
                "isCorrect": true
              },
              {
                "text": "$\\frac{1}{5}$",
                "isCorrect": false
              },
              {
                "text": "$\\sqrt{5}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>On multiplie le numérateur et le dénominateur par $\\sqrt{5}$ (ce qui ne change pas la valeur de la fraction, puisqu'on multiplie par $\\frac{\\sqrt{5}}{\\sqrt{5}} = 1$) :</p>\n            <p>$$\\frac{1}{\\sqrt{5}} = \\frac{1 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{\\sqrt{5}}{5}$$</p>\n            <p>On utilise le fait que $\\sqrt{5} \\times \\sqrt{5} = 5$ (la définition même de la racine carrée).</p>\n          "
          },
          {
            "id": "rac_n5",
            "level": 3,
            "title": "Niveau 3 : Résoudre une équation avec valeur absolue",
            "question": "<p>Résoudre l'équation $|x-3| = 5$.</p>",
            "options": [
              {
                "text": "$x = 8$ ou $x = -2$",
                "isCorrect": true
              },
              {
                "text": "$x = 8$ uniquement",
                "isCorrect": false
              },
              {
                "text": "$x = 2$ ou $x = -8$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>$|x-3|=5$ signifie que la distance entre $x$ et $3$ vaut $5$. Cela donne deux cas possibles :</p>\n            <p><strong>Cas 1 :</strong> $x - 3 = 5$, donc $x = 8$.</p>\n            <p><strong>Cas 2 :</strong> $x - 3 = -5$, donc $x = -2$.</p>\n            <p>Les deux solutions sont $x=8$ et $x=-2$.</p>\n            <p><em>Vérification :</em> $|8-3|=|5|=5$ ✓ et $|-2-3|=|-5|=5$ ✓.</p>\n          "
          },
          {
            "id": "rac_n6",
            "level": 3,
            "title": "Niveau 3 : Simplifier une expression combinant plusieurs racines",
            "question": "<p>Simplifier $\\sqrt{50} - \\sqrt{8} + \\sqrt{18}$.</p>",
            "options": [
              {
                "text": "$6\\sqrt{2}$",
                "isCorrect": true
              },
              {
                "text": "$\\sqrt{60}$",
                "isCorrect": false
              },
              {
                "text": "$4\\sqrt{2}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>On simplifie chaque racine séparément en cherchant le plus grand carré parfait diviseur :</p>\n            <p>$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$</p>\n            <p>$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$</p>\n            <p>$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$</p>\n            <p>Toutes les racines obtenues sont identiques ($\\sqrt{2}$), on peut donc combiner les coefficients :</p>\n            <p>$$5\\sqrt{2} - 2\\sqrt{2} + 3\\sqrt{2} = (5-2+3)\\sqrt{2} = 6\\sqrt{2}$$</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "calcul_litteral",
        "title": "Chapitre 3 : Calcul Littéral",
        "icon": "🧬",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Le calcul littéral, c'est calculer avec des lettres. Il est indispensable pour résoudre des équations, manipuler des fonctions et démontrer en Première. Deux gestes inverses reviennent sans cesse : <strong>développer</strong> (enlever les parenthèses) et <strong>factoriser</strong> (faire apparaître un produit).</p>\n\n        <h3>1. Développer avec la distributivité</h3>\n        <p>Développer, c'est transformer un produit en somme en distribuant la multiplication.</p>\n        <div class=\"formula\">\n          <p>$$k(a+b) = ka + kb \\qquad (a+b)(c+d) = ac + ad + bc + bd$$</p>\n        </div>\n        <p><strong>Exemple :</strong> $3x(2x-5) = 3x\\times 2x - 3x \\times 5 = 6x^2 - 15x$.</p>\n\n        <h3>2. Les trois identités remarquables</h3>\n        <p>Ce sont des développements à connaître par cœur : ils font gagner un temps précieux dans les deux sens.</p>\n        <div class=\"formula\">\n          <p>$$(a+b)^2 = a^2 + 2ab + b^2$$</p>\n          <p>$$(a-b)^2 = a^2 - 2ab + b^2$$</p>\n          <p>$$(a+b)(a-b) = a^2 - b^2$$</p>\n        </div>\n        <p><strong>Exemple :</strong> $(3x-2)^2 = (3x)^2 - 2\\times 3x \\times 2 + 2^2 = 9x^2 - 12x + 4$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Erreur très fréquente :</strong> $(a+b)^2 \\neq a^2 + b^2$ ! Il ne faut jamais oublier le double produit $2ab$ au milieu.\n        </div>\n\n        <h3>3. Factoriser</h3>\n        <p>Factoriser, c'est l'opération inverse de développer : on transforme une somme en produit. C'est indispensable pour résoudre les équations.</p>\n        <p><strong>Méthode 1 — facteur commun :</strong> on repère un facteur présent dans chaque terme et on le met en facteur.</p>\n        <div class=\"formula\">\n          <p>$$ka + kb = k(a+b)$$</p>\n        </div>\n        <p>Exemple : $(2x-3)(x+5) - (2x-3)^2$ : le facteur commun est $(2x-3)$, donc l'expression vaut $(2x-3)\\big[(x+5)-(2x-3)\\big] = (2x-3)(-x+8)$.</p>\n        <p><strong>Méthode 2 — identité remarquable $a^2-b^2$ :</strong> une différence de deux carrés se factorise toujours.</p>\n        <div class=\"formula\">\n          <p>$$a^2 - b^2 = (a+b)(a-b)$$</p>\n        </div>\n        <p>Exemple : $(x+2)^2 - 16 = (x+2)^2 - 4^2 = \\big[(x+2)+4\\big]\\big[(x+2)-4\\big] = (x+6)(x-2)$.</p>\n\n        <div class=\"card-tip\">\n          <strong>Réflexe :</strong> pour factoriser, cherche d'abord un facteur commun ; si tu n'en vois pas, regarde si tu as une différence de deux carrés ($\\dots - \\dots$ où chaque morceau est un carré).\n        </div>\n      ",
        "exercises": [
          {
            "id": "lit_n1",
            "level": 1,
            "title": "Niveau 1 : Développer avec distributivité",
            "question": "<p>Développer et réduire :</p><p>$$A(x) = 3x(2x - 5) - 4x^2$$</p>",
            "options": [
              {
                "text": "$A(x) = 2x^2 - 15x$",
                "isCorrect": true
              },
              {
                "text": "$A(x) = 6x^2 - 15x$",
                "isCorrect": false
              },
              {
                "text": "$A(x) = 2x^2 - 5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$3x(2x - 5) = 6x^2 - 15x$</p>\n            <p>$A(x) = 6x^2 - 15x - 4x^2 = 2x^2 - 15x$</p>\n          "
          },
          {
            "id": "lit_n2",
            "level": 1,
            "title": "Niveau 1 : Identités remarquables",
            "question": "<p>Développer et réduire :</p><p>$$B(x) = (3x - 2)^2 - (2x + 1)(2x - 1)$$</p>",
            "options": [
              {
                "text": "$B(x) = 5x^2 - 12x + 5$",
                "isCorrect": true
              },
              {
                "text": "$B(x) = 5x^2 - 12x + 3$",
                "isCorrect": false
              },
              {
                "text": "$B(x) = 9x^2 - 12x + 4$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>$(3x - 2)^2 = 9x^2 - 12x + 4$</p>\n            <p>$(2x + 1)(2x - 1) = 4x^2 - 1$</p>\n            <p>$B(x) = (9x^2 - 12x + 4) - (4x^2 - 1) = 5x^2 - 12x + 5$</p>\n          "
          },
          {
            "id": "lit_n3",
            "level": 2,
            "title": "Niveau 2 : Factorisation",
            "question": "<p>Factoriser l'expression :</p><p>$$C(x) = (2x - 3)(x + 5) - (2x - 3)^2$$</p>",
            "options": [
              {
                "text": "$C(x) = (2x - 3)(-x + 8)$",
                "isCorrect": true
              },
              {
                "text": "$C(x) = (2x - 3)(x + 8)$",
                "isCorrect": false
              },
              {
                "text": "$C(x) = (2x - 3)(8 - x)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>Facteur commun $(2x - 3)$ :<br>\n            $C(x) = (2x - 3) [ (x + 5) - (2x - 3) ]$</p>\n            <p>$C(x) = (2x - 3) [ x + 5 - 2x + 3 ] = (2x - 3)(-x + 8)$</p>\n          "
          },
          {
            "id": "lit_n4",
            "level": 2,
            "title": "Niveau 2 : Factorisation avec a² - b²",
            "question": "<p>Factoriser l'expression :</p><p>$$D(x) = (x+2)^2 - 16$$</p>",
            "options": [
              {
                "text": "$D(x) = (x - 2)(x + 6)$",
                "isCorrect": true
              },
              {
                "text": "$D(x) = (x + 18)(x - 14)$",
                "isCorrect": false
              },
              {
                "text": "$D(x) = (x + 4)(x - 4)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>On remarque la forme $a^2 - b^2 = (a-b)(a+b)$ avec $a = (x+2)$ et $b = 4$.</p>\n            <p>$D(x) = [ (x+2) - 4 ] [ (x+2) + 4 ] = (x - 2)(x + 6)$.</p>\n          "
          },
          {
            "id": "lit_n5",
            "level": 3,
            "title": "Niveau 3 : Factorisation complexe",
            "question": "<p>Factoriser l'expression $E(x)$ :</p><p>$$E(x) = 9x^2 - 12x + 4 - (3x - 2)(x + 4)$$</p>",
            "options": [
              {
                "text": "$E(x) = (3x - 2)(2x - 6)$",
                "isCorrect": true
              },
              {
                "text": "$E(x) = (3x - 2)(2x + 2)$",
                "isCorrect": false
              },
              {
                "text": "$E(x) = (3x - 2)(4x + 2)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>$9x^2 - 12x + 4 = (3x - 2)^2$</p>\n            <p>$E(x) = (3x - 2)^2 - (3x - 2)(x + 4)$</p>\n            <p>$E(x) = (3x - 2) [ (3x - 2) - (x + 4) ] = (3x - 2)(2x - 6)$</p>\n          "
          },
          {
            "id": "lit_n6",
            "level": 3,
            "title": "Niveau 3 : Factoriser après reconnaissance d'un carré",
            "question": "<p>Factoriser : $$F(x) = (x+1)^2 - (2x-3)^2$$</p>",
            "options": [
              {
                "text": "$F(x) = (3x-2)(-x+4)$",
                "isCorrect": true
              },
              {
                "text": "$F(x) = (x+1-2x-3)(x+1+2x-3)$",
                "isCorrect": false
              },
              {
                "text": "On ne peut pas factoriser",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 3)</h4>\n            <p>On reconnaît une différence de deux carrés $A^2 - B^2 = (A+B)(A-B)$, avec $A = x+1$ et $B = 2x-3$.</p>\n            <p>$A + B = (x+1)+(2x-3) = 3x - 2$.</p>\n            <p>$A - B = (x+1)-(2x-3) = x + 1 - 2x + 3 = -x + 4$. (Attention au signe : on soustrait <em>tout</em> $B$.)</p>\n            <p>Donc $F(x) = (3x-2)(-x+4)$.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "equations_inequations",
        "title": "Chapitre 4 : Équations & Inéquations",
        "icon": "⚖️",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Résoudre une équation, c'est trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie. Résoudre une inéquation, c'est trouver toutes les valeurs qui rendent l'inégalité vraie : la réponse est alors un <strong>intervalle</strong> de solutions.</p>\n\n        <h3>1. Équation du premier degré</h3>\n        <p>On isole l'inconnue $x$ en regroupant les termes en $x$ d'un côté et les nombres de l'autre.</p>\n        <p><strong>Exemple :</strong> $5x - 7 = 2x + 5 \\Rightarrow 5x - 2x = 5 + 7 \\Rightarrow 3x = 12 \\Rightarrow x = 4$.</p>\n\n        <h3>2. L'équation produit nul</h3>\n        <p>C'est l'outil clé dès que le degré dépasse 1. Il repose sur une règle simple :</p>\n        <div class=\"card-tip\">\n          <strong>Règle du produit nul :</strong> un produit de facteurs est nul si et seulement si <strong>au moins un</strong> de ses facteurs est nul. $A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$.\n        </div>\n        <p><strong>Exemple :</strong> $(2x-5)(3x+9) = 0$ donne $2x-5 = 0$ ou $3x+9 = 0$, c'est-à-dire $x = \\dfrac{5}{2}$ ou $x = -3$.</p>\n\n        <h3>3. Équations du type $x^2 = k$</h3>\n        <ul>\n          <li>Si $k > 0$ : deux solutions, $x = \\sqrt{k}$ ou $x = -\\sqrt{k}$.</li>\n          <li>Si $k = 0$ : une seule solution, $x = 0$.</li>\n          <li>Si $k < 0$ : aucune solution (un carré n'est jamais négatif).</li>\n        </ul>\n        <p><strong>Exemple :</strong> $x^2 = 16 \\Rightarrow x = 4$ ou $x = -4$. Ne pas oublier la solution négative !</p>\n\n        <h3>4. Les inéquations</h3>\n        <p>On résout une inéquation presque comme une équation, avec UNE règle supplémentaire fondamentale :</p>\n        <div class=\"card-warning\">\n          <strong>Règle d'or des inéquations :</strong> si on multiplie ou si on divise les deux membres par un nombre <strong>négatif</strong>, on <strong>change le sens</strong> de l'inégalité ($\\le$ devient $\\ge$, et inversement).\n        </div>\n        <p><strong>Exemple :</strong> $-2x + 5 \\ge 7x - 4 \\Rightarrow -2x - 7x \\ge -4 - 5 \\Rightarrow -9x \\ge -9$. On divise par $-9$ (négatif), donc on inverse : $x \\le 1$. Solutions : $]-\\infty\\,;\\,1]$.</p>\n\n        <div class=\"card-tip\">\n          <strong>Astuce de présentation :</strong> les solutions d'une inéquation se donnent toujours sous forme d'intervalle, et on peut les visualiser sur une droite graduée.\n        </div>\n      ",
        "exercises": [
          {
            "id": "eq_n1",
            "level": 1,
            "title": "Niveau 1 : Équation du premier degré",
            "question": "<p>Résoudre l'équation :</p><p>$$5x - 7 = 2x + 5$$</p>",
            "options": [
              {
                "text": "$x = 4$",
                "isCorrect": true
              },
              {
                "text": "$x = -4$",
                "isCorrect": false
              },
              {
                "text": "$x = 3$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>On regroupe les $x$ : $5x - 2x = 5 + 7 \\implies 3x = 12 \\implies x = 4$.</p>\n          "
          },
          {
            "id": "eq_n2",
            "level": 1,
            "title": "Niveau 1 : Équation produit nul",
            "question": "<p>Résoudre dans $\\mathbb{R}$ :</p><p>$$(2x - 5)(3x + 9) = 0$$</p>",
            "options": [
              {
                "text": "$S = \\{ -3 ; \\frac{5}{2} \\}$",
                "isCorrect": true
              },
              {
                "text": "$S = \\{ 3 ; -\\frac{5}{2} \\}$",
                "isCorrect": false
              },
              {
                "text": "$S = \\{ \\frac{5}{2} ; \\frac{9}{3} \\}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>$2x - 5 = 0 \\implies x = \\frac{5}{2}$</p>\n            <p>$3x + 9 = 0 \\implies x = -3$</p>\n          "
          },
          {
            "id": "eq_n3",
            "level": 2,
            "title": "Niveau 2 : Inéquations linéaires",
            "question": "<p>Résoudre dans $\\mathbb{R}$ :</p><p>$$-2x + 5 \\ge 7x - 4$$</p>",
            "options": [
              {
                "text": "$S = ]-\\infty ; 1]$",
                "isCorrect": true
              },
              {
                "text": "$S = [1 ; +\\infty[$",
                "isCorrect": false
              },
              {
                "text": "$S = ]-\\infty ; -1]$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>$-2x - 7x \\ge -4 - 5$</p>\n            <p>$-9x \\ge -9$</p>\n            <p>Division par $-9$ (négatif), on inverse : $x \\le 1$.</p>\n          "
          },
          {
            "id": "eq_n4",
            "level": 2,
            "title": "Niveau 2 : Équation du second degré simple",
            "question": "<p>Résoudre dans $\\mathbb{R}$ :</p><p>$$x^2 = 16$$</p>",
            "options": [
              {
                "text": "$S = \\{ -4 ; 4 \\}$",
                "isCorrect": true
              },
              {
                "text": "$S = \\{ 4 \\}$",
                "isCorrect": false
              },
              {
                "text": "$S = \\{ 8 \\}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>L'équation $x^2 = a$ a deux solutions si $a > 0$ : $\\sqrt{a}$ et $-\\sqrt{a}$.</p>\n            <p>Ici $S = \\{ -4 ; 4 \\}$.</p>\n          "
          },
          {
            "id": "eq_n5",
            "level": 3,
            "title": "Niveau 3 : Inéquation quotient",
            "question": "<p>Résoudre dans $\\mathbb{R}$ :</p><p>$$\\frac{2x - 1}{x + 3} \\le 1$$</p>",
            "options": [
              {
                "text": "$S = ]-3 ; 4]$",
                "isCorrect": true
              },
              {
                "text": "$S = [-3 ; 4]$",
                "isCorrect": false
              },
              {
                "text": "$S = ]-\\infty ; -3[ \\cup [4 ; +\\infty[$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>On regroupe à gauche : $\\frac{2x - 1}{x + 3} - 1 \\le 0$</p>\n            <p>Mise au même dénominateur : $\\frac{x - 4}{x + 3} \\le 0$</p>\n            <p>Tableau de signes avec une valeur interdite en $-3$ et annulation en $4$.</p>\n            <p>L'expression est négative entre $-3$ (exclu) et $4$ (inclus).</p>\n          "
          },
          {
            "id": "eq_n6",
            "level": 3,
            "title": "Niveau 3 : Résoudre par factorisation",
            "question": "<p>Résoudre dans $\\mathbb{R}$ : $$x^2 - 5x = 0$$</p>",
            "options": [
              {
                "text": "$x = 0$ ou $x = 5$",
                "isCorrect": true
              },
              {
                "text": "$x = 5$ seulement",
                "isCorrect": false
              },
              {
                "text": "$x = -5$ ou $x = 5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 3)</h4>\n            <p>On ne divise <strong>jamais</strong> par $x$ (on perdrait la solution $x=0$). On factorise par le facteur commun $x$ :</p>\n            <p>$x^2 - 5x = x(x - 5) = 0$.</p>\n            <p>D'après la règle du produit nul : $x = 0$ ou $x - 5 = 0$, c'est-à-dire $x = 0$ ou $x = 5$.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "systemes_equations",
        "title": "Chapitre 7 : Systèmes d'équations à deux inconnues",
        "icon": "⚖️",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Un système de deux équations à deux inconnues $x$ et $y$ permet de résoudre des problèmes où <strong>deux conditions</strong> doivent être vérifiées en même temps. On le note avec une accolade :</p>\n        <div class=\"formula\">\n          <p>$$\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$$</p>\n        </div>\n        <p>Résoudre ce système, c'est trouver le <strong>couple $(x;y)$</strong> qui vérifie les deux équations à la fois. Il existe deux méthodes principales.</p>\n\n        <h3>1. Méthode par substitution</h3>\n        <p>On utilise cette méthode quand une équation donne déjà directement $x$ ou $y$ en fonction de l'autre.</p>\n        <p><strong>Étapes :</strong></p>\n        <p>1. On isole une inconnue dans une des deux équations (si ce n'est pas déjà fait).<br>\n        2. On la <strong>remplace</strong> (on \"substitue\") dans l'autre équation.<br>\n        3. On résout l'équation à une seule inconnue obtenue.<br>\n        4. On calcule la deuxième inconnue.</p>\n        <p><strong>Exemple :</strong> Résoudre $\\begin{cases} y = 2x+1 \\\\ x+y=10 \\end{cases}$</p>\n        <p>La première équation donne déjà $y$ en fonction de $x$. On remplace $y$ par $2x+1$ dans la deuxième équation :</p>\n        <p>$x + (2x+1) = 10 \\Rightarrow 3x+1=10 \\Rightarrow 3x=9 \\Rightarrow x=3$</p>\n        <p>On calcule alors $y = 2 \\times 3+1 = 7$. La solution est le couple $(3;7)$.</p>\n\n        <h3>2. Méthode par combinaison linéaire</h3>\n        <p>On utilise cette méthode quand on peut additionner ou soustraire les deux équations pour faire <strong>disparaître une inconnue</strong>.</p>\n        <p><strong>Étapes :</strong></p>\n        <p>1. On multiplie une ou les deux équations par un nombre bien choisi, pour que les coefficients d'une inconnue deviennent opposés ou identiques.<br>\n        2. On additionne ou soustrait les deux équations pour éliminer cette inconnue.<br>\n        3. On résout l'équation obtenue, puis on calcule la deuxième inconnue.</p>\n        <p><strong>Exemple :</strong> Résoudre $\\begin{cases} 3x+2y=12 \\\\ 5x-2y=4 \\end{cases}$</p>\n        <p>Les coefficients de $y$ sont déjà opposés ($+2$ et $-2$) : on additionne directement les deux équations membre à membre :</p>\n        <p>$(3x+2y)+(5x-2y) = 12+4 \\Rightarrow 8x = 16 \\Rightarrow x=2$</p>\n        <p>On remplace $x=2$ dans la première équation : $3 \\times 2+2y=12 \\Rightarrow 6+2y=12 \\Rightarrow 2y=6 \\Rightarrow y=3$.</p>\n        <p>La solution est le couple $(2;3)$.</p>\n\n        <div class=\"card-tip\">\n          <strong>Comment choisir sa méthode ?</strong> Si une équation est déjà de la forme $y = ...$ ou $x = ...$, utilise la <strong>substitution</strong>. Sinon, regarde si les coefficients d'une inconnue sont identiques ou opposés (ou peuvent facilement le devenir en multipliant) : utilise alors la <strong>combinaison</strong>.\n        </div>\n\n        <div class=\"card-warning\">\n          <strong>Toujours vérifier :</strong> une fois la solution trouvée, remplace $x$ et $y$ dans les <strong>deux</strong> équations de départ pour t'assurer qu'elles sont bien vérifiées.\n        </div>\n      ",
        "exercises": [
          {
            "id": "sys_n1",
            "level": 1,
            "title": "Niveau 1 : Résoudre par substitution",
            "question": "<p>Résoudre le système $\\begin{cases} y = 2x+1 \\\\ x+y=10 \\end{cases}$.</p>",
            "options": [
              {
                "text": "$x=3$ et $y=7$",
                "isCorrect": true
              },
              {
                "text": "$x=7$ et $y=3$",
                "isCorrect": false
              },
              {
                "text": "$x=9$ et $y=1$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>La première équation donne déjà $y$ en fonction de $x$ : $y=2x+1$. On la substitue dans la seconde équation :</p>\n            <p>$x + (2x+1) = 10$</p>\n            <p>$3x+1=10 \\Rightarrow 3x=9 \\Rightarrow x=3$</p>\n            <p>On calcule $y$ : $y = 2\\times3+1 = 7$.</p>\n            <p><em>Vérification :</em> $3+7=10$ ✓ et $7=2\\times3+1$ ✓.</p>\n          "
          },
          {
            "id": "sys_n2",
            "level": 1,
            "title": "Niveau 1 : Identifier la bonne méthode",
            "question": "<p>Pour résoudre le système $\\begin{cases} x = 3y-4 \\\\ 2x+y=1 \\end{cases}$, quelle méthode est la plus directe ?</p>",
            "options": [
              {
                "text": "La substitution, car la première équation donne déjà $x$ en fonction de $y$",
                "isCorrect": true
              },
              {
                "text": "La combinaison, car les coefficients sont opposés",
                "isCorrect": false
              },
              {
                "text": "Aucune des deux méthodes ne fonctionne ici",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>La première équation, $x=3y-4$, exprime déjà $x$ directement en fonction de $y$. C'est exactement la situation où la <strong>substitution</strong> est la plus rapide : il suffit de remplacer $x$ par $3y-4$ dans la deuxième équation.</p>\n            <p>(On obtiendrait alors $2(3y-4)+y=1 \\Rightarrow 6y-8+y=1 \\Rightarrow 7y=9 \\Rightarrow y=\\frac{9}{7}$.)</p>\n          "
          },
          {
            "id": "sys_n3",
            "level": 2,
            "title": "Niveau 2 : Résoudre par combinaison linéaire",
            "question": "<p>Résoudre le système $\\begin{cases} 3x+2y=12 \\\\ 5x-2y=4 \\end{cases}$.</p>",
            "options": [
              {
                "text": "$x=2$ et $y=3$",
                "isCorrect": true
              },
              {
                "text": "$x=4$ et $y=0$",
                "isCorrect": false
              },
              {
                "text": "$x=3$ et $y=2$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>Les coefficients de $y$ sont opposés ($+2$ et $-2$) : on additionne les deux équations membre à membre pour éliminer $y$ :</p>\n            <p>$(3x+2y) + (5x-2y) = 12+4$</p>\n            <p>$8x = 16 \\Rightarrow x = 2$</p>\n            <p>On remplace $x=2$ dans la première équation : $3\\times2+2y=12 \\Rightarrow 6+2y=12 \\Rightarrow 2y=6 \\Rightarrow y=3$.</p>\n            <p><em>Vérification :</em> $5\\times2-2\\times3=10-6=4$ ✓.</p>\n          "
          },
          {
            "id": "sys_n4",
            "level": 2,
            "title": "Niveau 2 : Préparer une combinaison en multipliant une équation",
            "question": "<p>Pour résoudre $\\begin{cases} x+2y=7 \\\\ 3x+y=11 \\end{cases}$ par combinaison en éliminant $y$, par quel nombre faut-il multiplier la deuxième équation ?</p>",
            "options": [
              {
                "text": "Par $-2$ (pour obtenir $-6x-2y=-22$, puis additionner à la première)",
                "isCorrect": true
              },
              {
                "text": "Par $2$ (pour obtenir $6x+2y=22$)",
                "isCorrect": false
              },
              {
                "text": "Par $3$ (pour obtenir $9x+3y=33$)",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>Dans la première équation, le coefficient de $y$ est $+2$. On veut un coefficient <strong>opposé</strong> dans la deuxième équation pour pouvoir additionner et éliminer $y$.</p>\n            <p>Le coefficient de $y$ dans la deuxième équation est $+1$. En multipliant toute l'équation par $-2$, on obtient $-2$ comme coefficient de $y$, qui est bien l'opposé de $+2$ :</p>\n            <p>$3x+y=11 \\quad \\xrightarrow{\\times(-2)} \\quad -6x-2y=-22$</p>\n            <p>En additionnant avec $x+2y=7$, le terme en $y$ disparaît bien : $x-6x = 7-22 \\Rightarrow -5x=-15 \\Rightarrow x=3$, puis $y=2$.</p>\n          "
          },
          {
            "id": "sys_n5",
            "level": 3,
            "title": "Niveau 3 : Mettre un problème concret en équations",
            "question": "<p>Dans une papeterie, 2 stylos et 3 cahiers coûtent 13 €, tandis que 1 stylo et 2 cahiers coûtent 8 €. Quel est le prix d'un stylo et celui d'un cahier ?</p>",
            "options": [
              {
                "text": "Un stylo coûte 2 € et un cahier coûte 3 €",
                "isCorrect": true
              },
              {
                "text": "Un stylo coûte 3 € et un cahier coûte 2 €",
                "isCorrect": false
              },
              {
                "text": "Un stylo coûte 1 € et un cahier coûte 3,50 €",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>On note $p$ le prix d'un stylo et $c$ le prix d'un cahier. Les deux phrases se traduisent par :</p>\n            <p>$$\\begin{cases} 2p+3c=13 \\\\ p+2c=8 \\end{cases}$$</p>\n            <p>La deuxième équation donne facilement $p$ en fonction de $c$ : $p = 8-2c$. On substitue dans la première équation :</p>\n            <p>$2(8-2c)+3c=13 \\Rightarrow 16-4c+3c=13 \\Rightarrow 16-c=13 \\Rightarrow c=3$</p>\n            <p>On calcule alors $p = 8-2\\times3 = 8-6 = 2$.</p>\n            <p>Un stylo coûte donc $2$ € et un cahier coûte $3$ €.</p>\n            <p><em>Vérification :</em> $2\\times2+3\\times3=4+9=13$ ✓ et $2+2\\times3=2+6=8$ ✓.</p>\n          "
          },
          {
            "id": "sys_n6",
            "level": 3,
            "title": "Niveau 3 : Choisir et combiner intelligemment",
            "question": "<p>Résoudre le système $\\begin{cases} 4x+3y=2 \\\\ 2x-y=6 \\end{cases}$.</p>",
            "options": [
              {
                "text": "$x=2$ et $y=-2$",
                "isCorrect": true
              },
              {
                "text": "$x=-2$ et $y=2$",
                "isCorrect": false
              },
              {
                "text": "$x=1$ et $y=-4$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>On choisit d'éliminer $y$. Dans la deuxième équation, le coefficient de $y$ est $-1$. On multiplie cette équation par $3$ pour obtenir $-3$, l'opposé de $+3$ (coefficient de $y$ dans la première équation) :</p>\n            <p>$2x-y=6 \\quad \\xrightarrow{\\times 3} \\quad 6x-3y=18$</p>\n            <p>On additionne avec la première équation $4x+3y=2$ :</p>\n            <p>$(4x+3y)+(6x-3y) = 2+18 \\Rightarrow 10x=20 \\Rightarrow x=2$</p>\n            <p>On remplace dans la deuxième équation d'origine : $2\\times2-y=6 \\Rightarrow 4-y=6 \\Rightarrow y=-2$.</p>\n            <p><em>Vérification :</em> $4\\times2+3\\times(-2)=8-6=2$ ✓.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      }
    ]
  },
  {
    "id": "module2",
    "title": "Module 2 : Fonctions",
    "description": "Les fonctions sont au cœur du programme de Première et de Terminale. Comprendre les images, les antécédents, les représentations graphiques et les variations est indispensable.",
    "chapters": [
      {
        "id": "fonctions_generalites",
        "title": "Chapitre 1 : Généralités sur les fonctions",
        "icon": "📈",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Une fonction $f$ est comme une <strong>machine</strong> qui transforme un nombre : à chaque nombre $x$ que l'on entre (l'<strong>antécédent</strong>), elle associe un <strong>unique</strong> nombre $f(x)$ qui en sort (l'<strong>image</strong>). C'est l'objet central de toute la Première.</p>\n\n        <h3>1. Vocabulaire : image et antécédent</h3>\n        <ul>\n          <li>L'<strong>image</strong> de $x$ est le nombre $f(x)$ : on la calcule en remplaçant $x$ par sa valeur dans la formule.</li>\n          <li>Un <strong>antécédent</strong> de $y$ est un nombre $x$ tel que $f(x) = y$ : on le trouve en résolvant une équation.</li>\n        </ul>\n        <p><strong>Exemple :</strong> pour $f(x) = 2x^2 - 3x + 1$, l'image de $-2$ est $f(-2) = 2\\times(-2)^2 - 3\\times(-2) + 1 = 8 + 6 + 1 = 15$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Ne pas confondre :</strong> calculer une <em>image</em>, c'est un simple calcul (on remplace $x$). Chercher un <em>antécédent</em>, c'est résoudre une <em>équation</em> ($f(x) = y$) — c'est plus difficile, et il peut y avoir zéro, une ou plusieurs solutions.\n        </div>\n\n        <h3>2. Lecture graphique</h3>\n        <div class=\"card-tip\">\n          <strong>Graphiquement :</strong> les antécédents ($x$) se lisent sur l'axe horizontal (abscisses) et les images ($y$) sur l'axe vertical (ordonnées). Le point $M(x\\,;\\,y)$ appartient à la courbe $\\mathcal{C}_f$ si et seulement si $y = f(x)$.\n        </div>\n        <ul>\n          <li><strong>Lire une image :</strong> on part de $x$ sur l'axe horizontal, on monte jusqu'à la courbe, on lit $y$.</li>\n          <li><strong>Lire un antécédent :</strong> on part de $y$ sur l'axe vertical, on rejoint la courbe horizontalement, on lit le ou les $x$ correspondants.</li>\n        </ul>\n\n        <h3>3. Tester l'appartenance d'un point</h3>\n        <p>Un point $A(x_A\\,;\\,y_A)$ appartient à la courbe de $f$ si et seulement si $f(x_A) = y_A$. Il suffit de calculer l'image de $x_A$ et de comparer à $y_A$.</p>\n        <p><strong>Exemple :</strong> $A(3\\,;\\,10)$ et $g(x) = 4x - 2$. On calcule $g(3) = 4\\times 3 - 2 = 10$. Comme $g(3) = 10 = y_A$, le point $A$ appartient bien à la courbe.</p>\n      ",
        "exercises": [
          {
            "id": "fct_n1",
            "level": 1,
            "title": "Niveau 1 : Calcul d'image",
            "question": "<p>Soit la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x^2 - 3x + 1$. Calculer l'image de $-2$ par $f$.</p>",
            "options": [
              {
                "text": "$15$",
                "isCorrect": true
              },
              {
                "text": "$3$",
                "isCorrect": false
              },
              {
                "text": "$-13$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>Pour calculer l'image de $-2$, on remplace $x$ par $-2$ dans l'expression de $f(x)$ :<br>\n            $f(-2) = 2(-2)^2 - 3(-2) + 1$<br>\n            $f(-2) = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$</p>\n          "
          },
          {
            "id": "fct_n2",
            "level": 1,
            "title": "Niveau 1 : Appartenance d'un point",
            "question": "<p>Le point $A(3; 10)$ appartient-il à la courbe représentative de la fonction $g(x) = 4x - 2$ ?</p>",
            "options": [
              {
                "text": "Oui, car $g(3) = 10$",
                "isCorrect": true
              },
              {
                "text": "Non, car $g(3) = 14$",
                "isCorrect": false
              },
              {
                "text": "Non, car $g(10) = 38$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Pour vérifier si $A(x_A ; y_A)$ appartient à la courbe, on calcule l'image de l'abscisse et on compare avec l'ordonnée.<br>\n            $g(3) = 4(3) - 2 = 12 - 2 = 10$.<br>\n            Comme $g(3) = y_A$, le point $A$ appartient bien à la courbe.</p>\n          "
          },
          {
            "id": "fct_n3",
            "level": 2,
            "title": "Niveau 2 : Calcul d'antécédents",
            "question": "<p>Soit $h(x) = 3x - 5$. Quels sont les antécédents de $4$ par $h$ ?</p>",
            "options": [
              {
                "text": "L'antécédent est $3$",
                "isCorrect": true
              },
              {
                "text": "L'antécédent est $4$",
                "isCorrect": false
              },
              {
                "text": "L'antécédent est $7$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>Chercher le ou les antécédents de $4$, c'est résoudre l'équation $h(x) = 4$.<br>\n            $3x - 5 = 4$<br>\n            $3x = 9$<br>\n            $x = 3$.</p>\n          "
          },
          {
            "id": "fct_n5",
            "level": 2,
            "title": "Niveau 2 : Lecture graphique d'une image",
            "question": "<p>Sur la courbe de $f$, on lit que le point de la courbe d'abscisse $2$ a pour ordonnée $-1$. Que vaut $f(2)$ ?</p>",
            "options": [
              {
                "text": "$f(2) = -1$",
                "isCorrect": true
              },
              {
                "text": "$f(2) = 2$",
                "isCorrect": false
              },
              {
                "text": "$f(-1) = 2$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 2)</h4>\n            <p>Le point de la courbe d'abscisse $2$ et d'ordonnée $-1$ s'écrit $M(2\\,;\\,-1)$.</p>\n            <p>Par définition, ce point appartient à la courbe signifie $y = f(x)$, donc $f(2) = -1$.</p>\n            <p>⚠️ L'image se lit sur l'axe vertical : c'est l'ordonnée, ici $-1$.</p>\n          "
          },
          {
            "id": "fct_n4",
            "level": 3,
            "title": "Niveau 3 : Antécédents multiples",
            "question": "<p>Quels sont les antécédents de $9$ par la fonction carré $f(x) = x^2$ ?</p>",
            "options": [
              {
                "text": "$-3$ et $3$",
                "isCorrect": true
              },
              {
                "text": "$3$ uniquement",
                "isCorrect": false
              },
              {
                "text": "$81$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 3)</h4>\n            <p>On résout $x^2 = 9$.<br>\n            Cette équation a deux solutions : $\\sqrt{9} = 3$ et $-\\sqrt{9} = -3$. Il y a donc deux antécédents.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "fonctions_reference",
        "title": "Chapitre 3 : Les fonctions de référence",
        "icon": "📈",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>En plus de la fonction affine, quatre autres fonctions \"de référence\" reviennent sans cesse en mathématiques. Connaître leur forme et leurs variations par cœur permet de gagner énormément de temps.</p>\n\n        <h3>1. La fonction carré : $f(x) = x^2$</h3>\n        <p>Définie sur $\\mathbb{R}$ tout entier. Sa courbe est une <strong>parabole</strong> tournée vers le haut, avec un minimum en $x=0$.</p>\n        <table style=\"width:100%; text-align:center; border-collapse: collapse; margin: 1em 0;\">\n          <tr style=\"border-bottom: 2px solid #ccc;\"><th>$x$</th><th>$-\\infty$</th><th></th><th>$0$</th><th></th><th>$+\\infty$</th></tr>\n          <tr><td>Variations de $f$</td><td colspan=\"2\">↘️ décroissante</td><td>$0$</td><td colspan=\"2\">↗️ croissante</td></tr>\n        </table>\n        <p><strong>Propriété :</strong> $f(-x) = f(x)$ pour tout $x$ (la fonction carré est dite <strong>paire</strong> : sa courbe est symétrique par rapport à l'axe des ordonnées). Exemple : $f(-3) = (-3)^2 = 9 = f(3)$.</p>\n\n        <h3>2. La fonction racine carrée : $f(x) = \\sqrt{x}$</h3>\n        <p>Définie uniquement pour $x \\geqslant 0$ (on ne peut pas prendre la racine d'un nombre négatif). Sa courbe démarre en $(0;0)$ et monte de plus en plus lentement.</p>\n        <table style=\"width:100%; text-align:center; border-collapse: collapse; margin: 1em 0;\">\n          <tr style=\"border-bottom: 2px solid #ccc;\"><th>$x$</th><th>$0$</th><th></th><th>$+\\infty$</th></tr>\n          <tr><td>Variations de $f$</td><td>$0$</td><td colspan=\"2\">↗️ croissante</td></tr>\n        </table>\n        <p>La fonction racine carrée est <strong>croissante sur $[0;+\\infty[$</strong> tout entier : plus $x$ augmente, plus $\\sqrt{x}$ augmente (mais de moins en moins vite).</p>\n\n        <h3>3. La fonction inverse : $f(x) = \\frac{1}{x}$</h3>\n        <p>Définie sur $\\mathbb{R}$ sauf en $0$ (la division par $0$ est impossible). Sa courbe est une <strong>hyperbole</strong> en deux morceaux.</p>\n        <table style=\"width:100%; text-align:center; border-collapse: collapse; margin: 1em 0;\">\n          <tr style=\"border-bottom: 2px solid #ccc;\"><th>$x$</th><th>$-\\infty$</th><th></th><th>$0$</th><th></th><th>$+\\infty$</th></tr>\n          <tr><td>Variations de $f$</td><td colspan=\"2\">↘️ décroissante</td><td style=\"color:#999;\">(exclu)</td><td colspan=\"2\">↘️ décroissante</td></tr>\n        </table>\n        <div class=\"card-warning\">\n          <strong>Piège classique :</strong> la fonction inverse est décroissante sur $]-\\infty;0[$ <strong>et</strong> décroissante sur $]0;+\\infty[$, mais elle n'est <strong>pas décroissante sur $\\mathbb{R}$ tout entier</strong> ! On ne peut jamais comparer une valeur négative et une valeur positive de $x$ à travers $0$, puisque $0$ n'est pas dans le domaine.\n        </div>\n\n        <h3>4. La fonction cube : $f(x) = x^3$</h3>\n        <p>Définie sur $\\mathbb{R}$ tout entier. Sa courbe a une forme de \"S\" et elle est <strong>croissante sur $\\mathbb{R}$ tout entier</strong> (contrairement à la fonction carré).</p>\n        <p><strong>Propriété :</strong> $f(-x) = -f(x)$ pour tout $x$ (la fonction cube est dite <strong>impaire</strong> : sa courbe est symétrique par rapport à l'origine $O$). Exemple : $f(-2) = (-2)^3 = -8 = -f(2)$.</p>\n\n        <div class=\"card-tip\">\n          <strong>Pour résumer les quatre fonctions :</strong> carré (parabole, paire, min en 0) ; racine (définie sur $[0;+\\infty[$, croissante) ; inverse (deux branches décroissantes, jamais définie en 0) ; cube (forme de S, impaire, croissante sur $\\mathbb{R}$).\n        </div>\n      ",
        "exercises": [
          {
            "id": "fctref_n1",
            "level": 1,
            "title": "Niveau 1 : Calculer des images",
            "question": "<p>On considère $f(x) = x^2$. Que valent $f(-3)$ et $f(3)$ ?</p>",
            "options": [
              {
                "text": "$f(-3) = 9$ et $f(3) = 9$",
                "isCorrect": true
              },
              {
                "text": "$f(-3) = -9$ et $f(3) = 9$",
                "isCorrect": false
              },
              {
                "text": "$f(-3) = 9$ et $f(3) = -9$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$f(-3) = (-3)^2 = (-3) \\times (-3) = 9$ (le produit de deux nombres négatifs est positif).</p>\n            <p>$f(3) = 3^2 = 9$.</p>\n            <p>On retrouve la propriété de la fonction carré : $f(-3) = f(3)$, car élever au carré \"efface\" toujours le signe négatif.</p>\n          "
          },
          {
            "id": "fctref_n2",
            "level": 1,
            "title": "Niveau 1 : Domaine de définition de la racine carrée",
            "question": "<p>Pour quelles valeurs de $x$ la fonction $f(x) = \\sqrt{x}$ est-elle définie ?</p>",
            "options": [
              {
                "text": "Pour $x \\geqslant 0$",
                "isCorrect": true
              },
              {
                "text": "Pour tout $x \\in \\mathbb{R}$",
                "isCorrect": false
              },
              {
                "text": "Pour $x > 0$ uniquement (0 exclu)",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>La racine carrée d'un nombre négatif n'existe pas dans $\\mathbb{R}$. La fonction $f(x)=\\sqrt{x}$ n'est donc définie que pour $x \\geqslant 0$.</p>\n            <p>⚠️ $0$ est bien inclus : $\\sqrt{0} = 0$ est parfaitement défini, ce n'est que pour les valeurs strictement négatives que $\\sqrt{x}$ n'existe pas.</p>\n          "
          },
          {
            "id": "fctref_n3",
            "level": 2,
            "title": "Niveau 2 : Variations de la fonction inverse",
            "question": "<p>On considère $f(x) = \\frac{1}{x}$ et trois valeurs $f(1)=1$, $f(2)=0,5$, $f(4)=0,25$. Que peut-on en déduire sur les variations de $f$ sur $]0;+\\infty[$ ?</p>",
            "options": [
              {
                "text": "$f$ est décroissante sur $]0;+\\infty[$",
                "isCorrect": true
              },
              {
                "text": "$f$ est croissante sur $]0;+\\infty[$",
                "isCorrect": false
              },
              {
                "text": "On ne peut rien déduire avec seulement trois valeurs",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On observe que lorsque $x$ augmente ($1 \\to 2 \\to 4$), les valeurs de $f(x)$ diminuent ($1 \\to 0,5 \\to 0,25$).</p>\n            <p>C'est cohérent avec le cours : la fonction inverse est <strong>décroissante sur $]0;+\\infty[$</strong> (et aussi décroissante sur $]-\\infty;0[$, mais ce sont deux intervalles séparés).</p>\n          "
          },
          {
            "id": "fctref_n4",
            "level": 2,
            "title": "Niveau 2 : Résoudre une équation avec la fonction racine",
            "question": "<p>Résoudre l'équation $\\sqrt{x} = 3$.</p>",
            "options": [
              {
                "text": "$x = 9$",
                "isCorrect": true
              },
              {
                "text": "$x = 3$",
                "isCorrect": false
              },
              {
                "text": "$x = 1,5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>Pour résoudre $\\sqrt{x}=3$, on élève les deux membres de l'équation au carré (c'est licite ici car les deux membres sont positifs) :</p>\n            <p>$(\\sqrt{x})^2 = 3^2 \\Rightarrow x = 9$</p>\n            <p><em>Vérification :</em> $\\sqrt{9} = 3$ ✓. On vérifie aussi que $x=9 \\geqslant 0$, donc cette solution est bien dans le domaine de définition.</p>\n          "
          },
          {
            "id": "fctref_n5",
            "level": 3,
            "title": "Niveau 3 : Utiliser la parité de la fonction cube",
            "question": "<p>On sait que $f(x)=x^3$ vérifie $f(2)=8$. Que vaut $f(-2)$ ?</p>",
            "options": [
              {
                "text": "$f(-2) = -8$",
                "isCorrect": true
              },
              {
                "text": "$f(-2) = 8$",
                "isCorrect": false
              },
              {
                "text": "$f(-2) = -6$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>La fonction cube est <strong>impaire</strong> : elle vérifie $f(-x) = -f(x)$ pour tout $x$.</p>\n            <p>Donc $f(-2) = -f(2) = -8$.</p>\n            <p><em>Vérification directe :</em> $f(-2) = (-2)^3 = (-2)\\times(-2)\\times(-2) = 4 \\times (-2) = -8$ ✓.</p>\n            <p>⚠️ Ne pas confondre avec la fonction carré (paire), où $f(-x)=f(x)$ <strong>sans</strong> changement de signe !</p>\n          "
          },
          {
            "id": "fctref_n6",
            "level": 3,
            "title": "Niveau 3 : Problème contextualisé avec la fonction inverse",
            "question": "<p>Une fonction $f$ de la forme $f(x) = \\frac{k}{x}$ vérifie $f(2) = 5$. Quelle est la valeur de $f(10)$ ?</p>",
            "options": [
              {
                "text": "$f(10) = 1$",
                "isCorrect": true
              },
              {
                "text": "$f(10) = 25$",
                "isCorrect": false
              },
              {
                "text": "$f(10) = 0,5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>On détermine d'abord $k$ grâce à la condition $f(2)=5$ :</p>\n            <p>$$\\frac{k}{2} = 5 \\Rightarrow k = 10$$</p>\n            <p>La fonction est donc $f(x) = \\frac{10}{x}$. On calcule alors $f(10)$ :</p>\n            <p>$$f(10) = \\frac{10}{10} = 1$$</p>\n          "
          }
        ],
        "yearLevel": "2de"
      },
      {
        "id": "fonctions_affines",
        "title": "Chapitre 2 : Fonctions Affines",
        "icon": "📏",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Les fonctions affines sont les fonctions les plus simples après les constantes, et leur courbe est toujours une <strong>droite</strong>. Les maîtriser est indispensable : elles servent de modèle dans énormément de situations (proportionnalité, coûts, vitesse...).</p>\n\n        <h3>1. Définition</h3>\n        <p>Une fonction affine est définie sur $\\mathbb{R}$ par $f(x) = ax + b$, où $a$ et $b$ sont deux nombres fixés.</p>\n        <ul>\n          <li><strong>$a$</strong> est le <strong>coefficient directeur</strong> (la pente de la droite) : il indique son inclinaison.</li>\n          <li><strong>$b$</strong> est l'<strong>ordonnée à l'origine</strong> : c'est l'ordonnée du point où la droite coupe l'axe vertical (en $x = 0$, $f(0) = b$).</li>\n        </ul>\n        <p>Cas particuliers : si $b = 0$, $f(x) = ax$ est <strong>linéaire</strong> (proportionnalité, droite passant par l'origine) ; si $a = 0$, $f(x) = b$ est <strong>constante</strong> (droite horizontale).</p>\n\n        <h3>2. Sens de variation</h3>\n        <div class=\"card-tip\">\n          Le sens de variation d'une fonction affine ne dépend <strong>que du signe de $a$</strong> :\n          <ul>\n            <li>si $a > 0$ : $f$ est <strong>croissante</strong> (la droite monte) ;</li>\n            <li>si $a < 0$ : $f$ est <strong>décroissante</strong> (la droite descend) ;</li>\n            <li>si $a = 0$ : $f$ est constante.</li>\n          </ul>\n        </div>\n\n        <h3>3. Le coefficient directeur à partir de deux points</h3>\n        <p>Si la droite passe par $A(x_A\\,;\\,y_A)$ et $B(x_B\\,;\\,y_B)$, alors :</p>\n        <div class=\"formula\">\n          <p>$$a = \\frac{y_B - y_A}{x_B - x_A}$$</p>\n        </div>\n        <p>C'est le <strong>taux d'accroissement</strong> : la variation des $y$ divisée par la variation des $x$.</p>\n        <p><strong>Exemple :</strong> pour $A(1\\,;\\,3)$ et $B(3\\,;\\,7)$ : $a = \\dfrac{7-3}{3-1} = \\dfrac{4}{2} = 2$. Puis on trouve $b$ avec $f(1) = 3$ : $2\\times 1 + b = 3$, donc $b = 1$. D'où $f(x) = 2x + 1$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Attention à l'ordre :</strong> dans la formule du coefficient directeur, il faut mettre les coordonnées de $A$ et $B$ dans le <strong>même ordre</strong> en haut et en bas. Si on inverse en haut, il faut inverser en bas aussi.\n        </div>\n      ",
        "exercises": [
          {
            "id": "aff_n1",
            "level": 1,
            "title": "Niveau 1 : Identifier a et b",
            "question": "<p>Quelle est l'ordonnée à l'origine de la fonction $f(x) = -3x + 7$ ?</p>",
            "options": [
              {
                "text": "$7$",
                "isCorrect": true
              },
              {
                "text": "$-3$",
                "isCorrect": false
              },
              {
                "text": "$x$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>Dans $f(x) = ax + b$, le nombre $b$ est l'ordonnée à l'origine. Ici, $b = 7$.</p>\n          "
          },
          {
            "id": "aff_n2",
            "level": 1,
            "title": "Niveau 1 : Sens de variation",
            "question": "<p>Parmi ces fonctions, laquelle est strictement croissante sur $\\mathbb{R}$ ?</p>",
            "options": [
              {
                "text": "$g(x) = 2x - 5$",
                "isCorrect": true
              },
              {
                "text": "$f(x) = -4x + 10$",
                "isCorrect": false
              },
              {
                "text": "$h(x) = 8$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Le sens de variation d'une fonction affine dépend du signe de $a$ (coefficient directeur). Pour être croissante, il faut $a > 0$.<br>\n            Ici $a = 2$ pour $g$, donc $g$ est croissante.</p>\n          "
          },
          {
            "id": "aff_n3",
            "level": 2,
            "title": "Niveau 2 : Déterminer l'expression à partir de deux points",
            "question": "<p>Une droite passe par les points $A(1; 3)$ et $B(3; 7)$. Quelle est l'expression de la fonction affine $f$ qui lui est associée ?</p>",
            "options": [
              {
                "text": "$f(x) = 2x + 1$",
                "isCorrect": true
              },
              {
                "text": "$f(x) = 2x - 1$",
                "isCorrect": false
              },
              {
                "text": "$f(x) = 3x + 1$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On calcule le coefficient directeur $a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.</p>\n            <p>La fonction s'écrit donc $f(x) = 2x + b$.<br>\n            Pour trouver $b$, on utilise un point, par exemple $A(1; 3)$. On sait que $f(1) = 3$.<br>\n            $2(1) + b = 3 \\implies b = 1$.</p>\n            <p>Donc $f(x) = 2x + 1$.</p>\n          "
          },
          {
            "id": "aff_n5",
            "level": 2,
            "title": "Niveau 2 : Résoudre f(x) = 0",
            "question": "<p>Soit $f(x) = -3x + 7$. En quelle valeur de $x$ la droite coupe-t-elle l'axe des abscisses ?</p>",
            "options": [
              {
                "text": "$x = \\dfrac{7}{3}$",
                "isCorrect": true
              },
              {
                "text": "$x = 7$",
                "isCorrect": false
              },
              {
                "text": "$x = -\\dfrac{7}{3}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 2)</h4>\n            <p>La droite coupe l'axe des abscisses là où $y = 0$, donc on résout $f(x) = 0$ :</p>\n            <p>$-3x + 7 = 0 \\Rightarrow -3x = -7 \\Rightarrow x = \\dfrac{-7}{-3} = \\dfrac{7}{3}$.</p>\n            <p>La droite coupe l'axe des abscisses au point d'abscisse $\\dfrac{7}{3}$.</p>\n          "
          },
          {
            "id": "aff_n4",
            "level": 3,
            "title": "Niveau 3 : Taux d'accroissement",
            "question": "<p>Soit $g$ une fonction affine telle que $g(5) = 12$ et $g(-2) = -2$. Quelle est la valeur de son coefficient directeur ?</p>",
            "options": [
              {
                "text": "$a = 2$",
                "isCorrect": true
              },
              {
                "text": "$a = -2$",
                "isCorrect": false
              },
              {
                "text": "$a = 14$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 3)</h4>\n            <p>Le taux d'accroissement est constant pour une fonction affine :<br>\n            $a = \\frac{g(x_2) - g(x_1)}{x_2 - x_1} = \\frac{12 - (-2)}{5 - (-2)} = \\frac{14}{7} = 2$.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "fonctions_variations",
        "title": "Chapitre 3 : Variations et Extremums",
        "icon": "🎢",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Étudier les variations d'une fonction, c'est dire sur quels intervalles elle <strong>monte</strong> (croissante) ou <strong>descend</strong> (décroissante) quand on parcourt l'axe des $x$ de gauche à droite. C'est l'une des compétences les plus utilisées en Première.</p>\n\n        <h3>1. Croissance et décroissance</h3>\n        <ul>\n          <li>$f$ est <strong>croissante</strong> sur un intervalle si, quand $x$ augmente, $f(x)$ augmente aussi (la courbe monte).</li>\n          <li>$f$ est <strong>décroissante</strong> sur un intervalle si, quand $x$ augmente, $f(x)$ diminue (la courbe descend).</li>\n        </ul>\n\n        <h3>2. Le tableau de variations</h3>\n        <p>On résume les variations dans un tableau : la première ligne donne les valeurs de $x$ (bornes et points où le sens change), la seconde indique le sens par des flèches montantes ↗ ou descendantes ↘, avec les valeurs aux extrémités.</p>\n\n        <h3>3. Les extremums</h3>\n        <div class=\"card-tip\">\n          Un <strong>extremum</strong> (maximum ou minimum) est atteint là où la fonction <strong>change de sens de variation</strong>. Un <strong>maximum</strong> correspond à un sommet (la courbe passe de ↗ à ↘) ; un <strong>minimum</strong> à un creux (de ↘ à ↗).\n        </div>\n        <p><strong>Exemple :</strong> si $f$ croît sur $[-5\\,;\\,2]$ puis décroît sur $[2\\,;\\,8]$, alors $f$ atteint son <strong>maximum en $x = 2$</strong>.</p>\n\n        <h3>4. Cas d'une fonction affine sur un intervalle</h3>\n        <p>Une fonction affine étant monotone, ses extremums sur un intervalle $[m\\,;\\,M]$ sont atteints aux <strong>bornes</strong>. Si $a < 0$ (décroissante), le maximum est en $x = m$ et le minimum en $x = M$.</p>\n        <p><strong>Exemple :</strong> $f(x) = -2x + 5$ sur $[-3\\,;\\,4]$ est décroissante, donc son maximum est $f(-3) = 6 + 5 = 11$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Ne pas confondre :</strong> le <strong>tableau de signes</strong> indique où la courbe est au-dessus ($+$) ou en-dessous ($-$) de l'axe des abscisses ; le <strong>tableau de variations</strong> indique où la courbe monte ou descend. Ce sont deux études différentes !\n        </div>\n\n        <h3>5. Tableau de signes d'un produit</h3>\n        <p>Pour une fonction donnée sous forme factorisée comme $f(x) = (x-2)(x+3)$, on étudie le signe de chaque facteur, puis on applique la règle des signes du produit. Le produit s'annule en $x = 2$ et $x = -3$, et change de signe à chacune de ces valeurs.</p>\n      ",
        "exercises": [
          {
            "id": "var_n1",
            "level": 1,
            "title": "Niveau 1 : Lecture de maximum",
            "question": "<p>Si une fonction $f$ est croissante sur $[-5; 2]$ puis décroissante sur $[2; 8]$, en quelle valeur de $x$ admet-elle son maximum ?</p>",
            "options": [
              {
                "text": "$x = 2$",
                "isCorrect": true
              },
              {
                "text": "$x = 8$",
                "isCorrect": false
              },
              {
                "text": "$x = -5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>La fonction monte jusqu'à $x = 2$, puis descend. Le point culminant se trouve donc en $x = 2$.</p>\n          "
          },
          {
            "id": "var_n2",
            "level": 2,
            "title": "Niveau 2 : Signe et Variations",
            "question": "<p>Vrai ou Faux ? Si une fonction est positive (signe $+$) sur un intervalle, alors elle est forcément croissante sur cet intervalle.</p>",
            "options": [
              {
                "text": "Faux",
                "isCorrect": true
              },
              {
                "text": "Vrai",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 2)</h4>\n            <p><strong>Faux !</strong> Une fonction peut être très haute (positive) mais en train de descendre (décroissante). L'altitude (le signe) est indépendante de la pente (la variation) !</p>\n          "
          },
          {
            "id": "var_n3",
            "level": 3,
            "title": "Niveau 3 : Extremums d'une fonction affine sur un intervalle",
            "question": "<p>On considère la fonction affine $f(x) = -2x + 5$ définie sur l'intervalle $[-3 ; 4]$. Quel est le maximum de $f$ sur cet intervalle ?</p>",
            "options": [
              {
                "text": "Le maximum est $f(-3) = 11$",
                "isCorrect": true
              },
              {
                "text": "Le maximum est $f(4) = -3$",
                "isCorrect": false
              },
              {
                "text": "Le maximum est $f(0) = 5$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 3)</h4>\n            <p>Le coefficient directeur de $f$ est $-2$, qui est <strong>négatif</strong> : la fonction $f$ est donc <strong>décroissante</strong> sur $[-3;4]$.</p>\n            <p>Une fonction décroissante atteint son maximum à la <strong>borne de gauche</strong> de l'intervalle (la plus petite valeur de $x$) et son minimum à la borne de droite.</p>\n            <p>Le maximum est donc atteint en $x=-3$ : $f(-3) = -2 \\times (-3) + 5 = 6+5 = 11$.</p>\n            <p><em>Remarque :</em> le minimum serait atteint en $x=4$ : $f(4) = -2\\times4+5 = -8+5=-3$.</p>\n          "
          },
          {
            "id": "var_n4",
            "level": 3,
            "title": "Niveau 3 : Lecture du tableau de variations de la fonction carré",
            "question": "<p>On considère la fonction $f(x) = x^2$ définie sur $\\mathbb{R}$. Sur quel intervalle $f$ est-elle décroissante ?</p>",
            "options": [
              {
                "text": "$f$ est décroissante sur $]-\\infty ; 0]$",
                "isCorrect": true
              },
              {
                "text": "$f$ est décroissante sur $[0 ; +\\infty[$",
                "isCorrect": false
              },
              {
                "text": "$f$ est décroissante sur $\\mathbb{R}$ tout entier",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 3)</h4>\n            <p>La fonction carré $f(x)=x^2$ a une courbe en forme de \"U\" (une parabole) avec un minimum en $x=0$ (où $f(0)=0$).</p>\n            <p>Pour les valeurs de $x$ négatives (de $-\\infty$ jusqu'à $0$), la courbe <strong>descend</strong> : par exemple $f(-3)=9$ puis $f(-2)=4$ puis $f(-1)=1$ puis $f(0)=0$ : les valeurs diminuent. $f$ est donc <strong>décroissante sur $]-\\infty;0]$</strong>.</p>\n            <p>Pour les valeurs de $x$ positives (de $0$ à $+\\infty$), la courbe <strong>remonte</strong> : $f$ est croissante sur $[0;+\\infty[$.</p>\n          "
          },
          {
            "id": "var_n5",
            "level": 3,
            "title": "Niveau 3 : Tableau de signes à partir d'une forme factorisée",
            "question": "<p>On donne $f(x) = (x-2)(x+3)$. Quel est le signe de $f(x)$ sur l'intervalle $]-3 ; 2[$ ?</p>",
            "options": [
              {
                "text": "$f(x)$ est négatif sur $]-3;2[$",
                "isCorrect": true
              },
              {
                "text": "$f(x)$ est positif sur $]-3;2[$",
                "isCorrect": false
              },
              {
                "text": "$f(x)$ change de signe plusieurs fois sur $]-3;2[$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>$f(x) = (x-2)(x+3)$ est un produit de deux facteurs. $f(x)=0$ quand $x-2=0$ (soit $x=2$) ou $x+3=0$ (soit $x=-3$) : ce sont les deux valeurs qui annulent $f$.</p>\n            <p>Entre ces deux valeurs (sur $]-3;2[$), testons une valeur, par exemple $x=0$ :<br>\n            $f(0) = (0-2)(0+3) = (-2)\\times(3) = -6$, qui est <strong>négatif</strong>.</p>\n            <p>Comme $f$ ne s'annule qu'en $-3$ et $2$, son signe ne change pas entre ces deux valeurs : $f(x)$ est donc négatif sur tout l'intervalle $]-3;2[$.</p>\n            <p><em>Règle générale :</em> un produit $(x-a)(x-b)$ est négatif <strong>entre</strong> ses racines $a$ et $b$, et positif <strong>à l'extérieur</strong>.</p>\n          "
          }
        ],
        "yearLevel": "2de"
      }
    ]
  },
  {
    "id": "module3",
    "title": "Module 3 : Géométrie et Repérage",
    "description": "Vecteurs, coordonnées, distances et équations de droites constituent l'arsenal géométrique analytique pour la Spé Maths.",
    "chapters": [
      {
        "id": "reperage",
        "title": "Chapitre 1 : Repérage, milieu et distance",
        "icon": "🎯",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Dans un repère, chaque point est repéré par un couple de coordonnées $(x\\,;\\,y)$. Savoir calculer le milieu d'un segment et la distance entre deux points est la base de toute la géométrie analytique de Première.</p>\n\n        <h3>1. Coordonnées du milieu</h3>\n        <p>Pour deux points $A(x_A\\,;\\,y_A)$ et $B(x_B\\,;\\,y_B)$, le milieu $M$ du segment $[AB]$ a pour coordonnées la <strong>moyenne</strong> des coordonnées de $A$ et $B$ :</p>\n        <div class=\"formula\">\n          <p>$$M\\left( \\frac{x_A + x_B}{2}\\,;\\,\\frac{y_A + y_B}{2} \\right)$$</p>\n        </div>\n        <p><strong>Exemple :</strong> pour $A(-2\\,;\\,4)$ et $B(6\\,;\\,0)$ : $M\\left(\\dfrac{-2+6}{2}\\,;\\,\\dfrac{4+0}{2}\\right) = M(2\\,;\\,2)$.</p>\n\n        <h3>2. Distance entre deux points</h3>\n        <p>Dans un repère <strong>orthonormé</strong> (axes perpendiculaires et même unité), la distance $AB$ découle du théorème de Pythagore :</p>\n        <div class=\"formula\">\n          <p>$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> pour $C(1\\,;\\,3)$ et $D(4\\,;\\,7)$ : $CD = \\sqrt{(4-1)^2 + (7-3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Attention :</strong> les différences sont <strong>élevées au carré</strong>, donc le signe n'a aucune importance : $(x_B - x_A)^2 = (x_A - x_B)^2$. Une distance est toujours positive.\n        </div>\n\n        <h3>3. Applications utiles</h3>\n        <div class=\"card-tip\">\n          Avec ces deux formules on peut : montrer qu'un point est le milieu d'un segment, prouver qu'un triangle est <strong>isocèle</strong> (deux distances égales) ou <strong>équilatéral</strong> (trois distances égales), ou encore tester si un quadrilatère est un parallélogramme (mêmes milieux des diagonales).\n        </div>\n      ",
        "exercises": [
          {
            "id": "rep_n1",
            "level": 1,
            "title": "Niveau 1 : Calcul du milieu",
            "question": "<p>Soient $A(-2; 4)$ et $B(6; 0)$. Quelles sont les coordonnées du milieu $M$ de $[AB]$ ?</p>",
            "options": [
              {
                "text": "$M(2; 2)$",
                "isCorrect": true
              },
              {
                "text": "$M(4; 4)$",
                "isCorrect": false
              },
              {
                "text": "$M(-4; -2)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$x_M = \\frac{-2 + 6}{2} = \\frac{4}{2} = 2$.</p>\n            <p>$y_M = \\frac{4 + 0}{2} = \\frac{4}{2} = 2$.</p>\n            <p>Le milieu est $M(2; 2)$.</p>\n          "
          },
          {
            "id": "rep_n2",
            "level": 2,
            "title": "Niveau 2 : Calcul de distance",
            "question": "<p>Soient $C(1; 3)$ et $D(4; 7)$. Quelle est la longueur $CD$ ?</p>",
            "options": [
              {
                "text": "$CD = 5$",
                "isCorrect": true
              },
              {
                "text": "$CD = 25$",
                "isCorrect": false
              },
              {
                "text": "$CD = 7$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 2)</h4>\n            <p>$CD = \\sqrt{(4 - 1)^2 + (7 - 3)^2}$</p>\n            <p>$CD = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.</p>\n          "
          },
          {
            "id": "rep_n5",
            "level": 2,
            "title": "Niveau 2 : Retrouver une extrémité à partir du milieu",
            "question": "<p>$M(1\\,;\\,2)$ est le milieu de $[AB]$ avec $A(-3\\,;\\,5)$. Quelles sont les coordonnées de $B$ ?</p>",
            "options": [
              {
                "text": "$B(5\\,;\\,-1)$",
                "isCorrect": true
              },
              {
                "text": "$B(-1\\,;\\,3{,}5)$",
                "isCorrect": false
              },
              {
                "text": "$B(4\\,;\\,3)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 2)</h4>\n            <p>On utilise les formules du milieu à l'envers. Pour l'abscisse : $\\dfrac{x_A + x_B}{2} = 1 \\Rightarrow x_A + x_B = 2 \\Rightarrow -3 + x_B = 2 \\Rightarrow x_B = 5$.</p>\n            <p>Pour l'ordonnée : $\\dfrac{y_A + y_B}{2} = 2 \\Rightarrow 5 + y_B = 4 \\Rightarrow y_B = -1$.</p>\n            <p>Donc $B(5\\,;\\,-1)$.</p>\n          "
          },
          {
            "id": "rep_n3",
            "level": 3,
            "title": "Niveau 3 : Tester l'alignement de trois points",
            "question": "<p>Les points $A(1;2)$, $B(3;6)$ et $C(4;8)$ sont-ils alignés ?</p>",
            "options": [
              {
                "text": "Oui, car $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires",
                "isCorrect": true
              },
              {
                "text": "Non, car $AB \\neq AC$",
                "isCorrect": false
              },
              {
                "text": "On ne peut pas savoir sans tracer la figure",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 3)</h4>\n            <p>Trois points sont alignés si et seulement si deux vecteurs formés à partir de ces points sont <strong>colinéaires</strong>.</p>\n            <p>Calculons $\\vec{AB}$ et $\\vec{AC}$ :<br>\n            $\\vec{AB}(3-1 ; 6-2) = \\vec{AB}(2;4)$<br>\n            $\\vec{AC}(4-1 ; 8-2) = \\vec{AC}(3;6)$</p>\n            <p>On teste la colinéarité avec le déterminant $x_{AB} \\times y_{AC} - y_{AB} \\times x_{AC}$ :</p>\n            <p>$$2 \\times 6 - 4 \\times 3 = 12 - 12 = 0$$</p>\n            <p>Le déterminant est nul : $\\vec{AB}$ et $\\vec{AC}$ sont donc colinéaires, ce qui prouve que $A$, $B$ et $C$ sont alignés.</p>\n          "
          },
          {
            "id": "rep_n4",
            "level": 3,
            "title": "Niveau 3 : Reconnaître un triangle isocèle avec les distances",
            "question": "<p>On donne $A(0;0)$, $B(4;0)$ et $C(2;3)$. Le triangle $ABC$ est-il isocèle ?</p>",
            "options": [
              {
                "text": "Oui, isocèle en $C$, car $AC = BC$",
                "isCorrect": true
              },
              {
                "text": "Non, les trois côtés ont des longueurs différentes",
                "isCorrect": false
              },
              {
                "text": "Oui, le triangle est équilatéral",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 3)</h4>\n            <p>On calcule les trois longueurs avec la formule $AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ :</p>\n            <p>$AB = \\sqrt{(4-0)^2+(0-0)^2} = \\sqrt{16} = 4$</p>\n            <p>$AC = \\sqrt{(2-0)^2+(3-0)^2} = \\sqrt{4+9} = \\sqrt{13} \\approx 3,61$</p>\n            <p>$BC = \\sqrt{(2-4)^2+(3-0)^2} = \\sqrt{4+9} = \\sqrt{13} \\approx 3,61$</p>\n            <p>On observe que $AC = BC = \\sqrt{13}$, mais $AB = 4 \\neq \\sqrt{13}$. Le triangle a donc exactement deux côtés égaux : il est <strong>isocèle en $C$</strong> (le sommet entre les deux côtés égaux).</p>\n            <p>Il n'est pas équilatéral car les trois côtés ne sont pas tous égaux.</p>\n          "
          }
        ],
        "yearLevel": "4e→2de"
      },
      {
        "id": "vecteurs",
        "title": "Chapitre 2 : Vecteurs et translations",
        "icon": "➡️",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Un vecteur représente un <strong>déplacement</strong> : il a une direction, un sens et une longueur (sa <strong>norme</strong>). Les vecteurs sont l'outil de base pour étudier les droites, le parallélisme et l'alignement en Première.</p>\n\n        <h3>1. Coordonnées d'un vecteur</h3>\n        <p>Le vecteur $\\vec{AB}$ qui va de $A(x_A\\,;\\,y_A)$ vers $B(x_B\\,;\\,y_B)$ a pour coordonnées la différence « arrivée moins départ » :</p>\n        <div class=\"formula\">\n          <p>$$\\vec{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> pour $A(2\\,;\\,-1)$ et $B(5\\,;\\,3)$ : $\\vec{AB}\\begin{pmatrix} 5-2 \\\\ 3-(-1) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Sens de calcul :</strong> c'est toujours « coordonnées de l'arrivée moins coordonnées du départ ». $\\vec{AB}$ et $\\vec{BA}$ sont opposés : ils ont des coordonnées de signes contraires.\n        </div>\n\n        <h3>2. Égalité de vecteurs et opérations</h3>\n        <div class=\"card-tip\">\n          Deux vecteurs sont <strong>égaux</strong> si et seulement s'ils ont les mêmes coordonnées. On additionne deux vecteurs en additionnant leurs coordonnées, et on multiplie un vecteur par un nombre en multipliant chaque coordonnée.\n        </div>\n        <p>$\\vec{u}\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix} \\Rightarrow \\vec{u} + \\vec{v}\\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}$.</p>\n\n        <h3>3. Colinéarité</h3>\n        <p>Deux vecteurs sont <strong>colinéaires</strong> (de même direction) si l'un est un multiple de l'autre. Le test pratique utilise le « produit en croix » :</p>\n        <div class=\"formula\">\n          <p>$$\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix},\\ \\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} \\text{ colinéaires} \\iff x\\,y' - y\\,x' = 0$$</p>\n        </div>\n        <p><strong>Exemple :</strong> $\\vec{u}\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 6 \\\\ -15 \\end{pmatrix}$ : $(-2)\\times(-15) - 5\\times 6 = 30 - 30 = 0$, donc ils sont colinéaires.</p>\n\n        <div class=\"card-tip\">\n          <strong>À quoi ça sert :</strong> la colinéarité permet de prouver que deux droites sont <strong>parallèles</strong>, que trois points sont <strong>alignés</strong> ($\\vec{AB}$ et $\\vec{AC}$ colinéaires), ou de trouver le 4ᵉ sommet d'un parallélogramme ($\\vec{AB} = \\vec{DC}$).\n        </div>\n      ",
        "exercises": [
          {
            "id": "vec_n1",
            "level": 1,
            "title": "Niveau 1 : Coordonnées de vecteurs",
            "question": "<p>Soient $A(2; -1)$ et $B(5; 3)$. Calculer les coordonnées de $\\vec{AB}$.</p>",
            "options": [
              {
                "text": "$\\vec{AB} \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
                "isCorrect": true
              },
              {
                "text": "$\\vec{AB} \\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$",
                "isCorrect": false
              },
              {
                "text": "$\\vec{AB} \\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$x = x_B - x_A = 5 - 2 = 3$</p>\n            <p>$y = y_B - y_A = 3 - (-1) = 4$</p>\n          "
          },
          {
            "id": "vec_n6",
            "level": 1,
            "title": "Niveau 1 : Vecteur opposé",
            "question": "<p>On a $\\vec{AB}\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$. Quelles sont les coordonnées de $\\vec{BA}$ ?</p>",
            "options": [
              {
                "text": "$\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$",
                "isCorrect": true
              },
              {
                "text": "$\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$",
                "isCorrect": false
              },
              {
                "text": "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 1)</h4>\n            <p>$\\vec{BA}$ est le vecteur opposé de $\\vec{AB}$ : il a la même direction et la même longueur, mais le sens contraire.</p>\n            <p>On change donc le signe de chaque coordonnée : $\\vec{BA}\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$.</p>\n          "
          },
          {
            "id": "vec_n2",
            "level": 2,
            "title": "Niveau 2 : Opérations sur les vecteurs",
            "question": "<p>On a $\\vec{u} \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$ et $\\vec{v} \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$. Quelles sont les coordonnées de $\\vec{w} = 2\\vec{u} - \\vec{v}$ ?</p>",
            "options": [
              {
                "text": "$\\vec{w} \\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$",
                "isCorrect": true
              },
              {
                "text": "$\\vec{w} \\begin{pmatrix} -1 \\\\ 10 \\end{pmatrix}$",
                "isCorrect": false
              },
              {
                "text": "$\\vec{w} \\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 2)</h4>\n            <p>Pour les abscisses : $2(1) - (-3) = 2 + 3 = 5$</p>\n            <p>Pour les ordonnées : $2(4) - 2 = 8 - 2 = 6$</p>\n          "
          },
          {
            "id": "vec_n3",
            "level": 3,
            "title": "Niveau 3 : Colinéarité",
            "question": "<p>Les vecteurs $\\vec{u} \\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$ et $\\vec{v} \\begin{pmatrix} 6 \\\\ -15 \\end{pmatrix}$ sont-ils colinéaires ?</p>",
            "options": [
              {
                "text": "Oui",
                "isCorrect": true
              },
              {
                "text": "Non",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 3)</h4>\n            <p>On remarque que $\\vec{v} = -3 \\vec{u}$ car $6 = -3 \\times (-2)$ et $-15 = -3 \\times 5$. Les vecteurs sont proportionnels, donc colinéaires.</p>\n          "
          },
          {
            "id": "vec_n4",
            "level": 3,
            "title": "Niveau 3 : Trouver un point pour former un parallélogramme",
            "question": "<p>On donne $A(-1;2)$, $B(3;1)$ et $C(5;4)$. Quelles sont les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme ?</p>",
            "options": [
              {
                "text": "$D(1;5)$",
                "isCorrect": true
              },
              {
                "text": "$D(9;3)$",
                "isCorrect": false
              },
              {
                "text": "$D(-3;5)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 3)</h4>\n            <p>$ABCD$ est un parallélogramme si et seulement si $\\vec{AD} = \\vec{BC}$ (les côtés opposés $[AD]$ et $[BC]$ sont représentés par des vecteurs égaux).</p>\n            <p>Calculons $\\vec{BC}(x_C - x_B ; y_C - y_B) = \\vec{BC}(5-3 ; 4-1) = \\vec{BC}(2;3)$.</p>\n            <p>On veut $\\vec{AD} = \\vec{BC}$, donc $(x_D - x_A ; y_D - y_A) = (2;3)$, soit :</p>\n            <p>$x_D = x_A + 2 = -1+2 = 1$ et $y_D = y_A + 3 = 2+3 = 5$.</p>\n            <p>Donc $D(1;5)$.</p>\n          "
          },
          {
            "id": "vec_n5",
            "level": 3,
            "title": "Niveau 3 : Déterminer un paramètre pour avoir la colinéarité",
            "question": "<p>Pour quelle valeur de $m$ les vecteurs $\\vec{u}(2;m)$ et $\\vec{v}(6;9)$ sont-ils colinéaires ?</p>",
            "options": [
              {
                "text": "$m = 3$",
                "isCorrect": true
              },
              {
                "text": "$m = 4,5$",
                "isCorrect": false
              },
              {
                "text": "$m = 18$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>Deux vecteurs $\\vec{u}(x;y)$ et $\\vec{v}(x';y')$ sont colinéaires si et seulement si $xy' - yx' = 0$.</p>\n            <p>Ici : $2 \\times 9 - m \\times 6 = 0$, soit $18 - 6m = 0$.</p>\n            <p>On résout : $6m = 18$, donc $m = \\frac{18}{6} = 3$.</p>\n            <p><em>Vérification :</em> avec $m=3$, $\\vec{u}(2;3)$ et $\\vec{v}(6;9) = 3 \\times \\vec{u}$. On retrouve bien que $\\vec{v}$ est un multiple de $\\vec{u}$, donc colinéaire.</p>\n          "
          }
        ],
        "yearLevel": "2de"
      },
      {
        "id": "equations_cartesiennes",
        "title": "Chapitre 4 : Équations cartésiennes de droites",
        "icon": "📏",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Tu connais déjà la forme réduite d'une droite, $y=ax+b$. Il existe une autre façon d'écrire l'équation d'une droite, la <strong>forme cartésienne</strong>, qui a un avantage immense : elle permet de représenter <strong>toutes</strong> les droites, y compris les droites verticales (que la forme réduite ne peut pas décrire, car elles n'ont pas de coefficient directeur).</p>\n\n        <h3>1. La forme cartésienne</h3>\n        <div class=\"formula\">\n          <p>$$ax + by + c = 0 \\qquad \\text{avec } (a;b) \\neq (0;0)$$</p>\n        </div>\n        <p>Toute droite du plan peut s'écrire sous cette forme, où $a$, $b$ et $c$ sont des nombres réels.</p>\n\n        <h3>2. Passer de la forme réduite à la forme cartésienne</h3>\n        <p>C'est très simple : on regroupe tous les termes du même côté de l'égalité.</p>\n        <p><strong>Exemple :</strong> $y = 2x-3$ devient $2x - y - 3 = 0$ (on a juste tout mis à gauche).</p>\n\n        <h3>3. Le vecteur directeur d'une droite</h3>\n        <p>Une droite d'équation cartésienne $ax+by+c=0$ admet pour <strong>vecteur directeur</strong> le vecteur $\\vec{u}(-b ; a)$.</p>\n        <div class=\"card-tip\">\n          <strong>Astuce mnémotechnique :</strong> on \"échange $a$ et $b$, puis on change un des deux signes\" pour obtenir le vecteur directeur à partir de l'équation cartésienne.\n        </div>\n        <p><strong>Exemple :</strong> la droite $3x+2y-6=0$ a pour vecteur directeur $\\vec{u}(-2;3)$.</p>\n\n        <h3>4. Trouver l'équation cartésienne connaissant un point et un vecteur directeur</h3>\n        <p>Si une droite passe par le point $A(x_0;y_0)$ et a pour vecteur directeur $\\vec{u}(\\alpha;\\beta)$, alors un point $M(x;y)$ appartient à cette droite si et seulement si $\\vec{AM}$ et $\\vec{u}$ sont colinéaires, ce qui donne :</p>\n        <div class=\"formula\">\n          <p>$$\\beta(x-x_0) - \\alpha(y-y_0) = 0$$</p>\n        </div>\n        <p><strong>Exemple :</strong> Droite passant par $A(1;2)$ de vecteur directeur $\\vec{u}(3;-1)$ :</p>\n        <p>$$-1(x-1) - 3(y-2) = 0 \\Rightarrow -x+1-3y+6=0 \\Rightarrow -x-3y+7=0$$</p>\n\n        <h3>5. Droites parallèles et perpendiculaires</h3>\n        <p>Pour deux droites d'équations $ax+by+c=0$ et $a'x+b'y+c'=0$ :</p>\n        <ul>\n          <li>Elles sont <strong>parallèles</strong> si et seulement si $ab'-a'b=0$ (les vecteurs directeurs sont colinéaires).</li>\n          <li>Elles sont <strong>perpendiculaires</strong> si et seulement si $aa'+bb'=0$.</li>\n        </ul>\n        <p><strong>Exemple :</strong> $2x+3y-1=0$ et $3x-2y+7=0$ : on calcule $a a' + b b' = 2\\times3 + 3\\times(-2) = 6-6=0$. Les deux droites sont donc perpendiculaires.</p>\n      ",
        "exercises": [
          {
            "id": "eqd_n1",
            "level": 1,
            "title": "Niveau 1 : Passer de la forme réduite à la forme cartésienne",
            "question": "<p>Écrire l'équation $y = 2x - 3$ sous forme cartésienne $ax+by+c=0$.</p>",
            "options": [
              {
                "text": "$2x - y - 3 = 0$",
                "isCorrect": true
              },
              {
                "text": "$2x + y - 3 = 0$",
                "isCorrect": false
              },
              {
                "text": "$x - 2y - 3 = 0$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>On part de $y=2x-3$ et on regroupe tous les termes à gauche de l'égalité (on soustrait $y$ des deux côtés) :</p>\n            <p>$$0 = 2x - 3 - y \\quad \\text{soit} \\quad 2x - y - 3 = 0$$</p>\n            <p><em>Vérification :</em> au point $(2;1)$ qui vérifie $y=2x-3$ (car $2\\times2-3=1$), on a bien $2\\times2-1-3=4-1-3=0$ ✓.</p>\n          "
          },
          {
            "id": "eqd_n2",
            "level": 1,
            "title": "Niveau 1 : Identifier un vecteur directeur",
            "question": "<p>Quel est un vecteur directeur de la droite d'équation $3x+2y-6=0$ ?</p>",
            "options": [
              {
                "text": "$\\vec{u}(-2;3)$",
                "isCorrect": true
              },
              {
                "text": "$\\vec{u}(3;2)$",
                "isCorrect": false
              },
              {
                "text": "$\\vec{u}(2;3)$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Pour une droite d'équation $ax+by+c=0$, un vecteur directeur est $\\vec{u}(-b;a)$.</p>\n            <p>Ici $a=3$ et $b=2$, donc un vecteur directeur est $\\vec{u}(-2;3)$.</p>\n          "
          },
          {
            "id": "eqd_n3",
            "level": 2,
            "title": "Niveau 2 : Trouver l'équation à partir d'un point et d'un vecteur directeur",
            "question": "<p>Déterminer une équation cartésienne de la droite passant par $A(1;2)$ et de vecteur directeur $\\vec{u}(3;-1)$.</p>",
            "options": [
              {
                "text": "$-x - 3y + 7 = 0$",
                "isCorrect": true
              },
              {
                "text": "$3x - y - 1 = 0$",
                "isCorrect": false
              },
              {
                "text": "$x + 3y - 7 = 0$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On utilise la formule $\\beta(x-x_0) - \\alpha(y-y_0) = 0$ avec $A(x_0;y_0)=(1;2)$ et $\\vec{u}(\\alpha;\\beta)=(3;-1)$ :</p>\n            <p>$$-1(x-1) - 3(y-2) = 0$$</p>\n            <p>On développe : $-x+1-3y+6=0$, soit $-x-3y+7=0$.</p>\n            <p><em>Vérification du point $A$ :</em> $-1-3\\times2+7=-1-6+7=0$ ✓.</p>\n            <p><em>Vérification de la direction :</em> le point $A+\\vec{u} = (1+3;2-1)=(4;1)$ doit aussi vérifier l'équation : $-4-3\\times1+7=-4-3+7=0$ ✓.</p>\n          "
          },
          {
            "id": "eqd_n4",
            "level": 2,
            "title": "Niveau 2 : Tester le parallélisme de deux droites",
            "question": "<p>Les droites $d_1 : 2x+3y-1=0$ et $d_2 : 4x+6y+5=0$ sont-elles parallèles ?</p>",
            "options": [
              {
                "text": "Oui, car $2\\times6 - 3\\times4 = 0$",
                "isCorrect": true
              },
              {
                "text": "Non, car les constantes $-1$ et $5$ sont différentes",
                "isCorrect": false
              },
              {
                "text": "On ne peut pas savoir sans tracer les droites",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>Deux droites $ax+by+c=0$ et $a'x+b'y+c'=0$ sont parallèles si et seulement si $ab'-a'b=0$.</p>\n            <p>Ici $a=2,b=3$ et $a'=4,b'=6$ :</p>\n            <p>$$ab'-a'b = 2\\times6 - 4\\times3 = 12-12=0$$</p>\n            <p>Les deux droites sont donc parallèles (on remarque d'ailleurs que $(a';b')=(4;6)=2\\times(2;3)=2\\times(a;b)$ : les coefficients sont proportionnels).</p>\n            <p><em>Remarque :</em> la valeur de $c$ n'intervient jamais dans le test de parallélisme — elle ne sert qu'à savoir si les droites sont confondues ou strictement parallèles.</p>\n          "
          },
          {
            "id": "eqd_n5",
            "level": 3,
            "title": "Niveau 3 : Tester la perpendicularité de deux droites",
            "question": "<p>Les droites $d_1 : 2x+3y-1=0$ et $d_2 : 3x-2y+7=0$ sont-elles perpendiculaires ?</p>",
            "options": [
              {
                "text": "Oui, car $2\\times3 + 3\\times(-2) = 0$",
                "isCorrect": true
              },
              {
                "text": "Non, car leurs coefficients ne sont pas proportionnels",
                "isCorrect": false
              },
              {
                "text": "Oui, car elles ont le même vecteur directeur",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>Deux droites $ax+by+c=0$ et $a'x+b'y+c'=0$ sont perpendiculaires si et seulement si $aa'+bb'=0$.</p>\n            <p>Ici $a=2,b=3$ et $a'=3,b'=-2$ :</p>\n            <p>$$aa'+bb' = 2\\times3 + 3\\times(-2) = 6-6=0$$</p>\n            <p>Les deux droites sont donc perpendiculaires.</p>\n            <p><em>Remarque :</em> on peut le vérifier avec les vecteurs directeurs : $\\vec{u_1}(-3;2)$ pour $d_1$ et $\\vec{u_2}(2;3)$ pour $d_2$. Leur produit scalaire est $(-3)\\times2 + 2\\times3 = -6+6=0$, ce qui confirme la perpendicularité.</p>\n          "
          },
          {
            "id": "eqd_n6",
            "level": 3,
            "title": "Niveau 3 : Déterminer une droite parallèle passant par un point donné",
            "question": "<p>Déterminer une équation cartésienne de la droite $d'$ parallèle à $d : 2x-y+3=0$ et passant par le point $B(1;4)$.</p>",
            "options": [
              {
                "text": "$2x - y + 2 = 0$",
                "isCorrect": true
              },
              {
                "text": "$2x - y + 3 = 0$",
                "isCorrect": false
              },
              {
                "text": "$x - 2y + 7 = 0$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>Deux droites parallèles ont les mêmes coefficients $a$ et $b$ (à un facteur multiplicatif près) : on garde donc $a=2$ et $b=-1$, et on cherche la nouvelle constante $c'$.</p>\n            <p>L'équation de $d'$ est de la forme $2x-y+c'=0$. Comme $d'$ passe par $B(1;4)$ :</p>\n            <p>$$2\\times1 - 4 + c' = 0 \\Rightarrow 2-4+c'=0 \\Rightarrow c' = 2$$</p>\n            <p>L'équation de $d'$ est donc $2x-y+2=0$.</p>\n            <p><em>Vérification :</em> $2\\times1-4+2=2-4+2=0$ ✓.</p>\n          "
          }
        ],
        "yearLevel": "2de"
      },
      {
        "id": "trigonometrie",
        "title": "Chapitre 3 : Trigonométrie dans le triangle rectangle",
        "icon": "📐",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>La trigonométrie permet de calculer des longueurs ou des angles dans un triangle rectangle <strong>sans avoir besoin de tout mesurer</strong>. C'est un outil essentiel qui reviendra constamment en Première.</p>\n\n        <h3>1. Vocabulaire du triangle rectangle</h3>\n        <p>Dans un triangle rectangle, on choisit un angle aigu (non droit) comme angle de référence, noté $\\widehat{x}$. Les trois côtés ont alors un nom précis par rapport à cet angle :</p>\n        <ul>\n          <li>L'<strong>hypoténuse</strong> : le côté le plus long, toujours opposé à l'angle droit.</li>\n          <li>Le côté <strong>opposé</strong> : le côté qui ne touche pas l'angle $\\widehat{x}$.</li>\n          <li>Le côté <strong>adjacent</strong> : le côté qui touche l'angle $\\widehat{x}$ (sans être l'hypoténuse).</li>\n        </ul>\n        <div class=\"card-warning\">\n          <strong>Attention :</strong> les côtés \"opposé\" et \"adjacent\" changent de nom selon l'angle choisi ! Identifie toujours d'abord l'angle de référence avant de nommer les côtés.\n        </div>\n\n        <h3>2. Les formules CAH-SOH-TOA</h3>\n        <p>Le moyen mnémotechnique <strong>CAH-SOH-TOA</strong> permet de retenir les trois formules fondamentales :</p>\n        <div class=\"formula\">\n          <p>$$\\cos(\\widehat{x}) = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}} \\qquad \\sin(\\widehat{x}) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}} \\qquad \\tan(\\widehat{x}) = \\frac{\\text{Opposé}}{\\text{Adjacent}}$$</p>\n        </div>\n        <p><strong>Exemple concret :</strong> Dans un triangle rectangle d'hypoténuse $10$ cm, avec un angle de $30°$, le côté opposé à cet angle mesure :</p>\n        <p>$$\\text{Opposé} = \\sin(30°) \\times \\text{Hypoténuse} = 0,5 \\times 10 = 5 \\text{ cm}$$</p>\n\n        <div class=\"card-tip\">\n          <strong>Astuce :</strong> pour choisir la bonne formule, demande-toi quels sont les <strong>deux côtés</strong> qui t'intéressent (ceux que tu connais et celui que tu cherches), puis choisis la formule (cos, sin ou tan) qui relie justement ces deux côtés-là.\n        </div>\n\n        <h3>3. Valeurs remarquables à connaître par cœur</h3>\n        <table style=\"width:100%; text-align:center; border-collapse: collapse; margin: 1em 0;\">\n          <tr style=\"border-bottom: 2px solid #ccc;\"><th>Angle</th><th>$30°$</th><th>$45°$</th><th>$60°$</th></tr>\n          <tr><td><strong>$\\sin$</strong></td><td>$\\frac{1}{2}$</td><td>$\\frac{\\sqrt{2}}{2}$</td><td>$\\frac{\\sqrt{3}}{2}$</td></tr>\n          <tr><td><strong>$\\cos$</strong></td><td>$\\frac{\\sqrt{3}}{2}$</td><td>$\\frac{\\sqrt{2}}{2}$</td><td>$\\frac{1}{2}$</td></tr>\n          <tr><td><strong>$\\tan$</strong></td><td>$\\frac{\\sqrt{3}}{3}$</td><td>$1$</td><td>$\\sqrt{3}$</td></tr>\n        </table>\n\n        <h3>4. La formule fondamentale</h3>\n        <p>Pour tout angle $\\widehat{x}$, la relation suivante est toujours vraie (elle découle du théorème de Pythagore appliqué au triangle rectangle) :</p>\n        <div class=\"formula\">\n          <p>$$\\cos^2(\\widehat{x}) + \\sin^2(\\widehat{x}) = 1$$</p>\n        </div>\n        <p>Cette formule permet de retrouver $\\sin$ si on connaît $\\cos$ (ou inversement), sans connaître les longueurs du triangle.</p>\n      ",
        "exercises": [
          {
            "id": "trig_n1",
            "level": 1,
            "title": "Niveau 1 : Identifier les côtés",
            "question": "<p>Dans un triangle rectangle $ABC$ rectangle en $A$, on considère l'angle $\\widehat{ABC}$. Quel est le côté <strong>opposé</strong> à cet angle ?</p>",
            "options": [
              {
                "text": "Le côté $[AC]$",
                "isCorrect": true
              },
              {
                "text": "Le côté $[AB]$",
                "isCorrect": false
              },
              {
                "text": "Le côté $[BC]$ (l'hypoténuse)",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>L'angle de référence est $\\widehat{ABC}$, donc le sommet de l'angle est $B$. Les deux côtés qui touchent $B$ sont $[BA]$ et $[BC]$.</p>\n            <p>$[BC]$ est l'hypoténuse (côté opposé à l'angle droit en $A$), donc le côté adjacent à $\\widehat{ABC}$ (qui n'est pas l'hypoténuse) est $[AB]$.</p>\n            <p>Le côté <strong>opposé</strong> à $\\widehat{ABC}$ est donc celui qui ne touche pas $B$ : c'est $[AC]$.</p>\n          "
          },
          {
            "id": "trig_n2",
            "level": 1,
            "title": "Niveau 1 : Appliquer une formule directement",
            "question": "<p>Dans un triangle rectangle, l'hypoténuse mesure $10$ cm et un angle aigu mesure $30°$. Quelle est la longueur du côté opposé à cet angle ?</p>",
            "options": [
              {
                "text": "$5$ cm",
                "isCorrect": true
              },
              {
                "text": "$8,66$ cm",
                "isCorrect": false
              },
              {
                "text": "$3$ cm",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>On connaît l'hypoténuse et on cherche le côté opposé : on utilise donc la formule du <strong>SOH</strong> : $\\sin(\\widehat{x}) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$.</p>\n            <p>On isole l'opposé : $\\text{Opposé} = \\sin(30°) \\times \\text{Hypoténuse}$.</p>\n            <p>Or $\\sin(30°) = 0,5$ (valeur remarquable à connaître). Donc :</p>\n            <p>$$\\text{Opposé} = 0,5 \\times 10 = 5 \\text{ cm}$$</p>\n          "
          },
          {
            "id": "trig_n3",
            "level": 2,
            "title": "Niveau 2 : Calculer une longueur avec le cosinus",
            "question": "<p>Dans un triangle rectangle, l'angle aigu $\\widehat{x}$ mesure $60°$ et le côté adjacent à cet angle mesure $8$ cm. Quelle est la longueur de l'hypoténuse (arrondie au dixième) ?</p>",
            "options": [
              {
                "text": "$16$ cm",
                "isCorrect": true
              },
              {
                "text": "$4$ cm",
                "isCorrect": false
              },
              {
                "text": "$13,9$ cm",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On connaît l'adjacent et on cherche l'hypoténuse : on utilise la formule du <strong>CAH</strong> : $\\cos(\\widehat{x}) = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}}$.</p>\n            <p>On isole l'hypoténuse : $\\text{Hypoténuse} = \\frac{\\text{Adjacent}}{\\cos(\\widehat{x})}$.</p>\n            <p>Or $\\cos(60°) = 0,5$ (valeur remarquable). Donc :</p>\n            <p>$$\\text{Hypoténuse} = \\frac{8}{0,5} = 16 \\text{ cm}$$</p>\n            <p>⚠️ Piège évité : il ne faut pas multiplier par $\\cos(60°)$ mais bien <strong>diviser</strong>, puisque l'adjacent est au numérateur de la formule et qu'on cherche l'hypoténuse (au dénominateur).</p>\n          "
          },
          {
            "id": "trig_n4",
            "level": 2,
            "title": "Niveau 2 : Utiliser la formule fondamentale",
            "question": "<p>On sait que pour un angle aigu $\\widehat{x}$, $\\cos(\\widehat{x}) = \\frac{3}{5}$. Que vaut $\\sin(\\widehat{x})$ ?</p>",
            "options": [
              {
                "text": "$\\sin(\\widehat{x}) = \\frac{4}{5}$",
                "isCorrect": true
              },
              {
                "text": "$\\sin(\\widehat{x}) = \\frac{2}{5}$",
                "isCorrect": false
              },
              {
                "text": "$\\sin(\\widehat{x}) = \\frac{9}{25}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>On utilise la formule fondamentale : $\\cos^2(\\widehat{x}) + \\sin^2(\\widehat{x}) = 1$.</p>\n            <p>On isole $\\sin^2(\\widehat{x})$ : $\\sin^2(\\widehat{x}) = 1 - \\cos^2(\\widehat{x}) = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{25}{25} - \\frac{9}{25} = \\frac{16}{25}$.</p>\n            <p>Comme $\\widehat{x}$ est un angle aigu, $\\sin(\\widehat{x})$ est positif. On prend donc la racine carrée positive :</p>\n            <p>$$\\sin(\\widehat{x}) = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$$</p>\n            <p><em>Vérification :</em> $\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 = \\frac{9}{25} + \\frac{16}{25} = \\frac{25}{25} = 1$ ✓ (on reconnaît le triangle 3-4-5 !)</p>\n          "
          },
          {
            "id": "trig_n5",
            "level": 3,
            "title": "Niveau 3 : Calculer un angle (problème contextualisé)",
            "question": "<p>Une échelle de $6$ m est posée contre un mur, en faisant un angle de $70°$ avec le sol. Quelle hauteur (arrondie au dixième de mètre) l'échelle atteint-elle sur le mur ?</p>",
            "options": [
              {
                "text": "Environ $5,6$ m",
                "isCorrect": true
              },
              {
                "text": "Environ $2,1$ m",
                "isCorrect": false
              },
              {
                "text": "Environ $6,4$ m",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p><strong>Schéma mental :</strong> l'échelle forme l'hypoténuse du triangle rectangle (longueur $6$ m). L'angle avec le sol ($70°$) est l'angle de référence. La hauteur atteinte sur le mur est le côté <strong>opposé</strong> à cet angle (le mur est vertical, perpendiculaire au sol).</p>\n            <p>On connaît l'hypoténuse et on cherche l'opposé : on utilise donc le <strong>SOH</strong> :</p>\n            <p>$$\\text{Hauteur} = \\sin(70°) \\times 6$$</p>\n            <p>À la calculatrice (en mode degrés) : $\\sin(70°) \\approx 0,9397$.</p>\n            <p>$$\\text{Hauteur} \\approx 0,9397 \\times 6 \\approx 5,638 \\approx 5,6 \\text{ m}$$</p>\n          "
          },
          {
            "id": "trig_n6",
            "level": 3,
            "title": "Niveau 3 : Déterminer un angle à partir de deux côtés",
            "question": "<p>Dans un triangle rectangle, le côté adjacent à un angle $\\widehat{x}$ mesure $5$ cm et l'hypoténuse mesure $13$ cm. Quelle est la mesure de l'angle $\\widehat{x}$, arrondie au degré près ?</p>",
            "options": [
              {
                "text": "Environ $67°$",
                "isCorrect": true
              },
              {
                "text": "Environ $23°$",
                "isCorrect": false
              },
              {
                "text": "Environ $50°$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>On connaît l'adjacent ($5$) et l'hypoténuse ($13$) : on utilise le <strong>CAH</strong> :</p>\n            <p>$$\\cos(\\widehat{x}) = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}} = \\frac{5}{13} \\approx 0,3846$$</p>\n            <p>Pour retrouver l'angle à partir de son cosinus, on utilise la touche $\\cos^{-1}$ (ou $\\arccos$) de la calculatrice :</p>\n            <p>$$\\widehat{x} = \\cos^{-1}(0,3846) \\approx 67,4° \\approx 67°$$</p>\n            <p><em>Remarque :</em> on reconnaît ici le triangle \"5-12-13\" (un triangle rectangle à côtés entiers, comme le triangle \"3-4-5\") : le troisième côté mesurerait $12$ cm, puisque $5^2+12^2=25+144=169=13^2$.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      }
    ]
  },
  {
    "id": "module4",
    "title": "Module 4 : Probabilités et Statistiques",
    "description": "Les arbres de probabilité et les statistiques descriptives.",
    "chapters": [
      {
        "id": "pourcentages_ecart_type",
        "title": "Chapitre 4 : Pourcentages, évolutions et écart-type",
        "icon": "📊",
        "courseHtml": "\n        <h3>Partie A — Pourcentages et évolutions</h3>\n\n        <h4>1. Calculer un pourcentage</h4>\n        <p>Calculer $t\\%$ d'une quantité $N$, c'est calculer $\\frac{t}{100} \\times N$.</p>\n        <p><strong>Exemple :</strong> $15\\%$ de $80$ vaut $\\frac{15}{100} \\times 80 = 0,15 \\times 80 = 12$.</p>\n\n        <h4>2. Le coefficient multiplicateur</h4>\n        <p>Augmenter une quantité de $t\\%$, c'est la multiplier par le <strong>coefficient multiplicateur</strong> $\\left(1+\\frac{t}{100}\\right)$. Diminuer une quantité de $t\\%$, c'est la multiplier par $\\left(1-\\frac{t}{100}\\right)$.</p>\n        <div class=\"formula\">\n          <p>$$\\text{Augmentation de } t\\% : \\times \\left(1+\\frac{t}{100}\\right) \\qquad \\text{Diminution de } t\\% : \\times \\left(1-\\frac{t}{100}\\right)$$</p>\n        </div>\n        <p><strong>Exemple :</strong> Un article à $50$ € augmente de $20\\%$. Son nouveau prix est $50 \\times 1,20 = 60$ €.</p>\n\n        <div class=\"card-warning\">\n          <strong>Piège très classique :</strong> une hausse de $20\\%$ suivie d'une baisse de $20\\%$ <strong>ne ramène pas</strong> au prix initial ! Le coefficient global est $1,20 \\times 0,80 = 0,96$, soit une <strong>baisse</strong> de $4\\%$ par rapport au prix de départ.\n        </div>\n\n        <h4>3. Évolutions successives et taux global</h4>\n        <p>Pour calculer l'effet de plusieurs évolutions successives, on <strong>multiplie</strong> les coefficients multiplicateurs entre eux (on ne les additionne jamais).</p>\n        <p><strong>Exemple :</strong> Une quantité augmente de $5\\%$ deux années consécutives. Le coefficient global sur les deux ans est :</p>\n        <p>$$1,05 \\times 1,05 = 1,05^2 = 1,1025$$</p>\n        <p>Ce qui correspond à une augmentation globale de $10,25\\%$ (et non $10\\%$, car les intérêts se cumulent).</p>\n\n        <h3>Partie B — L'écart-type</h3>\n\n        <h4>1. À quoi sert l'écart-type ?</h4>\n        <p>La moyenne d'une série de valeurs ne dit pas tout : deux séries peuvent avoir la même moyenne mais être très différentes (l'une très \"regroupée\" autour de la moyenne, l'autre très \"dispersée\"). L'<strong>écart-type</strong> mesure cette dispersion : plus il est grand, plus les valeurs sont étalées autour de la moyenne.</p>\n\n        <h4>2. Calculer l'écart-type</h4>\n        <p>Pour une série de valeurs $x_1, x_2, \\dots, x_n$ de moyenne $\\bar{x}$, on procède en trois étapes :</p>\n        <p>1. Calculer la moyenne $\\bar{x}$.<br>\n        2. Calculer la <strong>variance</strong> $V$ : la moyenne des carrés des écarts à la moyenne.<br>\n        3. L'écart-type $\\sigma$ est la racine carrée de la variance.</p>\n        <div class=\"formula\">\n          <p>$$V = \\frac{(x_1-\\bar{x})^2 + (x_2-\\bar{x})^2 + \\dots + (x_n-\\bar{x})^2}{n} \\qquad \\qquad \\sigma = \\sqrt{V}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> Série $2, 4, 4, 4, 5, 5, 7, 9$ (8 valeurs).</p>\n        <p>Moyenne : $\\bar{x} = \\frac{2+4+4+4+5+5+7+9}{8} = \\frac{40}{8} = 5$.</p>\n        <p>Écarts au carré : $(2-5)^2=9$ ; $(4-5)^2=1$ (trois fois) ; $(5-5)^2=0$ (deux fois) ; $(7-5)^2=4$ ; $(9-5)^2=16$.</p>\n        <p>Variance : $V = \\frac{9+1+1+1+0+0+4+16}{8} = \\frac{32}{8} = 4$.</p>\n        <p>Écart-type : $\\sigma = \\sqrt{4} = 2$.</p>\n\n        <div class=\"card-tip\">\n          <strong>Astuce :</strong> l'écart-type a la <strong>même unité</strong> que les valeurs de la série (contrairement à la variance, qui est dans une unité \"au carré\"). C'est pour cela qu'on le préfère pour décrire concrètement la dispersion.\n        </div>\n      ",
        "exercises": [
          {
            "id": "pct_n1",
            "level": 1,
            "title": "Niveau 1 : Calculer un pourcentage direct",
            "question": "<p>Calculer $15\\%$ de $80$.</p>",
            "options": [
              {
                "text": "$12$",
                "isCorrect": true
              },
              {
                "text": "$15$",
                "isCorrect": false
              },
              {
                "text": "$1,2$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$15\\%$ de $80$ se calcule par $\\frac{15}{100} \\times 80$.</p>\n            <p>$$\\frac{15}{100} \\times 80 = 0,15 \\times 80 = 12$$</p>\n          "
          },
          {
            "id": "pct_n2",
            "level": 1,
            "title": "Niveau 1 : Appliquer une augmentation",
            "question": "<p>Un article coûte $50$ €. Son prix augmente de $20\\%$. Quel est le nouveau prix ?</p>",
            "options": [
              {
                "text": "$60$ €",
                "isCorrect": true
              },
              {
                "text": "$70$ €",
                "isCorrect": false
              },
              {
                "text": "$52$ €",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p>Augmenter de $20\\%$, c'est multiplier par le coefficient $1+\\frac{20}{100} = 1,20$.</p>\n            <p>$$50 \\times 1,20 = 60 \\text{ €}$$</p>\n          "
          },
          {
            "id": "pct_n3",
            "level": 2,
            "title": "Niveau 2 : Évolutions successives (hausse puis baisse)",
            "question": "<p>Un prix augmente de $10\\%$, puis ce nouveau prix diminue de $10\\%$. Le prix final est-il égal au prix initial ?</p>",
            "options": [
              {
                "text": "Non, le prix final est inférieur au prix initial (coefficient global $0,99$)",
                "isCorrect": true
              },
              {
                "text": "Oui, les deux évolutions s'annulent exactement",
                "isCorrect": false
              },
              {
                "text": "Non, le prix final est supérieur au prix initial",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p>On multiplie les coefficients multiplicateurs des deux évolutions successives :</p>\n            <p>$$1,10 \\times 0,90 = 0,99$$</p>\n            <p>Le coefficient global est $0,99 < 1$ : le prix final est donc <strong>inférieur</strong> de $1\\%$ au prix initial.</p>\n            <p>⚠️ C'est le piège classique des pourcentages : $+10\\%$ puis $-10\\%$ ne ramène jamais à la valeur de départ, sauf si les deux taux portent sur des valeurs identiques (ce qui n'est pas le cas ici, car la baisse de $10\\%$ s'applique au prix déjà augmenté).</p>\n          "
          },
          {
            "id": "pct_n4",
            "level": 2,
            "title": "Niveau 2 : Calculer la moyenne et la variance d'une série",
            "question": "<p>On donne la série de notes $5, 7, 8, 10$. Quelle est sa moyenne ?</p>",
            "options": [
              {
                "text": "$7,5$",
                "isCorrect": true
              },
              {
                "text": "$7$",
                "isCorrect": false
              },
              {
                "text": "$30$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>La moyenne est la somme des valeurs divisée par leur nombre :</p>\n            <p>$$\\bar{x} = \\frac{5+7+8+10}{4} = \\frac{30}{4} = 7,5$$</p>\n          "
          },
          {
            "id": "pct_n5",
            "level": 3,
            "title": "Niveau 3 : Calculer un taux d'évolution global sur plusieurs années",
            "question": "<p>Une population augmente de $5\\%$ chaque année pendant deux années consécutives. Quel est le taux d'évolution global sur ces deux ans ?</p>",
            "options": [
              {
                "text": "$10,25\\%$",
                "isCorrect": true
              },
              {
                "text": "$10\\%$",
                "isCorrect": false
              },
              {
                "text": "$25\\%$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p>Le coefficient multiplicateur d'une année est $1,05$. Sur deux années consécutives, on multiplie ce coefficient par lui-même :</p>\n            <p>$$1,05 \\times 1,05 = 1,05^2 = 1,1025$$</p>\n            <p>Le coefficient global $1,1025$ correspond à une augmentation de $(1,1025-1) \\times 100 = 10,25\\%$.</p>\n            <p>⚠️ Le taux global n'est <strong>pas</strong> simplement $5\\%+5\\%=10\\%$ : les augmentations se cumulent de façon multiplicative, pas additive.</p>\n          "
          },
          {
            "id": "pct_n6",
            "level": 3,
            "title": "Niveau 3 : Calculer un écart-type complet",
            "question": "<p>On donne la série $2, 4, 4, 4, 5, 5, 7, 9$. Quel est son écart-type ?</p>",
            "options": [
              {
                "text": "$\\sigma = 2$",
                "isCorrect": true
              },
              {
                "text": "$\\sigma = 4$",
                "isCorrect": false
              },
              {
                "text": "$\\sigma = 16$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p><strong>Étape 1 — Moyenne :</strong> $\\bar{x} = \\frac{2+4+4+4+5+5+7+9}{8} = \\frac{40}{8} = 5$.</p>\n            <p><strong>Étape 2 — Variance :</strong> on calcule chaque écart à la moyenne, on l'élève au carré, puis on fait la moyenne de ces carrés :</p>\n            <p>$(2-5)^2=9$, $(4-5)^2=1$ (×3), $(5-5)^2=0$ (×2), $(7-5)^2=4$, $(9-5)^2=16$.</p>\n            <p>$$V = \\frac{9+1+1+1+0+0+4+16}{8} = \\frac{32}{8} = 4$$</p>\n            <p><strong>Étape 3 — Écart-type :</strong> $\\sigma = \\sqrt{V} = \\sqrt{4} = 2$.</p>\n          "
          }
        ],
        "yearLevel": "4e→2de"
      },
      {
        "id": "statistiques",
        "title": "Chapitre 1 : Statistiques descriptives",
        "icon": "📊",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Les statistiques servent à <strong>résumer</strong> une série de données par quelques nombres clés. On distingue les indicateurs de <strong>position</strong> (moyenne, médiane), qui donnent une valeur « centrale », et les indicateurs de <strong>dispersion</strong> (étendue), qui mesurent l'écart entre les valeurs.</p>\n\n        <h3>1. La moyenne</h3>\n        <p>La moyenne $\\bar{x}$ est la somme de toutes les valeurs divisée par l'effectif total $N$ :</p>\n        <div class=\"formula\">\n          <p>$$\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_N}{N}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> pour la série $10, 12, 14, 16$ : $\\bar{x} = \\dfrac{10+12+14+16}{4} = \\dfrac{52}{4} = 13$.</p>\n\n        <h3>2. La médiane</h3>\n        <p>La médiane partage la série <strong>ordonnée</strong> en deux groupes de même effectif : au moins 50 % des valeurs lui sont inférieures ou égales, au moins 50 % supérieures ou égales.</p>\n        <div class=\"card-tip\">\n          <strong>Méthode :</strong> on range d'abord les valeurs dans l'ordre croissant. Si l'effectif $N$ est <strong>impair</strong>, la médiane est la valeur du milieu. Si $N$ est <strong>pair</strong>, c'est la moyenne des deux valeurs centrales.\n        </div>\n        <p><strong>Exemple :</strong> série $3, 7, 8, 12, 15$ (déjà ordonnée, $N = 5$ impair) : la valeur centrale est la 3ᵉ, donc la médiane vaut $8$.</p>\n\n        <div class=\"card-warning\">\n          <strong>Moyenne ≠ médiane :</strong> la moyenne est sensible aux valeurs extrêmes, pas la médiane. Une seule valeur très grande peut tirer la moyenne vers le haut sans bouger la médiane.\n        </div>\n\n        <h3>3. L'étendue</h3>\n        <p>L'étendue mesure la dispersion : c'est la différence entre la plus grande et la plus petite valeur. Pour $3, 7, 8, 12, 15$, l'étendue vaut $15 - 3 = 12$.</p>\n        <div class=\"card-tip\">\n          L'écart-type, autre indicateur de dispersion plus fin, est étudié en détail dans le chapitre « Pourcentages, évolutions et écart-type ».\n        </div>\n      ",
        "exercises": [
          {
            "id": "stat_n1",
            "level": 1,
            "title": "Niveau 1 : Moyenne",
            "question": "<p>Calculer la moyenne de la série : 10, 12, 14, 16.</p>",
            "options": [
              {
                "text": "13",
                "isCorrect": true
              },
              {
                "text": "14",
                "isCorrect": false
              },
              {
                "text": "12",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>Moyenne = $\\frac{10 + 12 + 14 + 16}{4} = \\frac{52}{4} = 13$.</p>\n          "
          },
          {
            "id": "stat_n2",
            "level": 2,
            "title": "Niveau 2 : Médiane",
            "question": "<p>Quelle est la médiane de la série : 3, 7, 8, 12, 15 ?</p>",
            "options": [
              {
                "text": "8",
                "isCorrect": true
              },
              {
                "text": "7",
                "isCorrect": false
              },
              {
                "text": "9",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 2)</h4>\n            <p>La série est ordonnée. Il y a 5 valeurs (impair). La médiane est la 3ème valeur : 8.</p>\n          "
          },
          {
            "id": "stat_n3",
            "level": 2,
            "title": "Niveau 2 : Médiane d'un effectif pair",
            "question": "<p>Quelle est la médiane de la série ordonnée : $4, 6, 9, 11, 14, 20$ ?</p>",
            "options": [
              {
                "text": "$10$",
                "isCorrect": true
              },
              {
                "text": "$9$",
                "isCorrect": false
              },
              {
                "text": "$11$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 2)</h4>\n            <p>L'effectif est $N = 6$ (pair). La médiane est la moyenne des deux valeurs centrales, c'est-à-dire la 3ᵉ et la 4ᵉ : $9$ et $11$.</p>\n            <p>Médiane $= \\dfrac{9 + 11}{2} = \\dfrac{20}{2} = 10$.</p>\n          "
          },
          {
            "id": "stat_n4",
            "level": 3,
            "title": "Niveau 3 : Moyenne pondérée par les effectifs",
            "question": "<p>Dans une classe, 5 élèves ont eu $8$, 10 élèves ont eu $12$ et 5 élèves ont eu $16$. Quelle est la moyenne de la classe ?</p>",
            "options": [
              {
                "text": "$12$",
                "isCorrect": true
              },
              {
                "text": "$12{,}5$",
                "isCorrect": false
              },
              {
                "text": "$36$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 3)</h4>\n            <p>On pondère chaque note par son effectif. Effectif total : $5 + 10 + 5 = 20$.</p>\n            <p>Somme des notes : $5\\times 8 + 10\\times 12 + 5\\times 16 = 40 + 120 + 80 = 240$.</p>\n            <p>Moyenne $= \\dfrac{240}{20} = 12$.</p>\n            <p>⚠️ Il ne faut surtout pas faire $\\dfrac{8+12+16}{3}$ : il faut tenir compte du nombre d'élèves ayant obtenu chaque note.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      },
      {
        "id": "probas",
        "title": "Chapitre 2 : Probabilités simples",
        "icon": "🎲",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>Une probabilité mesure la <strong>chance</strong> qu'un événement se produise. Elle s'exprime par un nombre compris entre $0$ (événement impossible) et $1$ (événement certain). C'est une base indispensable pour la Première.</p>\n\n        <h3>1. Vocabulaire</h3>\n        <ul>\n          <li>Une <strong>expérience aléatoire</strong> a plusieurs issues possibles, dont on ne connaît pas le résultat à l'avance (lancer un dé, tirer une carte...).</li>\n          <li>Un <strong>événement</strong> est un ensemble d'issues (par exemple « obtenir un nombre pair »).</li>\n          <li>La probabilité d'un événement $A$ se note $P(A)$, avec $0 \\le P(A) \\le 1$.</li>\n        </ul>\n\n        <h3>2. Situation d'équiprobabilité</h3>\n        <p>Quand toutes les issues ont la même chance de se produire (dé équilibré, tirage au hasard), on calcule :</p>\n        <div class=\"formula\">\n          <p>$$P(A) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$$</p>\n        </div>\n        <p><strong>Exemple :</strong> dans un jeu de 32 cartes, il y a 4 as. La probabilité de tirer un as est $P = \\dfrac{4}{32} = \\dfrac{1}{8}$.</p>\n\n        <h3>3. L'événement contraire</h3>\n        <div class=\"card-tip\">\n          L'événement contraire de $A$, noté $\\overline{A}$, se réalise exactement quand $A$ ne se réalise pas. Leurs probabilités sont liées par : $P(\\overline{A}) = 1 - P(A)$.\n        </div>\n        <p><strong>Exemple :</strong> si $P(A) = 0{,}3$, alors $P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$.</p>\n\n        <h3>4. Réunion et intersection</h3>\n        <p>Pour deux événements, $A \\cup B$ (« $A$ <strong>ou</strong> $B$ ») et $A \\cap B$ (« $A$ <strong>et</strong> $B$ ») sont reliés par :</p>\n        <div class=\"formula\">\n          <p>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</p>\n        </div>\n        <p>On retire $P(A \\cap B)$ pour ne pas compter deux fois les issues communes aux deux événements.</p>\n\n        <div class=\"card-warning\">\n          <strong>Toujours vérifier :</strong> une probabilité est toujours entre $0$ et $1$. Si un calcul donne un résultat négatif ou supérieur à $1$, c'est qu'il y a une erreur.\n        </div>\n      ",
        "exercises": [
          {
            "id": "prob_n1",
            "level": 1,
            "title": "Niveau 1 : Événement contraire",
            "question": "<p>Si la probabilité d'un événement $A$ est $0,3$, quelle est la probabilité de son événement contraire $\\overline{A}$ ?</p>",
            "options": [
              {
                "text": "$P(\\overline{A}) = 0,7$",
                "isCorrect": true
              },
              {
                "text": "$P(\\overline{A}) = 0,3$",
                "isCorrect": false
              },
              {
                "text": "$P(\\overline{A}) = -0,3$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>$P(\\overline{A}) = 1 - P(A) = 1 - 0,3 = 0,7$.</p>\n          "
          },
          {
            "id": "prob_n2",
            "level": 2,
            "title": "Niveau 2 : Équiprobabilité",
            "question": "<p>On tire au hasard une carte dans un jeu de 32 cartes. Quelle est la probabilité de tirer un as ?</p>",
            "options": [
              {
                "text": "$\\frac{1}{8}$",
                "isCorrect": true
              },
              {
                "text": "$\\frac{1}{4}$",
                "isCorrect": false
              },
              {
                "text": "$\\frac{1}{32}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 2)</h4>\n            <p>Il y a 4 as dans un jeu de 32 cartes. $P(As) = \\frac{4}{32} = \\frac{1}{8}$.</p>\n          "
          },
          {
            "id": "prob_n3",
            "level": 2,
            "title": "Niveau 2 : Probabilité avec un dé",
            "question": "<p>On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre <strong>pair</strong> ?</p>",
            "options": [
              {
                "text": "$\\dfrac{1}{2}$",
                "isCorrect": true
              },
              {
                "text": "$\\dfrac{1}{3}$",
                "isCorrect": false
              },
              {
                "text": "$\\dfrac{1}{6}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 2)</h4>\n            <p>Les issues favorables (nombres pairs) sont $2, 4, 6$ : il y en a $3$. Le nombre total d'issues est $6$.</p>\n            <p>Par équiprobabilité : $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.</p>\n          "
          },
          {
            "id": "prob_n4",
            "level": 3,
            "title": "Niveau 3 : Utiliser l'événement contraire",
            "question": "<p>On lance deux fois une pièce équilibrée. Quelle est la probabilité d'obtenir <strong>au moins une fois</strong> « Pile » ?</p>",
            "options": [
              {
                "text": "$\\dfrac{3}{4}$",
                "isCorrect": true
              },
              {
                "text": "$\\dfrac{1}{2}$",
                "isCorrect": false
              },
              {
                "text": "$\\dfrac{1}{4}$",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction (Niveau 3)</h4>\n            <p>Les issues possibles sont : PP, PF, FP, FF (4 issues équiprobables).</p>\n            <p>Le plus simple est de passer par l'événement contraire de « au moins une fois Pile », qui est « <strong>aucun</strong> Pile », c'est-à-dire FF : une seule issue, de probabilité $\\dfrac{1}{4}$.</p>\n            <p>Donc $P(\\text{au moins un Pile}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.</p>\n          "
          }
        ],
        "yearLevel": "3e→2de"
      }
    ]
  },
  {
    "id": "module5",
    "title": "Module 5 : Algorithmique et Programmation",
    "description": "Ce module introduit les bases de la programmation en Python, compétence transversale désormais indispensable en Spécialité Mathématiques de Première : variables, tests, boucles et listes.",
    "chapters": [
      {
        "id": "algorithmique_python",
        "title": "Chapitre 1 : Introduction à l'algorithmique avec Python",
        "icon": "💻",
        "courseHtml": "\n        <h3>Introduction</h3>\n        <p>En Première Spécialité Mathématiques, on utilise le langage <strong>Python</strong> pour écrire des petits programmes (appelés <strong>algorithmes</strong>) qui automatisent des calculs. Pas de panique : on commence par les bases indispensables.</p>\n\n        <h3>1. Afficher un résultat : <code>print()</code></h3>\n        <p>La fonction <code>print()</code> affiche une valeur à l'écran.</p>\n        <div class=\"formula\">\n          <p><code>x = 5</code><br><code>print(x * 2)</code> &nbsp;→ affiche <code>10</code></p>\n        </div>\n\n        <h3>2. Les variables</h3>\n        <p>Une variable stocke une valeur sous un nom choisi. Le symbole <code>=</code> signifie \"<strong>on attribue la valeur de droite à la variable de gauche</strong>\" — ce n'est pas une égalité mathématique comme en algèbre !</p>\n        <div class=\"formula\">\n          <p><code>moyenne = 12.4</code> &nbsp;(on stocke $12,4$ dans la variable <code>moyenne</code>)</p>\n        </div>\n\n        <h3>3. Les tests conditionnels : <code>if</code> / <code>else</code></h3>\n        <p>Un test permet d'exécuter des instructions différentes selon qu'une condition est vraie ou fausse.</p>\n        <div class=\"formula\">\n          <p><code>if n % 2 == 0:</code><br>\n          &nbsp;&nbsp;&nbsp;<code>print(\"pair\")</code><br>\n          <code>else:</code><br>\n          &nbsp;&nbsp;&nbsp;<code>print(\"impair\")</code></p>\n        </div>\n        <div class=\"card-tip\">\n          <strong>Le symbole <code>%</code></strong> (modulo) donne le <strong>reste</strong> de la division euclidienne. <code>n % 2</code> vaut $0$ si $n$ est pair, et $1$ si $n$ est impair. Le symbole <code>==</code> (double égal) teste une égalité, à ne pas confondre avec <code>=</code> (qui attribue une valeur).\n        </div>\n\n        <h3>4. La boucle <code>for</code></h3>\n        <p>Une boucle <code>for</code> répète des instructions un nombre de fois connu à l'avance. <code>range(1, 6)</code> génère les entiers de $1$ à $5$ (le dernier nombre, $6$, est <strong>exclu</strong>).</p>\n        <div class=\"formula\">\n          <p><code>total = 0</code><br>\n          <code>for i in range(1, 6):</code><br>\n          &nbsp;&nbsp;&nbsp;<code>total = total + i</code><br>\n          <code>print(total)</code> &nbsp;→ affiche <code>15</code> (car $1+2+3+4+5=15$)</p>\n        </div>\n\n        <h3>5. La boucle <code>while</code></h3>\n        <p>Une boucle <code>while</code> répète des instructions <strong>tant qu'une condition reste vraie</strong> — utile quand on ne connaît pas le nombre d'étapes à l'avance.</p>\n        <div class=\"formula\">\n          <p><code>n = 0</code><br>\n          <code>while n &lt; 20:</code><br>\n          &nbsp;&nbsp;&nbsp;<code>n = n + 5</code><br>\n          <code>print(n)</code> &nbsp;→ affiche <code>20</code></p>\n        </div>\n        <div class=\"card-warning\">\n          <strong>Attention à la boucle infinie !</strong> Si la condition du <code>while</code> ne devient jamais fausse (par exemple si on oublie de faire évoluer la variable testée), le programme ne s'arrête jamais.\n        </div>\n\n        <h3>6. Les listes</h3>\n        <p>Une liste regroupe plusieurs valeurs sous un seul nom, entre crochets <code>[ ]</code>.</p>\n        <div class=\"formula\">\n          <p><code>notes = [12, 15, 8, 17, 10]</code><br>\n          <code>moyenne = sum(notes) / len(notes)</code> &nbsp;($\\texttt{sum}$ = somme des éléments, $\\texttt{len}$ = nombre d'éléments)</p>\n        </div>\n      ",
        "exercises": [
          {
            "id": "algo_n1",
            "level": 1,
            "title": "Niveau 1 : Lire un programme simple",
            "question": "<p>Que va afficher ce programme ?</p><p><code>x = 5</code><br><code>print(x * 2)</code></p>",
            "options": [
              {
                "text": "<code>10</code>",
                "isCorrect": true
              },
              {
                "text": "<code>x * 2</code>",
                "isCorrect": false
              },
              {
                "text": "<code>52</code>",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 1 (Niveau 1)</h4>\n            <p>La variable <code>x</code> contient la valeur $5$. L'instruction <code>print(x * 2)</code> calcule $x \\times 2 = 5\\times2=10$ et affiche <strong>le résultat</strong> (le calcul est effectué avant l'affichage, Python n'affiche jamais le texte de l'instruction elle-même).</p>\n          "
          },
          {
            "id": "algo_n2",
            "level": 1,
            "title": "Niveau 1 : Comprendre un test conditionnel",
            "question": "<p>Que va afficher ce programme pour <code>n = 7</code> ?</p><p><code>if n % 2 == 0:</code><br><code>&nbsp;&nbsp;&nbsp;print(\"pair\")</code><br><code>else:</code><br><code>&nbsp;&nbsp;&nbsp;print(\"impair\")</code></p>",
            "options": [
              {
                "text": "<code>impair</code>",
                "isCorrect": true
              },
              {
                "text": "<code>pair</code>",
                "isCorrect": false
              },
              {
                "text": "Le programme affiche une erreur",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 2 (Niveau 1)</h4>\n            <p><code>n % 2</code> calcule le reste de la division de $n$ par $2$. Pour $n=7$ : $7 = 2\\times3+1$, donc <code>7 % 2</code> vaut $1$, qui n'est pas égal à $0$.</p>\n            <p>La condition <code>n % 2 == 0</code> est donc <strong>fausse</strong> : c'est la branche <code>else</code> qui s'exécute, et le programme affiche <code>impair</code>.</p>\n          "
          },
          {
            "id": "algo_n3",
            "level": 2,
            "title": "Niveau 2 : Calculer le résultat d'une boucle for",
            "question": "<p>Que va afficher ce programme ?</p><p><code>total = 0</code><br><code>for i in range(1, 6):</code><br><code>&nbsp;&nbsp;&nbsp;total = total + i</code><br><code>print(total)</code></p>",
            "options": [
              {
                "text": "<code>15</code>",
                "isCorrect": true
              },
              {
                "text": "<code>21</code>",
                "isCorrect": false
              },
              {
                "text": "<code>6</code>",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 3 (Niveau 2)</h4>\n            <p><code>range(1, 6)</code> génère les entiers $1, 2, 3, 4, 5$ (le nombre $6$ est exclu de la liste).</p>\n            <p>La variable <code>total</code> commence à $0$, puis on ajoute successivement chaque valeur de <code>i</code> :</p>\n            <p>$0+1=1$, puis $1+2=3$, puis $3+3=6$, puis $6+4=10$, puis $10+5=15$.</p>\n            <p>Le programme affiche donc <code>15</code>.</p>\n          "
          },
          {
            "id": "algo_n4",
            "level": 2,
            "title": "Niveau 2 : Comprendre une boucle while",
            "question": "<p>Combien de fois la boucle <code>while</code> s'exécute-t-elle dans ce programme ?</p><p><code>n = 0</code><br><code>while n &lt; 20:</code><br><code>&nbsp;&nbsp;&nbsp;n = n + 5</code></p>",
            "options": [
              {
                "text": "4 fois (n vaut alors 20 et la condition devient fausse)",
                "isCorrect": true
              },
              {
                "text": "20 fois",
                "isCorrect": false
              },
              {
                "text": "5 fois",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 4 (Niveau 2)</h4>\n            <p>On suit l'évolution de <code>n</code> étape par étape : $n=0$ (condition $0<20$ vraie, on entre dans la boucle) $\\to n=5$ (vraie) $\\to n=10$ (vraie) $\\to n=15$ (vraie) $\\to n=20$.</p>\n            <p>Une fois $n=20$, la condition <code>n &lt; 20</code> devient fausse ($20<20$ est faux) : la boucle s'arrête.</p>\n            <p>La boucle s'est donc exécutée <strong>4 fois</strong> (les quatre additions qui ont fait passer $n$ de $0$ à $20$).</p>\n          "
          },
          {
            "id": "algo_n5",
            "level": 3,
            "title": "Niveau 3 : Écrire un algorithme avec une liste",
            "question": "<p>On veut calculer la moyenne de la liste <code>notes = [12, 15, 8, 17, 10]</code> et afficher si elle est supérieure ou égale à 10. Que fait ce programme ?</p><p><code>notes = [12, 15, 8, 17, 10]</code><br><code>moyenne = sum(notes) / len(notes)</code><br><code>if moyenne &gt;= 10:</code><br><code>&nbsp;&nbsp;&nbsp;print(\"admis\")</code><br><code>else:</code><br><code>&nbsp;&nbsp;&nbsp;print(\"non admis\")</code></p>",
            "options": [
              {
                "text": "Il affiche <code>admis</code>, car la moyenne vaut 12,4",
                "isCorrect": true
              },
              {
                "text": "Il affiche <code>non admis</code>, car la moyenne vaut 8",
                "isCorrect": false
              },
              {
                "text": "Le programme contient une erreur de syntaxe",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 5 (Niveau 3)</h4>\n            <p><code>sum(notes)</code> calcule la somme des éléments de la liste : $12+15+8+17+10=62$.</p>\n            <p><code>len(notes)</code> calcule le nombre d'éléments de la liste : $5$.</p>\n            <p>La moyenne est donc $\\frac{62}{5} = 12,4$.</p>\n            <p>Comme $12,4 \\geqslant 10$, la condition est vraie : le programme affiche <code>admis</code>.</p>\n          "
          },
          {
            "id": "algo_n6",
            "level": 3,
            "title": "Niveau 3 : Trouver le maximum d'une liste avec une boucle",
            "question": "<p>Ce programme cherche le plus grand élément d'une liste. Que vaut <code>maximum</code> à la fin de l'exécution ?</p><p><code>liste = [3, 7, 2, 9, 4]</code><br><code>maximum = liste[0]</code><br><code>for valeur in liste:</code><br><code>&nbsp;&nbsp;&nbsp;if valeur &gt; maximum:</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maximum = valeur</code><br><code>print(maximum)</code></p>",
            "options": [
              {
                "text": "<code>9</code>",
                "isCorrect": true
              },
              {
                "text": "<code>3</code>",
                "isCorrect": false
              },
              {
                "text": "<code>25</code> (la somme de tous les éléments)",
                "isCorrect": false
              }
            ],
            "correction": "\n            <h4>Correction de l'exercice 6 (Niveau 3)</h4>\n            <p>On initialise <code>maximum</code> avec le premier élément de la liste : <code>maximum = 3</code>.</p>\n            <p>Puis on parcourt chaque valeur de la liste et on met à jour <code>maximum</code> chaque fois qu'on trouve une valeur plus grande :</p>\n            <p>$3$ (initial) → on compare à $3$ : pas plus grand, $\\texttt{maximum}=3$<br>\n            → on compare à $7$ : $7>3$, donc $\\texttt{maximum}=7$<br>\n            → on compare à $2$ : pas plus grand, $\\texttt{maximum}=7$<br>\n            → on compare à $9$ : $9>7$, donc $\\texttt{maximum}=9$<br>\n            → on compare à $4$ : pas plus grand, $\\texttt{maximum}=9$</p>\n            <p>À la fin, <code>maximum</code> vaut <code>9</code>, qui est bien le plus grand élément de la liste.</p>\n          "
          }
        ],
        "yearLevel": "2de"
      }
    ]
  }
];
