import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum, GoogleAlbumsResponse } from 'types/google';
import { getGoogleApiToken,getGoogleSharedAlbums } from 'utils/GoogleApi';

export default async function ApiAlbums(
  _req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum[]>
) {
  const bearerToken = await getGoogleApiToken();

  let nextPageToken2: string | undefined = '';

  let sharedAlbums: GoogleAlbum[] = [];

  
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

  console.log(sharedAlbums)
  res.status(200).json(sharedAlbums);
}
