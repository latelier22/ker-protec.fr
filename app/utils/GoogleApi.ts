import {
  GoogleAlbum,
  GoogleAlbumsResponse,
  GoogleMediaItem,
  GoogleMediaItemsResponse,
} from '../types/google';

export const getGoogleApiToken = async (): Promise<string> => {
  const tokenResult = await fetch(
    'https://www.googleapis.com/oauth2/v4/token',
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        grant_type: process.env.GOOGLE_GRANT_TYPE,
        access_type : "offline"
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const tokenData = await tokenResult.json();
  return `Bearer ${tokenData['access_token']}`;
};

export const getGoogleAlbums = async (
  bearerToken: string,
  pageToken: string
): Promise<GoogleAlbumsResponse> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  
  return result.json();
};


export const getGoogleSharedAlbums = async (
  bearerToken: string,
  pageToken: string
): Promise<GoogleAlbumsResponse> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/sharedAlbums/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  
  const response = result.json()
  // console.log("response",response)

  return response;
};



export const getGoogleAlbum = async (
  bearerToken: string,
  albumId: string
): Promise<GoogleAlbum> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/${albumId}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};

export const getGoogleSharedAlbum = async (
  bearerToken: string,
  albumId: string
): Promise<GoogleAlbum> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/albums/${albumId}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};





export const getGoogleMediaItems = async (
  bearerToken: string,
  pageToken: string
): Promise<GoogleMediaItemsResponse> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems/?pageSize=50&pageToken=${pageToken}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};

export const getGoogleMediaItem = async (
  bearerToken: string,
  mediaItemId: string
): Promise<GoogleMediaItem> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems/${mediaItemId}`,
    {
      method: 'GET',
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};

export const getGoogleMediaItemsAlbum = async (
  bearerToken: string,
  albumId: string,
  pageToken: string
): Promise<GoogleMediaItemsResponse> => {
  const result = await fetch(
    `https://photoslibrary.googleapis.com/v1/mediaItems:search`,
    {
      method: 'POST',
      body: JSON.stringify({ albumId, pageToken }),
      headers: {
        Authorization: bearerToken,
      },
    }
  );
  return result.json();
};
