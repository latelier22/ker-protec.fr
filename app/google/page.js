
"use client"

import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import GooglePhotos from "../googleComponents/GooglePhotos.tsx"

const GooglePhotoPage = () =>{
  const pageTitle = 'Google Photos';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      
      <GooglePhotos/>

      <Footer />
    </RootLayout>
  );
};

export default GooglePhotoPage;
