import React from "react";
import RootLayout from "../app/layout";
import Navbar from "./NavBar";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Pictos from "./Pictos"
import Cards from "./Cards";
import Section from "./Section";

const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = "Accueil";
  const pageDescription = "Bienvenue sur le site de PRO COUVERTURE LOUDEAC";

  // DÃ©clarer les photos dans un tableau d&apos;objets
  const photos = [];

  

  const cards = [
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


  const sections = [
    {
      title: "Qui sommes-nous?",
      body : "KER PROTECH est spécialisé dans les travaux de peinture extérieure, le ravalement et la rénovation des façades. Pour tous types de bâtiment, votre peintre vous propose des solutions pratiques pour mettre en valeur votre extérieur. Veillant à la qualité de ses réalisations, votre peintre d’extérieur, utilise des produits de qualité et respectueux à l’environnement. il vous garantit des prestations de qualité irréprochable dans le respect de l’environnement et des normes en vigueur. Doté d’un sens esthétique créatif, votre expert en peinture extérieure saura vous conseiller la couleur la plus harmonieuse avec votre décoration. Confiez vos travaux de peinture extérieure à ker protec et profitez d’un extérieur bien entretenu et protégé contre les changements climatiques."
    },
    {
      title: " NOS SAVOIRS FAIRES",
      body : <ul className="list-disc pl-4">
        <li></li>
        <li></li>
        <li></li>
        </ul>
    },
  ]




  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple photos={photos} title={pageTitle}/>
      {/* <Pictos /> */}

      <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <Section section={sections[0]} />
      <Section section={sections[1]} />

      <Footer />
    </RootLayout>
  );
};

export default Home;
