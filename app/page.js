import React from "react";
import RootLayout from "../app/layout";
import Navbar from "./NavBar";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Cards from "./Cards";
import Section from "./Section";
import {cards, sections, Pages, site} from "./site"
import getPages from "./component/getPages"

export async function generateMetadata() {
  const pageSlug = "accueil"; // Pour tester
  let page = Pages[pageSlug]; // Récupérer la page initiale
  const apiPage = await getPages(); // Récupérer les données de la page depuis l'API
  
  // Vérifier si les données de la page API existent et ne sont pas vides
  if (apiPage && apiPage[pageSlug]) {
    const apiPageData = apiPage[pageSlug]; // Données de la page depuis l'API
    
    // Parcourir chaque clé de la page initiale
    for (const key in page) {
      // Vérifier si la clé existe dans les données de la page API et si sa valeur n'est pas vide
      if (apiPageData[key] && apiPageData[key].trim() !== "") {
        // Remplacer la valeur de la page initiale par la valeur de la page API
        page[key] = apiPageData[key];
      }
    }
  }
  
  return {
    title: `${page.title} | ${site.title}`, // Retourner le titre mis à jour
    keywords : page.tags ? page.tags.split(',').map(tag => tag.trim()) : [] ,
    description : page.description ? page.description : ""
  };
}

const Home = () => {
  // Dynamic metadata for the home page
  const page = Pages["accueil"];
  const pageTitle = page.title
  const pageDescription = page.description;

  const photos = [];

  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription} pageTags={page.tags}>
      <Navbar />
      <HeaderSimple photos={photos} title={"Page d'accueil"}/>
      
      <Section section={sections[0]} />


      <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div>

      <Section section={sections[1]} />
      
      <Footer />
    </RootLayout>
  );
};

export default Home;
