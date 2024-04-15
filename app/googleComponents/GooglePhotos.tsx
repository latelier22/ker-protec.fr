


import Image from "next/image"
import { GoogleAlbum, GoogleAlbumsResponse } from "../types/google"
import { getGoogleApiToken, getGoogleAlbums,getGoogleSharedAlbums } from '../utils/GoogleApi'
import Cards from "../Cards";

const GooglePhotos = async () => {
    // const files = await getData();
   

    const bearerToken = await getGoogleApiToken();

  // let nextPageToken: string | undefined = '';
  let nextPageToken2: string | undefined = '';

  let albums: GoogleAlbum[] = [];
  let sharedAlbums: GoogleAlbum[] = [];

  // do {
  //   const data: GoogleAlbumsResponse = await getGoogleAlbums(
  //     bearerToken,
  //     nextPageToken
  //   );
  //   if (data.albums) {
  //     albums = [...albums, ...data.albums];
  //   }
  //   nextPageToken = data.nextPageToken;
  // } while (nextPageToken);

  do {
    const data2: GoogleAlbumsResponse = await getGoogleSharedAlbums(
      bearerToken,
      nextPageToken2
    );
    if (data2.sharedAlbums) {
      sharedAlbums = [...sharedAlbums, ...data2.sharedAlbums];
    }
    nextPageToken2 = data2.nextPageToken;
  } while (nextPageToken2);

  // Filtrer les albums partagés dont le titre commence par "ker-protec"
  const filteredAlbums = sharedAlbums.filter(album => album.title.startsWith("ker-protec"));

  console.log(albums,sharedAlbums)

// Transformation des albums partagés en objets cards
const sharedAlbumsCards = filteredAlbums.map(album => ({
  title: album.title,
  text: `Nombre de photos: ${album.mediaItemsCount}`,
  button: "Voir l'album",
  buttonColor: "bg-gold-500",
  link: album.productUrl,
  url: album.coverPhotoBaseUrl,
  alt: album.title,
}));




    return (
        <div className="pt-32">
          
            
            <h2>Liste des albums partagés</h2>
            <Cards cards={sharedAlbumsCards} syliusCard={true} />

        </div>
    );
};

export default GooglePhotos;
