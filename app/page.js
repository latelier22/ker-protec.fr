import React from "react";
import RootLayout from "../app/layout";
import Navbar from "./NavBar";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Cards from "./Cards";
import Section from "./Section";
import {cards, sections, Pages} from "./site"

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
