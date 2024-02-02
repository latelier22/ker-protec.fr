// MyPage.js

import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import Section from "../Section";
import Pictos from "../Pictos";
import ImagesBar from "../ImagesBar";
import Cards from "../Cards";

import { Pages } from "../site";

const MyPage = ({ params }) => {
  const pageSlug = params.pageSlug;
  const page = Pages[pageSlug];
  if (!page) {
    return (
      <RootLayout >
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1>Page non trouvée</h1>
        </div>
      </RootLayout>
    );
  }
  return (
    <RootLayout pageTitle={page.title} pageDescription={page.description}>

      <Navbar />

      <HeaderSimple photos={page.photos} title={page.title}/>

      <ImagesBar photos={page.photos}/>

      {page.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
      {/* <Pictos /> */}

      <div className="">
        <Cards cards={page.cards}  />
      </div>

      <Footer />
    </RootLayout>
  );
};

export default MyPage;
