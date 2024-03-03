const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))


// Image d'affichage*/
var options = {
    strings: [
        'Bienvenue dans mon portfolio',
        'Mon stage chez Exertis Azenn',
        'Exertis Azenn'
    ],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 8,
    backDelay: 6000,
  };

var typed = new Typed('#hero-titles', options);

// AOS
AOS.init();

/*chiffre azenn*/

const chiffres = document.querySelectorAll('.chiffres span');
const duree = 1000; // Durée de l'animation en millisecondes

function fonduVertical(element) {
    let chiffreInitial = parseInt(element.textContent);
    let chiffreFinal = parseInt(element.textContent);

    const increment = chiffreFinal / (duree / 50); // Incrément pour chaque intervalle de temps (50ms)

    let tempsEcoule = 0;

    function miseAJourChiffre() {
        tempsEcoule += 14;
        let chiffreAffiche = Math.round(increment * (tempsEcoule / 50));

        if (chiffreAffiche <= chiffreFinal) {
            element.textContent = chiffreAffiche;
        } else {
            element.textContent = chiffreFinal;
            clearInterval(animation);
        }
    }

    const animation = setInterval(miseAJourChiffre, 50);
}

chiffres.forEach(chiffre => {
    fonduVertical(chiffre);
});

/*projet*/

/*modal*/
//ALLEZ TOUT EN bas de la page projet (dans <script>)
/*fin modal*/

/*Blog*/
document.addEventListener("DOMContentLoaded", function () {
    // Contenu pour chaque semaine
    const contentByWeek = {
        week1: "<div class='blog-post'><h2>Lundi 8 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce premier matin," +
            " j'ai effectué une visite des locaux de l'entreprise, me familiarisant avec les équipes. De plus, j'ai eu " +
            "l'opportunité de visiter la salle serveur de l'entreprise avec Yann, l'admnistrateur réseau. En fin de matinée," +
            " Yann m'a remis mon ordinateur configuré que je pourrai utiliser durant les six semaines de stage.<br>" +
            "<span class='highlight'>APRES-MIDI</span> : Mouhamadou m'a informé du projet que je vais" +
            " réaliser pendant mes six semaines de stage. Nous avons donc entamé le processus de réalisation classique d'un" +
            " projet en débutant par une rencontre avec Annabelle, notre cliente. L'objectif de ce projet est de digitaliser" +
            " le registre de présence des employés actuellement géré sous forme de liste papier. En collaboration avec " +
            "Mouhamadou et Annabelle, nous avons pris le temps de recueillir ses besoins. Enfin, j'ai commencé à elaborer" +
            " le rapport de notre entretien dans le but de réaliser le cahier des charges.</p><br>" +
            "" +
            "" +
            "<h2>Mardi 9 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, j'ai rédigé un rapport détaillant" +
            " le début du projet, que vous trouverez en <u><a href=\"assets/images/rapports/ProjetBrouillon.pdf\">pièce jointe ici</a></u>." +
            " De plus, j'ai pu élaborer <u><a href=\"assets/images/rapports/miniprojet.html\">un bref code</a></u> modélisant " +
            "la situation du projet. C'est l'objet de la capture d'écran de gauche ci-dessous. En fin de matinée, j'ai eu" +
            " l'opportunité de participer à la réunion d'un projet externe dans un but pédagogique. Cette participation " +
            "visait à résoudre un problème d'annulation imprévue de commande de la part d'un client. (Capture d'écran de droite.)" +
            "<div class=\"image-container\">\n    " +
            "<img src=\"assets/images/premierjet.png\" class=\"image-cadre\">\n      " +
            "<img src=\"assets/images/reu1.png\" class=\"image-cadre\">\n    " +
            "</div><br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai eu une session de feedback avec Mouhamadou" +
            " sur mon rapport, analysant ce qui était bien fait et ce qui nécessitait des améliorations. Ensuite, avec la" +
            " <u><a href=\"assets/images/rapports/ProjetCorrigé.pdf\">version corrigée</a></u>  que nous avons élaborée " +
            "ensemble, j'ai présenté <u><a href=\"assets/images/rapports/RapportAnnabelle.pdf\">le rapport</a></u>à la " +
            "cliente, Annabelle. J'ai exposé notre proposition de projet, recueilli ses retours sur ce qu'elle appréciait " +
            "et ce qu'elle n'aimait pas. En fin de journée, j'ai participé à une réunion sur le chiffrage d'un projet qui" +
            " ne me concerne pas. Ma présence avait là encore un but pédagogique. Vous trouverez une capture décran ci-dessous" +
            " de cette réunion</p><img src=\"assets/images/chiffrage_sdwan.PNG\" class=\"image-cadre\"><br>" +
            "" +
            "" +
            "<h2>Mercredi 10 Janvier</h2><p><span class='highlight'>MATIN</span> : \n" +
            "Pour la première fois, j'ai entamé ma journée en participant à une réunion quotidienne daily portant sur " +
            "divers projets. Une capture d'écran de cette réunion figure ci-dessous. L'objectif était d'en apprendre " +
            "davantage sur ce type de réunion. En effet Exertis Azenn utilise la méthode Agile pour l'ensemble de ses " +
            "projets informatique. Ensuite, j'ai eu une seconde réunion avec un architecte d'application web" +
            " nommé Philippe ROUVRAY afin de définir le langage informatique à utiliser pour mon projet. À la fin de cette" +
            " réunion, Philippe m'a informé que nous allons utiliser JHipster pour générer une sorte de \"socle\" " +
            "pour notre apllication qui utilisera les lanagages Java et Angular.<br>" +
            "<img src=\"assets/images/dailyScrum.PNG\" class=\"image-cadre\">" +
            " </p><br>" +
            "" +
            "" +
            "<h2>Jeudi 11 Janvier</h2><p><span class='highlight'>MATIN</span> : \n" +
            "Ce matin, j'ai de nouveau participé à la réunion quotidienne 'daily'. Comme d'habitude, chaque participant " +
            "a partagé ses réalisations de la veille et a annoncé ses plans pour la journée. Je participerai à cette réunion" +
            " tous les matins. Ensuite, Philippe m'a demandé de monter en compétence sur JHipster. Je me suis donc renseigné" +
            " sur cet outil durant le restant de la matinée.<br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai dû élaborer la base de données que nous allons" +
            " utiliser pour le projet. Je devrais présenter cette base lors d'une réunion avec Philippe demain. Pour " +
            "construire la base de données, je suis parti des demandes de l'utilisateur, en tenant compte de ses besoins" +
            " et de ses exigences.</p><br>" +
            "" +
            "" +
            "<h2>Vendredi 12 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, j'ai participé à la réunion " +
            "quotidienne daily impliquant différents projets au sein d'Azenn. Ensuite, j'ai commencé à réaliser une ébauche" +
            " du projet avec l'outil JHipster. J'aurai à présenter ce début de projet cet après-midi à Philippe, l'architecte" +
            " du projet. <br><span class='highlight'>APRES-MIDI</span> : Pour la première fois, j'ai eu l'opportunité de " +
            "participer à la réunion \"Échange DSI\" à 14h. Les employés de l'équipe informatique des sites de Satolas " +
            "et Montauban-de-Bretagne, les deux principaux sites d'Azenn en France, se réunissent en salle de réunion et" +
            " échangent via Teams, faisant le point sur les grandes lignes de leur travail de la semaine sans rentrer " +
            "dans la technique. Cédric Martinez, le DSI, préside cette réunion à laquelle je devrais participer chaque " +
            "semaine. Enfin, j'ai présenté le début de mon projet à Philippe et pris note de ses retours, que je devrais" +
            " prendre en considération pour la semaine prochaine.</p></div>",

        week2: "<div class='blog-post'><h2>Lundi 15 Janvier</h2><p><span class='highlight'>MATIN</span> : À 9h15, une réunion " +
            "quotidienne des projets a eu lieu. J'ai ensuite travaillé sur les retours que Philippe m'avait donnés à la fin" +
            " de la semaine précédente. C'est-a-dire que j'ai installé JHipster en utilisant les lignes de commandes plutôt" +
            " que de recourir à la version en ligne. De plus, j'ai mis à jour Java, Git et Node.js sur mon ordinateur afin" +
            " que JHipster utilise les dernières versions disponibles. Enfin, j'ai commencé à créer mes entités à partir " +
            "de l'ébauche de la base de données que j'avais précédemment élaborée.<br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai participé à la réunion d'organisation de " +
            "l'équipe de développement sur Teams. L'objectif de cette réunion était d'informer les développeurs d'une " +
            "modification dans l'organisation des sprints. L'équipe de développement a été informée entre autre d'un changement " +
            "dans la rotation du rôle de Scrum Master à chaque sprint. Les développeurs se sont organisés pour définir leur" +
            " ordre de passage et ont énoncé les responsabilités associées à ce rôle. Le compte rendu de cette réunion " +
            "qui synthétise tous ces changements <u><a href=\"assets/images/rapports/RapportOrgaWeb.pdf\">est visible " +
            "ici</a></u>. En fin d'après-midi, j'ai pu configurer PostgreSQL. </p><br>" +
            "" +
            "" +
            "<h2>Mardi 16 Janvier</h2><p><span class='highlight'>MATIN</span> : Une réunion daily des projets a eu lieu " +
            "ce matin à 9h15. Ensuite, à 10h, a eu lieu une réunion, qui se tient chaque semaine qui fait le point sur " +
            "le sprint en cours. Cette réunion permet de discuter avec l'ensemble des développeurs sur l'avancement de " +
            "tous les projets en cours. Elle répond aux questions telles que : où en sommes-nous sur tel projet ? Avons-nous" +
            " identifié des problèmes sur tel projet ? Cette réunion est l'objet de la capture d'écran de gauche ci-dessous. " +
            "Ensuite, j'ai repris le squelette de mon projet JHipster, un outil qui a généré un front et un back tout " +
            "prêts (capture de droite). Durant le reste de la matinée, mon objectif était de lier ce site squelette à ma" +
            " base de données.<br>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images//sprint6.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/jhipster1.png\" class=\"image-cadre\">" +
            "</div>" +
            "<span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai élaboré <u><a href=\"assets/images/rapports/Rapport.pdf\">" +
            "une maquette</a></u> du projet que j'ai ensuite envoyée à Annabelle, la cliente. L'objectif de cet email est " +
            "de solliciter ses retours sur le projet. Ensuite, j'ai tenté en vain de résoudre le problème de lié mon projet" +
            " \"socle\" JHipster avec ma base de données PostgreSQL. Cependant j'ai réussi à terminer les entités de ma " +
            "base de données que vous trouverez en capture d'écran ci-dessous. On a donc deux tables. Voici ce que le projet" +
            " demande : La table 'présence' est vide chaque matin. Lorsque les employés arrivent à l'entreprise, ils se " +
            "cochent dans la table 'employée' depuis leur poste de travail et leurs noms apparait dans la table présence." +
            " Ces tables sont présentes dans un fichier nommé azenn.jdl" +
            "<img src=\"assets/images//entity.jpg\" class=\"image-cadre\"></p><br>" +
            "" +
            "" +
            "<h2>Mercredi 17 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, j'ai pris part à la réunion " +
            "quotidienne à 9h15. Puis, j'ai continué à tenter de résoudre le problème persistant, à savoir lier mon application " +
            "'socle' JHipster à ma base de données. En fin de matinée, Philippe a pu prendre connaissance de mon problème. " +
            "Nous allons tenter de le résoudre ensemble demain. Également, avec la correction de Mouhamadou, j'ai pu apprendre" +
            " ce qui n'était pas optimal sur ma maquette : " +
            "<li>La liste de diffusion ne doit pas apparaître dans le tableau mais sous forme de champs input en bas du " +
            "tableau.</li>" +
            "<li>Le champ \"supprimer\" ne doit pas se faire sous forme de liste déroulante mais sous forme de colonne " +
            "supplémentaire dans le tableau.</li>" +
            "<li>Le petit crayon orange en haut à droite peut être remplacé par un signe \"plus\" dans l'optique d'ajouter" +
            " des utilisateurs lorsqu'on clique dessus.</li></p><br>" +
            "" +
            "" +
            "<h2>Jeudi 18 Janvier</h2><p><span class='highlight'>MATIN</span> : À 9h15, une réunion daily des projets a" +
            " eu lieu. Ensuite, j'ai eu la réunion tant attendue avec Philippe pour résoudre le problème persistant. Après" +
            " environ une heure de travail, nous avons réussi à résoudre le problème. Par la suite j'ai pu assister, en " +
            "compagnie de Mouhamadou et Cédric, à la présentation du parc informatique en staging à des prestataires d'une" +
            " société externes : Arton. En effet, Azenn souhaite améliorer sa zone de staging, et cette société est venue" +
            " pour effectuer une première évaluation.<br><span class='highlight'>APRES-MIDI</span>" +
            " : Cette après-midi, nous avons poursuivi la présentation avec l'application \"Otelau\". Cet outil sert à " +
            "effectuer les configurations nécéssaire sur les équipements informatiques demandés par le client. En fin de " +
            "journée, j'ai pu effectuer les sauvegardes nécessaires de mon projet JHipster de ce matin en y intégrant " +
            "notamment le fichier \"azenn.jdl\".</p><br>" +
            "" +
            "" +
            "<h2>Vendredi 19 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, j'ai assisté à la réunion " +
            "quotidienne habituelle à 9h15, puis j'ai participé à la réunion \"Sprint Review\". L'équipe de développement" +
            " a partagé les difficultés rencontrées pendant le sprint 5 et a prévu les axes d'amélioration pour le prochain" +
            " sprint. À la fin de la réunion, l'équipe a élaboré deux axes que vous trouverez dans la capture d'écran " +
            "ci-dessous. De plus, les développeurs ont annoncé les tickets Jira qui resteront pour le prochain sprint " +
            "faute de ne pas les avoir correctement terminés (ils sont visibles en arrière-plan de la capture ci-dessous)." +
            " Ils ont également programmé la réunion de lancement de sprint qui aura lieu mardi prochain." +
            "<br><img src=\"assets/images/sprintreview5.png\" class=\"image-cadre\">" +
            "<span class='highlight'>APRES-MIDI</span> : Comme chaque vendredi à 14h, j'ai pris part à la réunion \"Échange DSI\"," +
            " présidé par Cédric Martinez. Y sont généralement présents : les administrateurs réseaux, les ingénieurs systèmes," +
            " les stagiaires, les développeurs, les lead devs, les chefs & assistants de projet et l'architecte. Durant la" +
            " réunion, nous avons abordé divers sujets tels que mon projet actuel, la gestion des anciens comptes Azenn " +
            "appartenant à des employés ayant quitté l'entreprise, et la nécessité de supprimer ces comptes pour des raisons" +
            " de cybersécurité. Cette réunion joue un rôle essentiel dans le renforcement de la cohésion entre les équipes" +
            " des deux principaux sites d'Azenn. Voici ci-joint le " +
            "<u><a href=\"assets/images/rapports/RapportEchangeDSI.pdf\">compte-rendu</a></u> de cette réunion.</p></div>",

        week3: "<div class='blog-post'><h2>Lundi 22 Janvier</h2><p><span class='highlight'>MATIN</span> : J'ai assisté à " +
            "la réunion daily quotidienne ce matin. Ensuite, j'ai pris part à la réunion de planification du sprint 6, " +
            "sprint qui débutera demain. Après avoir fermé le sprint 5 sur l'outil Jira (capture d'écran ci-dessous), " +
            "l'objectif était de déterminer, pour chaque ticket de cet ancien sprint, le temps nécessaire pour son " +
            "achèvement ainsi que son point de vélocité (c'est-à-dire le croisement entre leur complexité et leur temps " +
            "de realisation). Ces points de vélocité suivent la suite de Fibonacci, pouvant être 1, 2, 3, 5, 8 ou 13, le " +
            "point maximum déterminé par les développeurs.<br>" +
            "<img src=\"assets/images/finsprint5.png\" class=\"image-cadre\">" +
            "<span class='highlight'>APRES-MIDI</span> : Cette après-midi, Philippe m'a informé que je devais recommencer" +
            " entièrement mon projet JHipster. La raison en est que mon projet actuel mélange le front-end et le back-end " +
            "dans le même dossier. Cette configuration rendrait le déploiement compliqué. En conséquence, Philippe m'a " +
            "demandé de créer distinctement un dossier pour le front-end (à l'aide de la commande \"jhipster --skip-server\")" +
            " et un autre pour le back-end (à l'aide de la commande \"jhipster --skip-client\") avec JHipster. En fin de " +
            "journée, j'ai pu faire corriger ce que j'avais produit par Mouhamadou.</p><br>" +
            "" +
            "" +
            "<h2>Mardi 23 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, j'ai été présent à la réunion " +
            "'daily'quotidienne à 9h15. Ensuite, j'ai participé à la réunion de lancement de sprint (capture d'écran ci-" +
            "dessous). Tous les chefs de projet ainsi que les développeurs ont assisté à cette réunion pendant toute la " +
            "matinée. La réunion s'est déroulée en trois temps. Dans un premier temps, les chefs de projets ont présenté " +
            "les grandes lignes du sprint, mettant en avant les points les plus importants à réaliser d'ici le 6 février," +
            " date de fin du sprint 6. Ils ont également annoncé que le Scrum Master pour ce sprint serait Philippe. " +
            "Ensuite, dans un deuxième temps, Alban et Camille, les spécialistes en cybersécurité, ont pris part à la " +
            "réunion pour énoncer les aspects de sécurité de chacun des projets en cours. Enfin, dans un troisième temps," +
            " les chefs de projets ainsi que le Scrum Master ont décidé des 10 tickets les plus importants à réaliser et " +
            "ont également choisi de mettre certains tickets Jira dans le backlog afin de les traiter une fois les tickets" +
            " importants réalisés. Durant cette troisième partie, les développeurs n'étaient plus présents. " +
            "<img src=\"assets/images/lancementsprint6.png\" class=\"image-cadre\"><br>" +
            "<span class='highlight'>APRES-MIDI</span>: Cet après-midi, un événement a eu lieu au sein de l'entrepôt " +
            "Satolas d'Azenn. Le PDG d'<entreprise>Exertis Azenn</entreprise> France est venu faire un discours en " +
            "compagnie de tous les salariés du site de Satolas. Il a évoqué les projets réalisés l'an passé en 2023 et a" +
            " annoncé les grands projets à venir pour cette année 2024. En conclusion de l'événement, l'ensemble des " +
            "équipes ont pu profiter d'un traditionnel buffet avec une galette des rois. Ensuite, j'ai eu un entretien " +
            "Teams avec Philippe concernant le problème suivant. J'ai maintenant deux dossiers distincts pour le front " +
            "et le back. Cependant, malgré cela, je n'ai pas réussi à intégrer le fichier JDL que j'avais créé la semaine" +
            " dernière, nommé azenn.jdl. Philippe m'a donc indiqué de reprendre mon ancien projet où le back et le front" +
            " sont mélangés. Il m'a demandé de refaire l'architecture de ce projet en séparant distinctement le frontend" +
            " du backend.</p><br>" +
            "" +
            "" +
            "<h2>Mercredi 24 Janvier</h2><p><span class='highlight'>MATIN</span> : \n" +
            "Ce matin à 9h15, j'ai participé à la réunion quotidienne animée par le Scrum Master désigné hier, Philippe," +
            " qui dirigera les daily jusqu'à la fin du sprint. Ensuite, j'ai eu un entretien avec Mouhamadou concernant" +
            " mon stage à mi-parcours. Nous avons fait le point sur mon projet et discuté des prochaines étapes à suivre. " +
            "J'ai pu utiliser les conseils qu'il m'a donnés pour travailler dessus jusqu'à la fin de la matinée.<br><br>" +
            " </p>" +
            "" +
            "" +
            "<h2>Jeudi 25 Janvier</h2><p><span class='highlight'>MATIN</span> : J'ai intégré la réunion quotidienne 'daily' " +
            "ce matin. Ensuite, j'ai eu l'occasion de discuter avec Philippe de l'avenir du projet. Nous avons élaboré" +
            " sa mise en œuvre au quotidien, et voici ce qui a été décidé : lorsque qu'un employé arrive, il pourra " +
            "directement se rendre à son poste de travail sans passer par le poste de garde comme c'est actuellement le " +
            "cas. Il lui suffira simplement de se connecter à son ordinateur et de valider son prénom dans la liste " +
            "ouverte à tous les employés. Aucune connexion ne sera nécessaire, sauf pour les administrateurs : Annabelle" +
            " (l'utilisatrice) et les administrateurs réseaux. Ensuite, Mouhamadou a été décidé de revenir au projet" +
            " précédent, à savoir deux dossiers front et back bien distincts dès la génération JHipster. En essayant de " +
            "modifier les routes des fichiers mardi dernier, le projet a rencontré des problèmes important, entraînant une " +
            "confusion généralisée du projet.<br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cette après-midi, on m'a demandé de progresser sur la maquette " +
            "du projet pendant que les employés partaient pour un après-midi de séminaire à Lyon. Vous trouverez " +
            "ci-dessous deux captures d'écran de la maquette. Vous pouvez consulter davantage d'illustrations dans la " +
            "section <u><a href=\"projet.html#projet\">'Gestion du projet'</a></u> (partie 2-Reccueil du besoin)</p><br>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/maquette1.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/maquette2.png\" class=\"image-cadre\">" +
            "</div>" +
            "" +
            "" +
            "<h2>Vendredi 26 Janvier</h2><p><span class='highlight'>MATIN</span> : Une réunion 'daily' a eu lieu ce matin" +
            " à 9h15. Comme à chaque fois, j'ai pu raconter ce que j'ai fait la veille, les problèmes que j'ai rencontrés " +
            "et ce que je prévois de faire aujourd'hui. Ensuite, j'ai pu retourner à mon projet de digitalisation des " +
            "présences. J'ai tenté de relier le back-end et le front-end entre eux, qui pour le moment n'étaient pas liés." +
            "Cependant j'ai été confronté à un problème. Le front-end appelle le back-end sur le port " +
            "\"http://localhost:8080/\", mais celui-ci, d'après le navigateur, n'a pas les accès nécessaires. J'ai une " +
            "erreur de type 401 que vous trouverez ci-dessous. " +
            "<img src=\"assets/images/erreur.png\" class=\"image-cadre\">" +
            "<br><span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai assisté à la réunion DSI hebdomadaire." +
            " Cette semaine, la réunion était plus spéciale car une partie des employés étaient en séminaire. Ensuite, " +
            "j'ai pu m'entretenir avec Mouhamadou pour régler le problème de ce matin. Ensemble, nous avons réussi en" +
            " changeant le port de l'application en passant de \"http://localhost:9000\" à \"http://localhost:4200/\". " +
            "Mouhamadou m'a enfin demandé de faire de la page d'accueil la liste des employés, c'est donc le sujet " +
            "sur lequel j'ai travaillé jusqu'à la fin de la journée.</p></div>",

        week4: "<div class='blog-post'><h2>Lundi 29 Janvier</h2><p><span class='highlight'>MATIN</span> : Ce matin, à 9h15," +
            " j'ai rejoint la réunion quotidienne. Ensuite, j'ai pu m'entretenir avec Philippe Rouvray, l'architecte, et" +
            " de son côté, il m'a demandé de rester sur le projet JHipster avec le front et le back triés par mes soins " +
            "mais générés initialement dans un même projet. J'ai pu m'apercevoir des points de vue divergents entre les " +
            "différents membres de l'équipe informatique. Cette discussion a révélé deux opinions divergentes au sein de " +
            "l'équipe informatique, ce qui permet d'apporter une perspective élargie sur les avantages et les inconvénients" +
            " de chaque approche. Il y a l'avis de Mouhamadou, avec un front et un back générés séparément, ou celui de " +
            "Philippe, où le front et le back sont générés ensemble dans un même dossier mais séparés ensuite par mes soins." +
            " Mouhamadou m'a conseillé de me concentrer sur le projet avec le front et le back séparés dès la génération " +
            "JHipster.<br><span class='highlight'>APRES-MIDI</span> : Dans l'après-midi, j'ai commencé quelque chose de " +
            "complètement différent. En effet, l'équipe de cybersécurité d'Azenn m'a demandé de suivre un cours sur le " +
            "site <a href='https://dcc-eu.litmoseu.com/account/login?ReturnUrl=%2faccount'>DCC CYBER SAFE</a>. Cet outil " +
            "en ligne propose diverses formations demandées par l'entreprise avec une date d'échéance. Le salarié n'a " +
            "plus qu'à suivre le cours proposé avant la date fixée. Ces formations intéractives portent sur divers sujets" +
            " tels que les précautions à prendre lors de l'utilisation de l'Internet de l'entreprise, les complexités des" +
            " mots de passe, les sites prohibés, le navigateur de préférence... Vous trouverez deux captures d'écran de " +
            "cet outil ci-dessous. En fin de journée, j'ai eu un entretien avec Mouhamadou. Il m'a fixé les objectifs à " +
            "atteindre d'ici notre prochain entretien mercredi.</p>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/DCCcybersafe1.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/DCCcybersafe2.png\" class=\"image-cadre\">" +
            "</div><br>" +
            "" +
            "" +
            "<h2>Mardi 30 Janvier</h2><p><span class='highlight'>MATIN</span> : J'ai commencé la journée avec la réunion" +
            " 'daily à 9h15. Ensuite, j'ai pu participer à la réunion hebdomadaire de mi-sprint, alors qu'il reste une " +
            "semaine avant la fin du sprint. Une grande partie de l'équipe informatique, comprenant les développeurs, les" +
            " réseaux, la cybersécurité ainsi que le DSI Cedric Martinez, y ont pris part. Le but de cette réunion à " +
            "mi-sprint est de s'assurer que le nombre de tickets Jira correspond à la vélocité du sprint, tout en évaluant" +
            " l'efficacité du nouveau système de rotation du Scrum Master pour un suivi plus dynamique et opérationnel. " +
            "Vous trouverez ci-dessous une capture d'écran de cete réunion." +
            "<img src=\"assets/images/reuDeMiSprint.png\" class=\"image-cadre\"><br>" +
            "<span class='highlight'>APRES-MIDI</span> : J'ai consacré toute cette après-midi à remplir les objectifs fixés" +
            " la veille avec Mouhamadou. Les voici : le but est d'avoir une application qui commence à prendre forme en " +
            "supprimant les menus inutiles générés par JHipster, puis en mettant en place la page d'accueil avec le tableau" +
            " de la base de données de présence PostgreSQL. Je n'ai cependant pas réussi à afficher le tableau de la base." +
            "Ci-dessous, vous trouverez le début de cette application. À gauche, une capture d'écran lorsque l'utilisateur" +
            " n'est pas connecté, puis à droite, une capture d'écran lorsque l'administrateur s'est authentifié.</p>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/appli1.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/appli2.png\" class=\"image-cadre\">" +
            "</div><br>" +
            "" +
            "" +
            "<h2>Mercredi 31 Janvier</h2><p><span class='highlight'>MATIN</span> : J'ai été impliqué dans la réunion \"daily\"" +
            " ce matin à 9h15. Par la suite, j'ai eu l'entretien hebdomadaire avec Mouhamadou. Ensemble, nous avons enfin" +
            " pu terminer la création de mon profil Jira afin que mes tickets apparaissent lors du daily matinal. Ensuite," +
            " Mouhamadou a pu me donner des retours sur ce que j'avais travaillé la veille. Par exemple, j'avais placé le" +
            " bouton \"imprimer la liste des employés présents\" une fois l'administrateur connecté, cependant, Mouhamadou" +
            " m'a expliqué que les employés devraient pouvoir imprimer cette liste même s'ils ne sont pas administrateurs." +
            " Nous avons donc rendu ce bouton disponible sans authentification (capture d'écran ci-dessous). Enfin, j'ai " +
            "brièvement tenté d'afficher le tableau de la liste des employés PostgreSQL en vain.</p>" +
            "<img src=\"assets/images/appli3.png\" class=\"image-cadre\"><br>" +
            "" +
            "" +
            "<h2>Jeudi 1 Février</h2><p><span class='highlight'>MATIN</span> : Ma journée a débuté avec la réunion \"daily\"" +
            " à 9h15, où j'ai eu pour la première fois l'occasion de présenter mes tickets Jira. Voici la capture d'écran" +
            " de gauche ci-dessous de cette réunion. Ensuite, j'ai pu poursuivre l'utilisation de l'outil DCC Cyber Safe," +
            " dans le but de valider à 100% les quatres formations qui m'ont été demandées (voir capture d'écran ci-dessous" +
            " à droite)." +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/dailyAvecMesTickets.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/formationDccCyberSafe.png\" class=\"image-cadre\">" +
            "</div><br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cette après-midi, j'ai également poursuivi la formation DCC Cyber" +
            " Safe (Vous trouverez de nouveau une illustrationde l'outil en capture d'écran ci-dessous). Ensuite, j'ai eu" +
            " l'occasion de m'entretenir brièvement avec Mouhamadou afin qu'il me donne des pistes de recherche pour afficher" +
            " le tableau PostgreSQL de la liste des employés. J'ai donc travaillé sur ces pistes pour le reste de l'" +
            "après-midi. Je n'ai cependant pas réussi à afficher cette liste dans le tableau.</p>" +
            "<img src=\"assets/images/formationDccCyberSafe2.png\" class=\"image-cadre\"><br><br>" +
            "" +
            "" +
            "<h2>Vendredi 2 Février</h2><p><span class='highlight'>MATIN</span> : Le point de départ de ma journée était " +
            "la réunion 'daily' à 9h15. Ensuite, j'ai eu l'entretien hebdomadaire avec Mouhamadou où j'ai exposé mes " +
            "difficultés sur le projet, notamment le problème qui perdure d'affichage de la liste des employés. Mouhamadou" +
            " m'a à nouveau donné des pistes de réflexion, et ensemble, nous avons par la suite corrigé quelques détails" +
            " mineurs. Après, comme chaque semaine avant la fin du sprint, nous avons eu la \"sprint review\", car le " +
            "sprint 7 démarre le mardi 6 février. Chaque développeur a présenté oralement les grandes lignes de son travail." +
            " J'ai donc également partagé le mien sur l'avancement de mon projet de digitalisation des présences. À la fin" +
            " de cette réunion, il a été annoncé que Mouhamadou prendrait la place de Philippe en tant que Scrum Master " +
            "pour le sprint 7.<br><br>" +
            "<span class='highlight'>APRES-MIDI</span> : La réunion 'Échange DSI', dirigée par Cédric Martinez, a marqué" +
            " le début de mon après-midi à 14h. Lors de cette réunion, j'ai une fois de plus présenté oralement l'avancée" +
            " de mon projet, non seulement aux développeurs présents lors de la \"sprint review\" ce matin, mais aussi à" +
            " toute l'équipe informatique absente ce matin (équipe réseaux et cybersécurité notament). Cedric Martinez m'a" +
            " demandé de présenter concrètement l'application la semaine prochaine, il souhaite que je fasse une démo " +
            "devant toute l'équipe informatique de Montauban et Satolas. En fin d'après-midi, j'ai pu m'entretenir avec " +
            "Toky, un développeur de Montauban, qui m'a expliqué comment déployer mon projet sur Bitbucket, un outil " +
            "similaire à Github spécialement utilisé par l'entreprise pour sauvegarder du code en ligne.</p></div>",

        week5: "<div class='blog-post'><h2>Lundi 5 Février</h2><p><span class='highlight'>MATIN</span> : Je me suis lancé" +
            " dans ma journée avec la réunion 'daily' à 9h15. Cette semaine, mon gros objectif est d'être pour la démonstration" +
            " de mon application devant l'équipe informatique ce vendredi. Pour l'heure, après le daily, j'ai pu participer" +
            " à la réunion du planning poker. Tous les développeurs ont pris en charge les tickets restants du sprint 6 " +
            "et ont estimé leur temps de réalisation pour le sprint 7. Ensuite, ils ont fait de même avec les nouveaux " +
            "tickets du sprint 7, qui commence demain. Chaque ticket a été examiné avec son point de vélocité et le nombre" +
            " de jours nécessaires à sa réalisation. Vous trouverez ci-dessous une capture de cette réunion. En fin de " +
            "matinée, j'ai réussi à cloner le projet sur l'outil Bitbucket pour pouvoir l'utiliser sur l'ordinateur de " +
            "l'entreprise.<br>" +
            "<img src=\"assets/images/planningPoker.PNG\" class=\"image-cadre\">" +
            "<span class='highlight'>APRES-MIDI</span> : En début d'après-midi, j'ai essayé de configurer mon projet sur" +
            " le nouvel ordinateur. Lorsque j'ai tenté d'exécuter la commande \"npm install\", j'ai été confronté à un " +
            "gros problème de conflit de dépendances. J'ai passé une grande partie de l'après-midi à essayer de résoudre" +
            " ces conflits. Heureusement, Mouhamadou est venu à ma rescousse pour m'aider. Cependant, suite à cette " +
            "situation, Mouhamadou m'a conseillé de rester sur mon propre ordinateur où je pouvais développer sans problème." +
            "Après cela, en fin de journée, j'ai eu l'occasion de dire au revoir à Philippe qui partait en congé et que " +
            "je ne reverrais pas d'içi la fin de mon stage.</p><br>" +
            "" +
            "" +
            "<h2>Mardi 6 Février</h2><p><span class='highlight'>MATIN</span> : La première chose que j'ai faite ce matin" +
            " était la réunion 'daily' à 9h15. Ensuite, j'ai directement enchaîné avec la réunion de lancement de sprint." +
            " Comme à son habitude, elle s'est déroulée en trois temps. Mouhamadou, le nouveau scrum master du sprint, " +
            "a annoncé les grandes lignes jusqu'au 20 février, date de fin du sprint 7. Ensuite, Camille et Alban, les " +
            "spécialistes en cybersécurité, ont fait part des problèmes recensés lors d'un test de vulnérabilité récemment" +
            " réalisé. Camille nous a informés que sur l'ensemble des projets en cours, 8 vulnérabilités de niveau \"medium\"" +
            " et 4 vulnérabilités de niveau \"high\" ont été identifiées. L'équipe a ensuite élaboré la manière de renforcer" +
            " cette sécurité tout au long du sprint. En fin de réunion, l'équipe s'est fixé deux objectifs, que vous " +
            "trouverez dans la capture d'écran ci-dessous.<br>" +
            "<img src=\"assets/images/lancementsprint7.PNG\" class=\"image-cadre\">" +
            "<span class='highlight'>APRES-MIDI</span> : Cette après-midi, j'ai pu poursuivre ma formation sur DCC Cyber" +
            " Safe en avancçant le module sur les fraudes par mail. Après cela, j'ai pu avancer le projet en nettoyant le" +
            " code inutile généré par Jhipster. Je retenterai demain avec Mouhamadou d'afficher le tableau des présences." +
            " Enfin, à la fin de la journée, j'ai eu l'occasion de dire au revoir à Philippe qui partait en congé et que" +
            " je ne reverrais pas d'içi la fin de mon stage.</p><br>" +
            "" +
            "" +
            "<h2>Mercredi 7 Février</h2><p><span class='highlight'>MATIN</span> : Ce matin, je suis arrivé plus tôt à " +
            "l'entreprise avec pour objectif de parvenir à afficher le tableau de la base de données avant l'entretien " +
            "avec Mouhamadou à 10h. J'ai finalement enfin réussi à le faire avant de participer à la réunion \"daily\" à " +
            "9h15. Vous trouverez une capture d'écran de ce tableau ci-dessous. Pendant l'entretien avec Mouhamadou, il " +
            "m'a fixé les prochains objectifs à atteindre d'ici vendredi, date de notre prochain entretien. En l'occurrence," +
            " il m'a demandé d'ajouter dans le tableau de la liste des employés un bouton \"présent\" et un bouton " +
            "\"absent\". Lorsque l'utilisateur cliquera sur l'une des cases à cocher, l'autre sera automatiquement décochée." +
            " Par la suite, j'ai cherché à savoir comment réaliser cela. Avec concertation avec Mouhamadou, nous sommes " +
            "partis sur l'idée d'utiliser des 'Observables'. Je m'apprête donc à rajouter deux colonnes dans la liste des" +
            " employés du fichier HTML. Dans ces colonnes, le typescript sera appeler pour modifier les valeurs des " +
            "boutons \"présent\" et \"absent\".</p>" +
            "<img src=\"assets/images/listePresence.PNG\" class=\"image-cadre\"><br>" +
            "" +
            "" +
            "<h2>Jeudi 8 Février</h2><p><span class='highlight'>MATIN</span> : Ma matinée a commencé avec la réunion 'daily'" +
            " à 9h15. Ensuite, j'ai tenté de faire fonctionner la commande \"npm install\" sur l'ordinateur de l'entreprise." +
            " Étant donné que cet ordinateur est plus rapide, cela sera plus pratique pour avancer dans le projet. Heureusement," +
            "j'ai pu réussir à résoudre le conflit de dépendances qui persistait lundi dernier. Cela m'a permis de \"pusher\"" +
            " le projet actuellement en local sur mon ordinateur vers Bitbucket. Puis, j'ai pu rapatrier le projet sur" +
            " l'ordinateur de l'entreprise depuis Bitbucket en utilisant la commande \"pull\". Ensuite, j'ai réalisé l'objectif" +
            " que Mouhamadou m'avait demandé, à savoir ajouter les deux cases à cocher \"Présent\" et \"Absent\" dans la " +
            "liste. Vous trouverez un aperçu de ce que j'ai pu faire ci-dessous." +
            "<img src=\"assets/images/listePresence2.PNG\" class=\"image-cadre\"><br>" +
            "<span class='highlight'>APRES-MIDI</span>: Cette après-midi, je me suis penché sur le problème que j'ai " +
            "constaté en réalisant les deux cases. Lorsque l'utilisateur cochait \"Absent\", toutes les cases du tableau" +
            " se cochaient également \"Absent\", et vice versa pour \"Présent\". J'ai donc tenté en vain de résoudre ce " +
            "problème. Ensuite, en fin d'après-midi j'ai par contre réussi à résoudre le problème que voici que nous avions" +
            " depuis un bout de temps : le projet est relié à la base de données que sur le port \"localhost:4200\". Durant" +
            " cette après-midi, j'ai tenté de le faire fonctionner sur le port par défaut du projet, à savoir " +
            "\"localhost:9000\".</p><br>" +
            "" +
            "" +
            "<h2>Vendredi 9 Février</h2><p><span class='highlight'>MATIN</span> : À 9h15, j'ai assisté à la réunion 'daily'" +
            " pour débuter ma journée. Puis, j'ai ensuite réussi à résoudre le problème de la veille à savoir cocher " +
            "\"présent\" ou \"absent\" pour une personne spécifique sans que toutes les cases soient cochées. Ensuite, " +
            "lors de notre entretien hebdomadaire, j'ai discuté avec Mouhamadou de mon prochain objectif. Il s'agit de " +
            "modifier le fichier TypeScript pour que lorsque l'utilisateur clique sur \"présent\", l'employé soit ajouté" +
            " à la liste des présences, et inversement, qu'il soit supprimé de la liste des présences lorsqu'il est cliqué" +
            " \"absent\". Seulement, les méthodes \"create\" et \"delete\" étant déjà créées, il suffisait simplement de" +
            " les appeler. C'est donc ce que j'ai fait des lignes 84 à 94 de la capture ci-dessous. Mouhamadou m'a donc " +
            "fixé un second objectif pour notre prochain entretien lundi. Pour le moment dans notre projet, lorsqu'on " +
            "clique sur \"absent\" ou \"présent\" sur un employé, cela le supprime ou l'ajoute de la liste des présences." +
            " Seulement, une fois qu'on retourne dans la liste des employés, celle-ci réinitialise tout le monde à " +
            "\"absent\", ce qui fait qu'une personne étant dans la liste des présents est cochée comme absent dans la " +
            "liste des employés. C'est le problème sur lequel je vais m'attarder après la réunion de cette après-midi. " +
            "Pour l'heure, j'ai apporté quelques améliorations esthétiques à mon site web pour la réunion DSI. J'ai par " +
            "exemple ajouté un footer, refait le logo des boutons dans la navbar et réglé quelques détails que vous " +
            "pouvez voir dans la capture d'écran ci-dessous." +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/code.PNG\" class=\"image-cadre\">" +
            "<img src=\"assets/images/site.PNG\" class=\"image-cadre\">" +
            "</div><br>" +
            "<span class='highlight'>APRES-MIDI</span> : Mon après-midi a débuté à 14h avec la réunion hebdommadaire " +
            "'Échange DSI', dirigée par Cédric Martinez. J'ai pu présenter mon application aux 14 membres de l'équipe" +
            " informatique présent ce jour. Je suis satisfait du rendu et cette expérience a été grandement enrichissante. Nous avons " +
            "également abordé les grandes lignes du travail sans entrer dans les détails techniques de l'ensemble des " +
            "autres salariés de l'équipe. Une capture d'écran de la réunion DSI est disponible ci-dessous, où Camille " +
            "présentait les résultats hebdomadaires des tests de vulnérabilité. Après la réunion, comme prévu, j'ai " +
            "travaillé en vain sur le problème mentionné précédemment.</p>" +
            "<img src=\"assets/images/reuDSI.jpg\" class=\"image-cadre\"></div>",

        week6: "<div class='blog-post'><h2>Lundi 12 Février</h2><p><span class='highlight'>MATIN</span> : Dès 9h15, j'ai" +
            " été impliqué dans la réunion 'daily' pour démarrer ma journée. Ensuite, durant le reste de la matinée, je" +
            " me suis concentré sur les modules restants de l'outil DCC Cyber Safe à terminer pour aujourd'hui. Vous " +
            "trouverez la capture d'écran de ces modules terminés ci-dessous.<br><span class='highlight'>" +
            "<img src=\"assets/images/dccTermine.png\" class=\"image-cadre\">" +
            "APRES-MIDI</span> : Cette après-midi, j'ai pu entièrement me consacrer à résoudre le problème persistant " +
            "depuis vendredi, à savoir la réinitialisation automatique des employés à \"absent\" au lieu de les cocher " +
            "\"présents\" s'ils sont dans la table des présences. J'ai pu identifier le problème en fin d'après-midi. " +
            "Pour cela, j'ai créé une nouvelle méthode dans le fichier presence.service.ts (voir capture du haut), puis" +
            " j'ai appelé cette nouvelle méthode dans le fichier employee.component.ts (voir capture du bas). En " +
            "effet, lorsque je charge la page des employés, dans la méthode \"ngOnInit\", j'appelle ma fonction " +
            "\"getAllEmployeeWithPresence\". Elle va chercher tous les noms des employés présents dans la table des " +
            "présences afin de les cocher comme \"présents\" dans la table des employés. Vers 16h30, une fois cela résolu," +
            " j'ai fait corriger le code par Mouhamadou, qui m'a suggéré un \"todo\" (à la ligne 83) pour améliorer ce " +
            "code. Cependant, Mouhamadou m'a également informé qu'il était impératif de déployer cette application sur " +
            "un serveur. Vers 17h, j'ai rencontré Aurélien Cartereau, qui m'aidera à mettre en ligne mon application. " +
            "Pour l'instant, il m'a simplement indiqué les outils que j'aurai à lui envoyer demain pour que cela soit" +
            " possible. Ils sont au nombre de trois, la base de données compréssée, le back-end et le front-end séparement.</p><br>" +
            "<img src=\"assets/images/code1.PNG\" class=\"image-cadre-spe\">" +
            "<img src=\"assets/images/code2.PNG\" class=\"image-cadre-spe-spe\">" +
            "" +
            "" +
            "<h2>Mardi 13 Février</h2><p><span class='highlight'>MATIN</span> : J'ai débuté ma journée en participant à " +
            "la réunion 'daily' à 9h15. Ensuite, j'ai directement enchaîné avec la réunion de mi-sprint qui a duré une " +
            "grande partie de la matinée. Les développeurs ont fait le point sur les tickets à absolument terminer d'ici" +
            " mardi prochain, date de fin du sprint 7. J'ai pu exposer aux développeurs ce que je comptais faire sur le " +
            "projet d'ici la fin du stage. Ensuite, j'ai préparé les deux premiers documents à envoyer à Aurélien pour " +
            "les déposer sur le serveur. Pour cela, j'ai effectué une sauvegarde (un \"backup\" (voir capture d'écran de" +
            " gauche) de ma base de données PostgreSQL. Je lui ai ensuite envoyé via cette commande : \"scp 'C:\\dev\\di" +
            "gitalisationpresence\\backup.sql'support@liv-swarm-test-01:/core/TMP\". En ce qui concerne le back, je lui " +
            "ai envoyé mon dossier back grâce à cette commande : \"scp 'C:\\dev\\digitalisationpresence\\back\\target\\" +
            "azennback-0.0.1-SNAPSHOT.jar' support@liv-swarm-test-01:/core/TMP\". J'ai en fait compressé le back dans un" +
            " package grâce à Maven (voir capture d'écan de droite). Je m'occuperai du front cet après-midi." +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/backup.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/back.PNG\" class=\"image-cadre\"><br>" +
            "</div><br>" +
            "<span class='highlight'>APRES-MIDI</span> : J'ai pu voir en début d'après midi comment aurélien met en " +
            "production mon application. Il m'a expliqué qu'il était préférable de d'abord mettre en ligne la base de " +
            "données parce que cela permet de s'assurer que toutes les données sont correctement synchronisées et " +
            "accessibles avant de déployer l'application elle-même. Après quelques problèmes mineurs, nous sommes parvenus" +
            " à notre but (voir capture d'écran de gauche). Puis, pendant qu'Aurélien mettait en ligne le backend que" +
            " je lui ai envoyé ce matin, il m'a demandé de lui envoyer le frontend. Mais le hic était que le frontend " +
            "pesait 650 Mo. Après plusieurs tentatives de réduction de taille, je lui ai envoyé le frontend sans les " +
            "dossiers node_modules et target en utilisant la commande suivante : \"scp -r 'C:\\dev\\digitalisationpresence " +
            "\\test' support@liv-swarm-test-01:/core/TMP\". L'option '-r' indique au serveur qu'il s'agit d'un dossier," +
            " contrairement à ce que j'ai envoyé ce matin. En fin de journée, j'ai pu rejoindre Aurélien pour finaliser " +
            "la mise en production du backend. Nous y sommes parvenus avec succès ! Vous trouverez la capture à droite " +
            "ci-dessous. Cependant, le front-end nous a posé davantage de problèmes...</p>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/bdd.png\" class=\"image-cadre\">" +
            "<img src=\"assets/images/backOk.png\" class=\"image-cadre\">" +
            "</div><br>" +
            "" +
            "" +
            "<h2>Mercredi 14 Février</h2><p><span class='highlight'>MATIN</span> : La réunion 'daily' à 9h15 a marqué le " +
            "début de ma journée. Ensuite, j'ai pu avoir l'entretien hebdomadaire avec Mouhamadou où je lui ai exposé le" +
            " problème que nous avons rencontré avec Aurélien la veille, à savoir un front-end qui pèse trop lourd. Ensemble," +
            " nous sommes parvenus à créer le dossier \"dist\" qui permet de compiler toute l'application en un dossier de " +
            "seulement 5 Mo. Cela a été possible grâce à une modification dans le fichier angular.json, où j'ai remplacé " +
            "\"static\" par \"dist\" à la ligne 26 (capture d'écran de gauche), puis en exécutant la commande \"ng build" +
            " --watch\". Une fois ce dossier \"dist\" créé, je l'ai ensuite envoyé comme hier avec la commande \"scp -r" +
            " 'C:\\dev\\digitalisationpresence\\test' support@liv-swarm-test-01:/core/TMP\" (capture de droite). Comme " +
            "Aurélien n'était pas disponible ce mercredi, une fois ce dossier envoyé, je me suis intéressé en fin de matinée " +
            "à l'impression de la liste des employés, comme le montre mon Jira (voir la capture d'écran de jeudi).</p>" +
            "<div class=\"image-container\">" +
            "<img src=\"assets/images/dist.PNG\" class=\"image-cadre\">" +
            "<img src=\"assets/images/envoieFront.PNG\" class=\"image-cadre\"><br>" +
            "</div><br>" +
            "" +
            "" +
            "<h2>Jeudi 15 Février</h2><p><span class='highlight'>MATIN</span> : À 9h15, j'ai pris part à la réunion 'daily'" +
            " pour amorcer ma journée. Ensuite, j'ai pu rejoindre Aurélien pour tenter de mettre en production le front-" +
            "end. Nous avons résolu quelques problèmes mineurs, puis Mouhamadou nous a rejoints pour tenter d'atteindre " +
            "notre objectif. Ensemble, nous y sommes parvenus. La base de données, le back-end et le front-end sont donc" +
            " maintenant en production. Cependant, nous avons constaté un nouveau problème : nous étions dans " +
            "l'impossibilité de nous authentifier sur l'application, car le back-end ne communiquait pas avec le front-end." +
            " Nous tenterons de résoudre ce problème cet après-midi. Pour le moment, Mouhamadou et moi avons rejoint Cédric" +
            " et M. Julliand pour faire le bilan de fin de stage. Nous avons pu faire le point sur ce qui s'était bien " +
            "passé et sur ce qui nécessite une amélioration.<br><br>" +
            "<span class='highlight'>APRES-MIDI</span> : Cet après-midi, j'ai commencé à chercher une solution pour la " +
            "communication entre le back-end et le front-end en production. Ensuite, j'ai pu avancer brièvement sur mon " +
            "ticket Jira (voir capture d'écran ci-dessous). Il s'agit de créer un nouveau bouton permettant de générer un" +
            " PDF dans le but d'imprimer la liste des employés présents dans l'entreprise. Ensuite, j'ai eu un entretien" +
            " avec Driss. Il démarre un projet en utilisant JHipster et m'a contacté pour résoudre un problème que j'avais" +
            " rencontré auparavant. J'ai pu lui expliquer comment générer séparément le back et le front à partir des " +
            "lignes de commandes (jhipster --skip client et jhipster --skip server). Enfin, en fin de journée, j'ai pu m'" +
            "entretenir avec Annabelle (utilisatrice de l'application) pour fixer l'heure de rendez-vous de démo pour" +
            " demain. Cela sera à 10h.</p>" +
            "<img src=\"assets/images/ticketsRomain.png\" class=\"image-cadre-spe\"><br>" +
            "" +
            "" +
            "<h2>Vendredi 16 Février</h2><p><span class='highlight'>MATIN</span> : J'ai démarré ma journée en assistant " +
            "pour la dernière fois à la réunion 'daily' à 9h15. Ensuite, avec la collaboration de Mouhamadou, j'ai réalisé" +
            " une démonstration de mon application à Annabelle, l'utilisatrice. Dans la partie \"développement\" de la " +
            "section <u><a href=\"projet.html#projet\">'Gestion du projet'</a></u>, vous trouverez ses retours sur cette" +
            " démo. Annabelle a exprimé son appréciation et envisage de démarrer les démarches pour mettre l'application" +
            " en fonctionnement une fois le projet terminé. Mouhamadou m'a informé que les développeurs d'Azenn prendront" +
            " ensuite en charge ce projet pour le finaliser. Mouhamadou a fixé une date pour terminer le projet, probablement" +
            " au mois d'avril. Nous avons ensuite passé en revue ce qui restait à développer (visible également dans la" +
            " partie développement de la section <u><a href=\"projet.html#projet\">'Gestion du projet'</a></u>). Après " +
            "avoir remercié Annabelle, j'ai continué avec Mouhamadou pour la réunion \"sprint review\" à 11h, où nous avons " +
            "utilisé l'outil \"MetroRetro\" que j'avais recommandé à Mouhamadou la veille, étant donné que je l'avais " +
            "utilisé lors de mon stage précédent (capture d'écran ci-dessous). Nous avons partagé nos retours sur ce sprint," +
            " qui se termine le mardi 20 février, en abordant les difficultés rencontrées et les points positifs." +
            "<img src=\"assets/images/derniereSprintReview.PNG\" class=\"image-cadre\"><br>" +
            "<span class='highlight'>APRES-MIDI</span> : À partir de 14h, j'ai entamé mon après-midi avec la réunion " +
            "'Échange DSI', animée par Cédric Martinez. Comme à chaque réunion, Camille a pris la parole en début de séance" +
            " pour présenter les vulnérabilités de la semaine, suivies par les grandes lignes du travail de chacun. Ensuite," +
            " j'ai veillé à pousser toutes mes modifications sur Bitbucket. Mouhamadou m'a confirmé que d'autres développeurs" +
            " prendraient en charge mon projet pour son utilisation future (notamment finir le bouton \"impression\"). De" +
            " plus, il m'a informé que le déploiement complet du projet en production serait achevé dans la semaine à " +
            "venir. Enfin, j'ai été invité à restituer l'ordinateur de l'entreprise. Je tiens à remercier chaleureusement" +
            " Azenn pour cette expérience enrichissante et à bientôt !</p></div>",

    };

    // Fonction pour afficher le contenu de la semaine
    function showBlog(week) {
        const journalEntries = document.querySelector(".journal-entries");
        journalEntries.innerHTML = contentByWeek[week];
    }

    // Ajoutez des écouteurs d'événements pour chaque bouton de semaine
    const weekButtons = document.querySelectorAll(".day-btn");
    weekButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const week = button.getAttribute("onclick").match(/showBlog\('(\w+)'\)/)[1];
            showBlog(week);
        });
    });
});