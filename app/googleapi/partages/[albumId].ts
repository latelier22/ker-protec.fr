
import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleAlbum } from 'types/google';
import { getGoogleApiToken, getGoogleSharedAlbum } from 'utils/GoogleApi';

export default async function ApiAlbum(
  req: NextApiRequest,
  res: NextApiResponse<GoogleAlbum>
) {
  const albumId: string = req.query.albumId as string;
  const bearerToken = await getGoogleApiToken();
  const album: GoogleAlbum = await getGoogleSharedAlbum(bearerToken, albumId);

  res.status(200).json(album);
}
