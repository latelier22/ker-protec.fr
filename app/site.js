export const site = {
  title: "KER PROTEC",
  description: "KER PROTEC - Olivier MIQUEL- 07 71 84 91 07",
  societe: "KER PROTEC",
  SIRET: "53478675100022",
  contact: "Olivier GUREME",
  telephone: "0780698451",
  adresse: "Place Jules GILLET",
  codePostal: "56880",
  ville: "PLOEREN",
  email: "kerprotec56@gmail.com",
  logo: { url: "images/logo-barre-du-haut.png", alt: "logo Ker PROTEC" },
  Logo: { url: "images/logo-banniere.png", alt: "logo Ker PROTEC" },
};

export const menuItems = [
  { label: "Accueil", route: "/" },
  { label: "Peinture extérieure", route: "/peinture-exterieure" },
  { label: "Peinture intérieure", route: "/peinture-interieure" },
  { label: "Entretien", route: "/entretien" },
  { label: "Nettoyage", route: "/nettoyage" },
  { label: "Peintures & Nuanciers", route: "/peinture-nuancier" },
  { label: "Nos réalisations", route: "/realisations" },
  { label: "Contact", route: "/contact" },
];



export const cards = [
  {
    title: "PEINTURE EXTERIEURE",
    text: "",
    button: "Détail",
    buttonColor: "bg-gold-500",
    link: "/peinture-exterieure",
    url: "peinture-mur-exterieur.png",
    alt: "",
  },

  {
    title: "PEINTURE INTERIEURE",
    text: "",
    button: "Détail",
    buttonColor: "bg-gold-500",
    link: "/peinture-interieure",
    url: "peinture-mur-interieur.png",
    alt: "",
  },

  {
    title: "TRAVAUX DIVERS",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/travaux-divers",
    url: "menu-travaux-divers.png",
    alt: "",
  },

  {
    title: "NOS REALISATIONS",
    text: "",
    button: "",
    buttonColor: "bg-gold-500",
    link: "/travaux-divers",
    url: "menu-peinture-exterieure.png",
    alt: "",
  },

  
];


export const sections = [
  {
    title: "Qui sommes-nous?",
    body : "KER PROTEC est spécialisé dans les travaux de peinture extérieure, le ravalement et la rénovation des façades. Pour tous types de bâtiment, votre peintre vous propose des solutions pratiques pour mettre en valeur votre extérieur. Veillant à la qualité de ses réalisations, votre peintre d’extérieur, utilise des produits de qualité et respectueux à l’environnement. il vous garantit des prestations de qualité irréprochable dans le respect de l’environnement et des normes en vigueur. Doté d’un sens esthétique créatif, votre expert en peinture extérieure saura vous conseiller la couleur la plus harmonieuse avec votre décoration. Confiez vos travaux de peinture extérieure à ker protec et profitez d’un extérieur bien entretenu et protégé contre les changements climatiques."
  },
  {
    title: " NOS SAVOIRS FAIRE",
    body : <ul className="list-disc pl-4">
      <li></li>
      <li></li>
      <li></li>
      </ul>
  },
]


export const listesActions = [
  {
    title: "ENTRETIEN",
    subTitle: "",
    photo: { url: "Rectangle_8.png", alt: "" },
    actions: [""],
  },
  {
    title: "PEINTURE EXTERIEURE",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: ["", "", ""],
  },
  {
    title: "PEINTURE INTERIEURE",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: ["", "", ""],
  },

  {
    title: "NETTOYAGE",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
  {
    title: "PRODUITS",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
  {
    title: "NOS REALISATIONS",
    subTitle: "",
    photo: { url: "", alt: "" },
    actions: [""],
  },
];

export const Pages = {
  entretien: {
    title: "Entretien",
    description: "",
    photos: [
      { url: "entretien-1.png", alt: "gallery" },
      { url: "entretien-2.png", alt: "gallery" },
      { url: "entretien-3.png", alt: "gallery" },
      { url: "entretien-4.png", alt: "gallery" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc text-gold-400 pl-4">
            <li></li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  "peinture-exterieure": {
    title: "Peinture extérieure",
    description: "",
    photos: [
      { url: "reparation-1.png", alt: "gallery" },
      { url: "reparation-2.png", alt: "gallery" },
      { url: "reparation-3.png", alt: "gallery" },
      { url: "reparation-4.png", alt: "gallery" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li> Peinture extérieur</li>
            <li> Peinture sur boiseries</li>
            <li>
              {" "}
              Création et rénovation peinture sur dessous de toit (cache
              moineau){" "}
            </li>
            <li> Peinture sur volet</li>
            <li> Peinture ferronneries et métaux</li>
            <li> Ravalement extérieur</li>
            <li> Peinture d&apos;étanchéité pour toiture</li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  "peinture-interieure": {
    title: "Peinture intérieure",
    description: "",
    photos: [
      { url: "peinture-1.png", alt: "gallery" },
      { url: "peinture-2.png", alt: "gallery" },
      { url: "peinture-3.png", alt: "gallery" },
      { url: "peinture-4.png", alt: "gallery" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li>Enduit réparation</li>
            <li>Rénovation & Décoration intérieur</li>
            <li>Protection des sols et meubles Lessivage</li>
            <li>Protection des sols et meubles Lessivage</li>
            <li>Application d&apos;une couche d&apos;impression acrylique</li>
            <li>Rebouchage et lissage des surfaces</li>
            <li>Enduisage</li>
            <li>Ponçage</li>
          </ul>
        ),
      },
      {
        title: "PEINTURE DES MURS, SOLS ET PLAFONDS :",
        body: (
          <ul className="list-disc pl-4">
            <li>L’intégralité des travaux de peinture par nos équipes: peinture des murs, sols et plafonds</li>
<li>Les peintures professionnelles sont particulièrement performantes pour couvrir murs et plafonds, mais aussi vos sols. Présentant une extrême résistance chimique et mécanique, il est possible de repeindre votre parquet, votre escalier, votre carrelage ou votre sol en béton</li>
<li>Ces peintures adaptées résistent aux allées et venues de toute la maisonnée.</li>
<li>Structurer l&apos;espace grâce à la peinture décorative</li>
<li>Pour affirmer le caractère d’une pièce, optez pour une couleur forte sur un seul pan de murs. Le choix d’une couleur claire agrandira la pièce. Peindre un plafond d’une couleur sombre l&apos;abaissera visuellement ; appliquer la même couleur aux murs réduira l’espace.</li>
          </ul>
        ),
      },
    ],
    cards: [],
  },

  "peinture-nuancier": {
    title: "Peintures & nuanciers",
    description: "",
    photos: [
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  nettoyage: {
    title: "Nettoyage",
    description: "",
    photos: [
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  realisations: {
    title: "Nos réalisations",
    description: "",
    photos: [
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
      { url: "", alt: "" },
    ],
    sections: [
      {
        title: "NOS SAVOIR FAIRE :",
        body: (
          <ul className="list-disc pl-4">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ),
      },
    ],
    cards: [],
  },
  // Ajoutez d&apos;autres données au besoin
};
