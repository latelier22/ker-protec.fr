

import Navbar from "../../src/components/NavBar";
import Footer from "../../src/components/Footer";
import RootLayout from "../../src/components/layout";
import FormContact from "../../src/components/FormContact";

const Contact = () => {
  const pageTitle = 'Contact';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <FormContact/>
      <Footer />
    </RootLayout>
  );
};

export default Contact;
