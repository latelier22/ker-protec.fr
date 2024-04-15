import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleMediaItem, GoogleMediaItemsResponse } from 'types/google';
import { getGoogleApiToken, getGoogleMediaItemsAlbum } from 'utils/GoogleApi';

export default async function ApiMediaItemsAlbum(
  req: NextApiRequest,
  res: NextApiResponse<GoogleMediaItem[]>
) {
  const albumId: string = req.query.albumId as string;
  const bearerToken = await getGoogleApiToken();

  let nextPageToken: string | undefined = '';
  let mediaItems: GoogleMediaItem[] = [];

  do {
    const data: GoogleMediaItemsResponse = await getGoogleMediaItemsAlbum(
      bearerToken,
      albumId,
      nextPageToken
    );

    console.log("dataItems", data)

    if (data.mediaItems) {
      mediaItems = [...mediaItems, ...data.mediaItems];
    }

    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  console.log("mediaItems",mediaItems)

  res.status(200).json(mediaItems);
}
