const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const KEYFILEPATH = path.join(`${__dirname}/secret/service-account.json`);
const SCOPES = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({
  version: 'v3',
  auth,
});

export async function uploadFile(fileName, folderId = 'root') {
  try {
    const filePath = path.join(__dirname, 'public', 'uploads', fileName);
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [folderId], // Spécifie le dossier parent
        mimeType: 'image/jpg', // Modifier si nécessaire
      },
      media: {
        mimeType: 'image/jpg', // Modifier si nécessaire
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}


export async function deleteFile(fileId) {
  try {
    const response = await drive.files.delete({
      fileId: fileId,
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error.message);
  }
}

export async function generatePublicUrl(fileId) {
  try {
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    const result = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink, webContentLink',
    });
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
}

async function listFilesInFolder(folderId = 'root') {
  try {
    const response = await drive.files.list({
      q: folderId === 'root' ? "'root' in parents" : `'${folderId}' in parents`, // Si aucun ID de dossier n'est spécifié, recherche à la racine
      fields: 'files(id, name)', // Sélectionne les champs à retourner
    });

    const files = response.data.files;
    if (files.length) {
      console.log('Fichiers trouvés :');
      files.forEach(file => {
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('Aucun fichier trouvé dans ce dossier.');
    }
  } catch (error) {
    console.log(error.message);
  }
}


export async function listFoldersInFolder(folderId) {
  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder'`, // Filtre pour les dossiers seulement
      fields: 'files(id, name)', // Sélectionne les champs à retourner
    });

    const folders = response.data.files;
    if (folders.length) {
      console.log('Dossiers trouvés :');
      folders.forEach(folder => {
        console.log(`${folder.name} (${folder.id})`);
      });
    } else {
      console.log('Aucun dossier trouvé dans ce dossier.');
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Exportation des fonctions
export default listFilesInFolder ;





// Analyser les arguments de la ligne de commande
const args = process.argv.slice(2);
const operation = args[0];

if (operation === 'upload') {
  const fileName = args[1];
  const folderId = args[2]; // Ajouter la possibilité de spécifier l'ID du dossier
  uploadFile(fileName, folderId); // Appeler la fonction uploadFile avec fileName et folderId
} else if (operation === 'list') {
  const folderId = args[1] || 'root';
  listFilesInFolder(folderId);
} else if (operation === 'delete') {
  const fileId = args[1];
  deleteFile(fileId);
} else if (operation === 'generate') {
  const fileId = args[1];
  generatePublicUrl(fileId);
} else {
  console.log('Usage: node script.js upload <fileName> [<folderId>] | list [<folderId>] | delete <fileId> | generate <fileId>');
}



