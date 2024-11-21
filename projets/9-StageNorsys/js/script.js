/*INDEX*/

function displayJournalEntries() {
  var weekSelect = document.getElementById("week-dropdown");
  var selectedWeek = weekSelect.value;
  var journalEntriesContainer = document.querySelector(".journal-entries");

  // Effacer les entrées précédentes
  journalEntriesContainer.innerHTML = "";

  // Ajouter les nouvelles entrées correspondant à la semaine sélectionnée
  if (selectedWeek === "week1") {
    var entriesWeek1 = `
    <div class="cv-container container">

    <h2>Lundi 15 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/portraits/flavio.jpg" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;"> Matin :</h3><span> Lors de mon arrivée à l'entreprise, j'ai eu l'occasion de découvrir les
     locaux, de faire une visite de l'entreprise et de rencontrer les membres de l'équipe.<br>
    <h3 style="display: inline;">Après-midi : </h3><span>J'ai eu l'opportunité de rencontrer Flavio, un stagiaire en deuxième année
     de bachelor informatique avec qui je vais passer une grande partie de mon temps. En effet, nous allons travailler ensemble
      sur le projet CRM.

    <h2>Mardi 16 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/portraits/margot.jpg" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;">Matin : </h3><span> Ce matin, j'ai fait la connaissance de Margot, une stagiaire en ressources humaines
     qui collaborera avec moi sur un projet futur que nous devrons mettre en place d'ici fin juin.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, mon tuteur de stage, Arnaud.P, m'a créé mon espace intranet
    <b>Norsys</b> en ligne au sein de l'entreprise.
     J'ai également reçu une adresse e-mail professionnelle associée à un compte Outlook.</span>
      

    <h2>Mercredi 17 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Ce matin, j'ai eu un entretien avec Arnaud.R, un Product Owner (PO) en informatique,
     qui m'a fait découvrir le projet CRM. Ensuite, à 12h, il y a eu une réunion de présentation du code de l'éthic' acteur.</span>
    <div class="image-container">
      <img src="img/ethic.png" class="image-cadre">
      <img src="img/ethic2.png" class="image-cadre">
    </div>


    <h2>Jeudi 18 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE </span>

  
    <h2>Vendredi 19 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE  </span>

  </div>
  
    `;
    journalEntriesContainer.innerHTML = entriesWeek1;
  } else if (selectedWeek === "week2") {
    var entriesWeek2 = `
    <div class="cv-container container">

    <h2>Lundi 22 mai 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> À 9h, nous avons tenu la réunion quotidienne du projet CRM pour faire le point sur les avancements et
     synchroniser l'équipe. Ensuite, nous avons eu une réunion de démonstration avec le client, car cette journée marquait la fin du sprint 4. Lors de cette réunion
      nous avons présenté les fonctionnalités développées au cours du sprint et nous avons recueilli les retours et les commentaires
      du client. C'était une occasion importante pour évaluer notre travail, valider les résultats obtenus et apporter d'éventuelles modifications ou 
      ajustements en fonction des besoins du client.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> J'ai pu recevoir cette après-midi un nouvel ordinateur professionnel dédié à mon travail. Ensuite, 
    j'ai procédé à l'installation des applications nécessaires pour le projet CRM, telles que Git, IntelliJ, et d'autres outils essentiels. Cette étape m'a 
    permis de me familiariser davantage avec les outils et les environnements de développement utilisés par l'entreprise.</span>

    <h2>Mardi 23 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> À 9h, j'ai participé à la réunion quotidienne du projet CRM, où nous avons discuté des avancements, 
    des défis et des prochaines étapes à suivre. Ensuite, j'ai eu le privilège d'avoir un entretien en visioconférence avec Michael GIRY, un développeur
     très expérimenté. Lors de notre entretien, Michael m'a généreusement consacré du temps pour m'expliquer en détail le fonctionnement des applications
      essentielles au projet CRM. Il m'a partagé ses connaissances approfondies et son expérience précieuse, me donnant des indications sur les meilleures
       pratiques, les pièges à éviter et les astuces pour maximiser l'efficacité de ces applications.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> 
    J'ai entamé mon parcours dans l'apprentissage d'Angular en suivant mon premier cours sur une plateforme de formation en ligne renommée, Udemy. Cette ressource
     pédagogique m'a offert un accès privilégié à une série de vidéos instructives soigneusement organisées en fonction de thèmes pertinents.nGrâce à Udemy, j'ai
      pu bénéficier d'une expérience d'apprentissage structurée et immersive. </span>
     <div class="image-container">
     <img src="img/udemycestquoi.png" class="image-cadre">
      <img src="img/udemycestquoi2.png" class="image-cadre">
    </div>
    

    <h2>Mercredi 24 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/portraits/Hinda.png" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;">Matin : </h3><span> 
    À 9h, j'ai participé à la réunion quotidienne du projet CRM, où nous avons fait le point sur les avancements et les tâches à accomplir. Par la suite, j'ai eu le 
    plaisir d'accueillir Hinda, une nouvelle employée chez <b>Norsys</b>, en tant qu'ingénieure en Java au sein de notre entreprise. Durant la fin de matinée, j'ai poursuivi
     ma formation en suivant des cours sur Udemy. Ce fut une occasion de découvrir un nouveau langage : Java. Cette exploration m'a permis d'élargir mes compétences et 
     de me familiariser davantage avec le monde de la programmation en Java.</span><br>

    <h2>Jeudi 25 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>Ce matin, à 9h, j'ai assisté à la réunion quotidienne du projet CRM. Ensuite, j'ai consacré mon temps à suivre
     des cours sur Udemy portant sur Angular et Java.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai également continué mes cours sur Angular et Java. Puis en fin de journée j'ai dû 
    organiser au côté de Margot Duroule le traditionnel concours de pétanque qui aura lieu à partir de juin.</span>

    <h2>Vendredi 26 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> En début de matinée, nous avons eu le rendez-vous quotidien à 9h pour la réunion "Daily" du projet CRM. Ensuite,
     j'ai poursuivi ma journée en suivant mes cours sur Udemy. À 10h, toute l'équipe du projet CRM s'est réunie pour faire le point sur l'avancement du projet. J'ai
      eu la chance d'y participer</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Une fois de plus, cette après-midi j'ai consacré une partie de ma journée à suivre les cours sur Udemy en Java et Angular.
     Grâce à ces nombreux apprentissages, j'ai pu mettre mes connaissances en pratique en créant mon premier projet solo en Angular. J'ai utilisé l'interface WebStorm
      pour développer une interface web impressionnante et fonctionnelle. Cela a été une expérience enrichissante et gratifiante qui m'a permis de consolider mes 
      compétences et de gagner en confiance dans mes capacités de développement.</span>
    
    <div class="image-container">
    <img src="img/my-first-app.png" class="image-cadre">
      <img src="img/my-first-app2.png" class="image-cadre">
    </div>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek2;
  } else if (selectedWeek === "week3") {
    var entriesWeek3 = `
    <div class="cv-container container">

    <h2>Lundi 29 mai 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE </span>

    <h2>Mardi 30 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Une réunion journalière du projet CRM a été tenue à neuf heures. Par la suite, 
    à dix heures, une rencontre impliquant Hinda, Michael moi a été planifiée afin de présenter le code du projet CRM, en mettant un
     accent particulier sur l'explication des "tests unitaires". Cette réunion s'est avérée être d'une complexité notable, en raison 
     de l'ampleur des informations abordées, néanmoins, elle s'est révélée extrêmement enrichissante. La pyramide des tests, dont une 
     illustration est présente ci-dessous, est l'un des sujets abordés.</span><br>
     <img src="img/pyramideDesTests.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> La réunion s'est poursuivie avec Michael et Hinda, mais cette fois-ci au sujet 
    d'Hibernate. Michael nous a recommandé deux livres à lire : "Clean code" et "Unit Testing".</span>

    <h2>Mercredi 31 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> La journée a commencé avec la réunion quotidienne du projet CRM à 9 heures. 
    Ensuite, j'ai poursuivi mes cours sur Angular et Java sur la plateforme Udemy.  Par la suite, j'ai eu une réunion avec Flavio Henriques et 
    Margot Duroule pour discuter de l'évènement prévues à la fin du mois de juin avec l'ensemble des employés de <b>Norsys</b> Lyon.</span><br>

    <h2>Jeudi 1 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> La journée a débuté avec la réunion quotidienne du projet CRM à 9 heures. Par la suite, 
    j'ai continué mes cours sur la plateforme Udemy. Ensuite, j'ai pu échanger avec Flavio qui m'a expliqué le fonctionnement du NgSelect en Angular.
     Il m'a donné des informations sur son utilisation, ses fonctionnalités et comment l'intégrer dans notre projet. Cela m'a permis de mieux 
     comprendre le principe du NgSelect et d'envisager son utilisation dans nos développements.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Dans l'après-midi, j'ai eu une réunion avec Hinda concernant l'architecture du 
    projet CRM. Enfin, à 17h30, j'ai eu un entretien avec M. Schaffter concernant Angular.</span>

    <h2>Vendredi 2 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Aujourd'hui marque la fin du sprint 5 du projet CRM. Nous avons commencé la journée par la réunion daily
     à 9h, où nous avons fait le point sur les avancements réalisés et les tâches restantes. Ensuite, nous nous sommes concentrés sur la préparation de la 
     réunion qui aura lieu cet après-midi.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> L'après-midi a été consacré à deux réunions importantes. À 14h, nous avons eu une réunion de rétrospective 
    de fin de sprint pour évaluer notre travail précédent et identifier les points à améliorer.Cette réunion s'est déroulée sur la plateforme "Metroretro", offrant 
    une expérience ergonomique et interactive. Ensuite, à 16h, nous avons poursuivi avec la réunion de "Sprint Planning"
     pour définir les grandes lignes des prochaines semaines sur le projet. Ces réunions ont été cruciales pour établir des objectifs clairs et assurer une bonne 
     organisation de notre travail. Voici une capture d'écran de cette réunion. </span>
     <img src="img/retrosprint5.png" class="image-cadre">

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek3;
  } else if (selectedWeek === "week4") {
    var entriesWeek4 = `
    <div class="cv-container container">

    <h2>Lundi 5 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> A 9h réunion daily du projet CRM. Puis aujourd'hui, est marqué par mon entrée dans le code CRM en tant que stagiaire dev. 
    Avec Hinda nous nous sommes donc occupé de notre premier US en peer-programming. Il s'agit d'ajouter dans le front des contacts à un service. Ci-dessous, la
    capture d'écran de notre US ainsi que les tâches à réaliser.</span><br>
    <img src="img/tachearealiser.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> J'ai poursuivis mon US au côté d'Hinda : Après avoir fait le front dans la matinée 
    nous avons en peer-programming toujours rentrée les données avec des reqêtes SQL dans le logiciel DBeaver.</span>

    <h2>Mardi 6 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Ce matin avec Hinda nous avons continué notre US en peer-programming 
    sur l'ajout des contacts au projet CRM. J'ai pu mobilisé mes compétences tant en back avec Java que en front avec Angular.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> A 14h réunion d'équipe avec l'ensemble des développeurs actifs du projet : Flavio, Hinda, Jeremy et moi.
    Flavio et Jeremy ont pu nous rendre compte des bonnes et mauvaises chose de ce que faisions depuis lundi matin.</span>

    <h2>Mercredi 7 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Ensuite j'ai pu avoir un entretien avec Jeremy Crosby qui m' expliqué le 
    fonctionnement de GitKraken ainsi que le principe du pull, push et MR qui sont les principales commandes sur ce logiciel.</span><br>

    <h2>Jeudi 8 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> 
    À 9h, j'ai participé à la réunion quotidienne du projet CRM. Ensuite, j'ai saisi l'opportunité d'approfondir mes compétences en Angular en suivant des
     cours disponibles sur Udemy. Durant la pause déjeuner, de midi à 13 heures, mon partenaire de jeu Flavio et moi avons pris part au tournoi de pétanque, 
     ce qui s'est révélé être une expérience conviviale plaisante.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai eu l'opportunité de réaliser <b> mon premier ticket</b> en autonomie. J'ai réussi
     à ajouter le favicon <b>Norsys</b> au projet CRM. En clôture de journée, s'est déroulé le "Jeudi Drinks", un rendez-vous mensuel au deuxième jeudi de chaque 
     mois, célébrant les anniversaires et favorisant la convivialité entre les employés autour d'un verre dans une ambiance chaleureuse.</span>

    <h2>Vendredi 9 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Par la suite, j'ai entrepris <b>mon second ticket</b> de manière autonome. 
    Cette tâche consistait à rendre les textes du menu cliquables, étant donné que seule l'icône l'était jusqu'alors. Vous pourrez voir ci-dessous, 
    la capture d'écran de l'US de cette mission avec le logiciel Jira Software. Une fois effectuer cette tâche permettra une navigation plus interactive
     et intuitive pour les utilisateurs.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Au cours de cette après-midi, en compagnie de Flavio, j'ai eu l'opportunité de retravailer cette tâche 
    qui, finalement, se révèle plus complexe que prévu. Par la suite, j'ai revisité certains points de cours sur la plateforme Udemy.</span>
    <img src="img/menuCliquable.png" class="image-cadre">

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek4;
  } else if (selectedWeek === "week5") {
    var entriesWeek5 = `
    <div class="cv-container container">

    <h2>Lundi 12 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> À neuf heures, une réunion quotidienne du projet CRM a eu lieu. Par la suite, j'ai rejoint Flavio et Hinda, 
    qui étaient engagés dans une session de programmation en binôme, se concentrant sur l'implémentation et l'affichage des contacts et des compétences. 
    J'ai eu l'opportunité d'observer leur méthodologie de travail ainsi que leur approche de résolution des problèmes de code. </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Durant l'après-midi, j'ai eu une discussion enrichissante avec Guillaume. Il m'a expliqué en détail le 
    concept des frameworks côté back-end et front-end, leur utilité et leur utilisation dans différents langages de programmation. Grâce à lui, j'ai également pu 
    assimiler la distinction entre les langages de bas niveau et de haut niveau. Cette discussion m'a permis de prendre conscience de la hiérarchie de difficulté 
    qui existe entre l'assembleur et les frameworks. Par ailleurs, j'ai également échangé avec Flavio sur la façon de mettre en couleur les icônes des compétences
     dans les services du projet CRM. Vous trouverez ci-dessous la capture d'écran de la maquette représentant ce que nous prévoyons de réaliser.</span>
     <img src="img/competencescouleur.png" class="image-cadre">

    <h2>Mardi 13 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> À 9h, j'ai assisté à la réunion quotidienne du projet CRM. Ensuite, j'ai eu l'opportunité de discuter avec Guillaume,
     le responsable du développement front-end spécialisé en CSS, SCSS et Vue.js. Grâce à ses conseils, j'ai pu m'entraîner sur ma User Story qui consistait à rendre
      le texte cliquable. Cela m'a permis de prendre conscience des difficultés auxquelles les développeurs peuvent être confrontés lorsque des problèmes 
      persistent pendant plusieurs jours. Malheureusement, je n'ai pas réussi à résoudre le problème. Affaire à suivre. </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai eu l'opportunité d'assister, aux côtés de Flavio et Hinda, à une session de tests
     en back-end Java portant sur l'affichage des compétences. J'ai pu constater la complexité de cette pratique, même lorsque réalisée en groupe, puisque toute 
     l'après-midi a dû y être consacrée. </span>

    <h2>Mercredi 14 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> À 9h, j'ai assisté à la réunion quotidienne du projet CRM. Ensuite, j'ai rejoint Hinda en pair programming
     pour ajouter des contacts à la liste de contacts d'un service de compte. Grâce à notre travail en binôme, nous avons atteint le résultat souhaité et avons
      pu merger notre branche sur l'US. Ensuite à 11h, avec toute l'équipe de dev nous avons fait la démonstration du sprint 6 à Julien.V, le client.</span><br>

    <h2>Jeudi 15 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Après avoir participé à la réunion quotidienne du projet CRM à 9h, j'ai rejoint Flavio en pair programming pour
     ajouter une icône en forme de croix pour la suppression des compétences (voir capture d'écran). Cette tâche s'est avérée être un succès. Ensuite, nous avons tenté 
    d'ajouter la fonctionnalité de modification des compétences dans un service lié à un compte. Affaire à poursuivre cette après-midi.</span><br>
    <img src="img/supprcompetence.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> 
    Durant cette après-midi, j'ai rejoint Flavio afin de poursuivre nos efforts pour modifier et ajouter des services à un compte spécifique. Nous avons accompli notre
     objectif avec succès ! Par la suite, nous avons effectué des ajustements aux noms des services lorsqu'ils sont sélectionnés, en affichant "Édition d'un service" 
     lorsqu'on clique sur "Éditer", et "Création d'un compte" lorsque l'on clique sur "Ajouter". En soirée, à 18h30, une joyeuse assemblée de notre équipe lyonnaise 
     s'est réunie au parc de Montluc pour une partie de dogball. Cette activité récréative a permis de relâcher les tensions, de stimuler notre esprit 
     d'équipe et de recharger nos batteries pour aborder les défis à venir avec enthousiasme et énergie.</span>

    <h2>Vendredi 16 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> La journée a débuté comme à son habitude par la réunion quotidienne du projet CRM, le "daily". Par la suite, j'ai 
    eu une réunion avec Hinda et Jeremy afin de résoudre un problème lié à un test unitaire incorrect. Face à la complexité inattendue de la situation, Flavio nous a 
    rejoint pour apporter son expertise. Après un certain temps de collaboration et de résolution de problèmes, nous avons enfin réussi à faire passer le test avec succès.
     Cette expérience m'a permis de prendre conscience du temps et des efforts nécessaires pour résoudre des problèmes de cette nature, et de l'importance de la collaboration
      et du partage de connaissances au sein de l'équipe.</span><br>
      <img src="img/blog16juin.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi a été entièrement consacré à la rétrospective du sprint 6. Tous les membres collaborateurs du projet
     ont pris part à cette réunion, où nous avons eu l'occasion de mettre en évidence les points forts et les points faibles de notre équipe. Nous avons également discuté des 
     problèmes que nous avons rencontrés, en cherchant des solutions pour les résoudre et éviter qu'ils ne se reproduisent à l'avenir. Cette rétrospective a été un moment
      important de partage et d'amélioration continue, permettant à chacun de s'exprimer et de contribuer à l'évolution positive de notre équipe et de nos pratiques 
      de travail. Les deux captures d'écran ci-dessous sont extraites du site "Metroretro", utilisé pour illustrer nos points de discussion.</span>
      <div class="image-container">
     <img src="img/retrosprint6-1.png" class="image-cadre">
      <img src="img/retrosprint6-2.png" class="image-cadre">
    </div>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek5; 
  } else if (selectedWeek === "week6") {
    var entriesWeek6 = `
    <div class="cv-container container">

    <h2>Lundi 19 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> Ce lundi matin marque le début du sprint 7, et après un bref daily à 9h, l'équipe de développement et moi-même nous sommes
     réunis pour une réunion "sprint planning" (capture d'écran de gauche), où nous avons établi les grandes lignes de ce sprint qui s'étend jusqu'au 30 juin. Par la suite, à 12h30, j'ai participé à 
     une réunion intitulée "Greener applications" (capture d'écran de droite), dont l'objectif principal était de mettre en avant les outils informatiques pouvant contribuer
      à une meilleure empreinte carbone au quotidien.</span><br>
      <div class="image-container">
     <img src="img/sprint_planning.jpg" class="image-cadre">
     <img src="img/greener.png" class="image-cadre">
    </div>
      
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai eu l'occasion de discuter à nouveau avec Guillaume, le spécialiste en CSS. Ensemble, nous avons enfin
     pu accomplir ma tâche qui consistait à rendre les textes cliquables. Ensuite, j'ai eu l'occasion de commencer <b>ma troisieme nouvelle US</b> (voir capture d'écran), composée de
      4 "tasks". On m'a confié la responsabilité de terminer cette mission d'ici la fin de la semaine.</span>
      <img src="img/monUS.png" class="image-cadre">

    <h2>Mardi 20 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Ce mardi, la journée a débuté avec la traditionnelle réunion quotidienne à 9 heures. Par la suite, j'ai eu l'opportunité de 
    réviser diverses documentations disponibles sur l'intranet et le GitLab de Norsys. Cette démarche visait à approfondir mes connaissances pour mener à bien mon US. Pendant la pause déjeuner., Margot et moi avons 
    organisé le tournoi de babyfoot qui à réunit 20 employés de l'agence de Lyon. Nous avons assumé la responsabilité de la gestion 
    et de la planification des horaires des matchs.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Dans l'après-midi, j'ai pu avancer sur la user story qui m'était dédiée. J'ai commencé par effectuer ma task 
    consistant à implémenter le bouton "ajouter" sur la page de recherche des contacts, ce qui s'est avéré être un succès. Ensuite, avec un coup de pouce de Flavio, 
    j'ai pu afficher une page vide avec un formulaire de création de contact sans compte.</span>
    <img src="img/taskjira.png" class="image-cadre">

    <h2>Mercredi 21 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Ce matin, ma journée a commencé avec le CRM Daily à 9h. J'ai ensuite avancé mon US individuellement. Puis, 
    j'ai eu l'opportunité de collaborer avec Flavio et Jeremy en pratiquant le mob programming. Entre 12h et 13h, pendant la
     pause déjeuner, nous avons participé à une réunion générale sur Teams avec l'agence de Lyon et les 9 autres agences en France. Cette réunion, appelée "Webinaire
     <b>Norsys</b> Groupe", se tient tous les deux ans. Elle permet à l'entreprise de faire le point sur les règles internes et de voter sur de nouvelles propositions de
       lois au sein de <b>Norsys</b>.</span><br>

    <h2>Jeudi 22 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Ce matin, après avoir participé à la réunion CRM habituelle, j'ai continué à travaillé sur les tâches de mon US.
    Leurs réalisations s'est avéré complexe, ce qui m'a permis d'échanger avec Flavio sur certains points afin d'assurer l'efficacité de leur réalisation.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Au cours de l'après-midi, j'ai pu travailler individuellement sur les tâches de mon US. J'ai 
    également profité de ce temps pour suivre un cours Udemy afin de me rafraîchir la mémoire sur un aspect spécifique d'Angular. En fin de journée, j'ai eu la 
    possibilité de m'entretenir avec Arnaud.R afin de faire le point sur mon stage, d'aborder les compétences que j'ai acquises jusqu'à présent et d'échanger
     sur mes impressions. Enfin, à 19h30, a débuté à l'agence une soirée "Murder party" où l'un de nos collègues est mort dans d'étrange circonstance. Une ambiance 
     décontractée et joviale animait la soirée. Merci encore aux organisateurs de cette superbe soirée.</span>

    <h2>Vendredi 23 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>  J'ai entamé ma journée en rencontrant Arnaud.P pour faire le point sur mon stage et effectuer les tâches 
    administratives. À 9h, j'ai ensuite participé à ma dernière réunion quotidienne du projet CRM. J'ai passé le reste de la matinée en pair programming avec Jeremy
     pour valider la sauvegarde du formulaire de contact, qu'il soit orphelin ou non (= relier ou non à un compte client). Michael nous a ensuite rejoint pour nous 
     donner un coup de pouce.</span><br>
     <div class="service__icon" style="float: right;">
      <img src="img/portraits/Setare.png" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;">Après-midi : </h3><span> L'après-midi, j'ai eu un entretien avec Arnaud.R durant lequel je lui ai présenté l'ensemble de mes 
    tasks qui m'étaient assignées. Cela s'est avéré être un succès. Puis, en fin de journée, j'ai pris le temps de remercier tous mes collègues qui m'ont épaulés 
    pendant ces 6 semaines de stage. Enfin, j'ai eu l'honneur d'échanger avec Sétaré.C la directrice d'agence de Lyon pour un potentiel stage en janvier 2024.
    Merci beaucoup <b>Norsys</b> et à bientôt !</span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek6;
  }


}

// insertion dom et navigation dans le dom

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
// console.log(header.nextElementSibling);

// fin de la théorie 

/* Menu mobile */

function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}

menuMobile();

/*chiffre entreprise */

const chiffres = document.querySelectorAll('.numbers span');
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


/* Portfolio */

function tabsFilters() {
  const tabs = document.querySelectorAll('.portfolio-filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }


      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}

tabsFilters()

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  });

}

showProjectDetails();



/*caroussel*/

// Sélectionner les éléments du carrousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicator');

// Variables de suivi
let currentIndex = 0;
let intervalId;

// Fonction pour changer la diapositive
function changeSlide(index) {
  // Mettre à jour l'index de la diapositive active
  currentIndex += index;

  // Vérifier les limites du carrousel
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  // Déplacer le conteneur du carrousel pour afficher la diapositive active
  carouselContainer.style.transform = `translateX(${currentIndex * -100}%)`;

  // Mettre à jour l'indicateur actif
  updateIndicator();
}

// Fonction pour mettre à jour l'indicateur actif
function updateIndicator() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Fonction pour démarrer le carrousel automatique
function startCarousel() {
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 6000); // Changer de diapositive toutes les 6 secondes
}

// Fonction pour réinitialiser le carrousel automatique
function resetCarousel() {
  clearInterval(intervalId);
  startCarousel();
}

// Écouteurs d'événements pour les boutons précédent/suivant
/*prevButton.addEventListener('click', () => {
  changeSlide(-1);
  resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les boutons
});
nextButton.addEventListener('click', () => {
  changeSlide(1);
  resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les boutons
});*/

// Écouteurs d'événements pour les indicateurs
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    const indicatorIndex = Array.from(indicators).indexOf(indicator);
    changeSlide(indicatorIndex - currentIndex);
    resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les indicateurs
  });
});

// Écouteur d'événement pour les touches de gauche/droite du clavier
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    changeSlide(-1);
    resetCarousel(); // Réinitialiser le carrousel automatique lors de l'utilisation des touches de gauche/droite du clavier
  } else if (event.key === 'ArrowRight') {
    changeSlide(1);
    resetCarousel(); // Réinitialiser le carrousel automatique lors de l'utilisation des touches de gauche/droite du clavier
  }
});

// Mettre en surbrillance de l'indicateur actif initial
updateIndicator();

// Démarrer le carrousel automatique
startCarousel();

/* bar compétences */

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();


/*PROJET*/

/*sprint*/

function togglePhoto() {
  var photoDiv = document.getElementById("photo");
  var toggleButton = document.getElementById("toggle-button");

  if (photoDiv.style.display === "none") {
    photoDiv.style.display = "block";
    toggleButton.textContent = "Masquer la photo";
  } else {
    photoDiv.style.display = "none";
    toggleButton.textContent = "Voir la photo";
  }
}


var modalBtn = document.getElementById("open-modalspe");
var modal = document.getElementById("modal-locspe");
var modalCloseBtn = modal.querySelector(".modal__closespe");

function openModalspe() {
  modal.style.display = "block";
}

function closeModalspe() {
  modal.style.display = "none";
}

modalBtn.addEventListener("click", openModalspe);
modalCloseBtn.addEventListener("click", closeModalspe);


/*tests unitaires*/

window.onload = function() {
  var gridItems = document.querySelectorAll('.grid-item');

  function showGridItems() {
    gridItems.forEach(function(item, index) {
      setTimeout(function() {
        item.style.opacity = 1;
      }, index * 500); // Delay appearance based on index
    });
  }

  showGridItems();
};

/* full screen */

function toggleFullscreen(image) {
    var imageContainer = image.parentNode;
    var closeButton = imageContainer.querySelector('.close-button');
    var isFullscreen = imageContainer.classList.toggle('fullscreen');
    
    if (isFullscreen) {
        closeButton.classList.remove('hide');
    } else {
        closeButton.classList.add('hide');
    }
}

function closeFullscreen() {
    var fullscreenImageContainer = document.querySelector('.image-container.fullscreen');
    if (fullscreenImageContainer) {
        fullscreenImageContainer.classList.remove('fullscreen');
        var closeButton = fullscreenImageContainer.querySelector('.close-button');
        closeButton.classList.add('hide');
    }
}

/*page accueil projet*/

var modalBtnBienvenue = document.getElementById("open-modal_bienvenue");
var modalBienvenue = document.getElementById("modal-bienvenue");
var modalCloseBtnBienvenue = modalBienvenue.querySelector(".modal__closespe");


function openModalBienvenue() {
  modalBienvenue.style.display = "block";
}

function closeModalBienvenue() {
  modalBienvenue.style.display = "none";
}

modalBtnBienvenue.addEventListener("click", openModalBienvenue);
modalCloseBtnBienvenue.addEventListener("click", closeModalBienvenue);


/*affichage lettre remerciement*/

const textElement = document.getElementById("remerciementText");
    const text = textElement.innerHTML;
    textElement.innerHTML = "";

    let index = 0;

    function displayText() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(displayText, 3);
        }
    }

    displayText();

















/*affichage par paragraphe*/

/*
// Get the paragraphs and store them in an array
const paragraphs = [
  "Bienvenue sur le projet CRM, une expérience à laquelle j'ai eu le privilège de participer en tant que stagiaire chez <b>Norsys</b>. Ce projet a été développé par l'équipe de développement de l'entreprise, et en tant que stagiaire, j'ai pu y apporter ma contribution. Lancé en février 2023, ce projet est ambitieux et prévoit encore plusieurs années de développement avant sa finalisation. Toutefois, dès juillet 2023, il sera mis à disposition des commerciaux de l'entreprise <b>Norsys</b>, qui en seront les utilisateurs.",
  "L'objectif principal du projet est de créer une interface rapide et intuitive pour les commerciaux, où chacun dispose d'un espace numérique personnalisé. Cet espace contient la liste des comptes clients de l'entreprise. Lorsqu'un commercial sélectionne un compte client, il peut accéder à une multitude d'informations, telles que les collaborateurs travaillant avec ce client (développeurs, chefs de projet, lead dev...), les contacts associés, les services liés, les compétences de chaque collaborateur et plus encore.",
  "L'interface CRM du projet vise à faciliter le travail des commerciaux en leur fournissant toutes les informations nécessaires sur les comptes clients de manière claire et organisée. Cela leur permet de mieux comprendre les relations entre l'entreprise <b>Norsys</b> et ses clients, ainsi que de gérer efficacement leurs interactions avec eux. Ce CRM est donc une véritable opportunité de croissance pour l'entreprise.",
  "Voici quelques captures d'écran de l'interface graphique de ce projet ambitieux développé en Angular et Java. Ces images illustrent la qualité et l'esthétique de l'interface utilisateur, fruit du travail minutieux de notre équipe de développement. Bonne visite !"
 ];
 
 // Function to animate text appearing paragraph by paragraph
 function animateText(index) {
  // Check if all paragraphs have been displayed
  if (index >= paragraphs.length) {
  return;
  }
 
 // Select the current paragraph element
  const paragraphElement = document.getElementById(`paragraph${index + 1}`);
  paragraphElement.style.animation = "fadein 1s";
  paragraphElement.textContent = paragraphs[index];
 
 // Increment the index and recursively call the function for the next paragraph
  setTimeout(() => {
  animateText(index + 1);
  }, 1500);
 }
 
 // Call the animateText function to start the animation
 animateText(0);*/