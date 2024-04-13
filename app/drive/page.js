

import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import FormContact from "../FormContact";
import FolderList from "../components/FolderList"

const Contact = () => {
  const pageTitle = 'drive';
  const pageDescription = 'Restons en contact, telephone, email, réseaux sociaux';
  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <FolderList />
      <Footer />
    </RootLayout>
  );
};

export default Contact;
