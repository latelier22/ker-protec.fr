// MyPage.js

import React from "react";
import Navbar from "../../src/components/NavBar";
import Footer from "../../src/components/Footer";
import RootLayout from "../../src/components/layout";
import HeaderSimple from "../../src/components/headerSimple";

import Cards from "../../src/components/Cards";
import MyLightBox from "../../src/components/MyLightBox"
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

      <MyLightBox photos={page.photos} />

      <div className="">
        <Cards cards={page.cards}  />
      </div>

      <Footer />
    </RootLayout>
  );
};

export default MyPage;
