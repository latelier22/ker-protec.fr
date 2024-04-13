"use client";


// Import des fonctions depuis le fichier utilitaire
import googleDrive from '../utils/googleDrive';
import { useState, useEffect } from 'react';

// Composant pour afficher la liste des dossiers
export default function FolderList() {
  const [folders, setFolders] = useState([]);

  // Fonction pour charger la liste des dossiers
  const loadFolders = async () => {
    try {
      // Appel de la fonction pour lister les dossiers
      const response = await googleDrive.listFoldersInFolder('ID_DU_DOSSIER');
      // Mise à jour de l'état avec les dossiers récupérés
      setFolders(response.data.files);
    } catch (error) {
      console.error('Erreur lors du chargement des dossiers :', error.message);
    }
  };

  // Charger la liste des dossiers au chargement du composant
  useEffect(() => {
    loadFolders();
  }, []);

  return (
    <div>
      <h2>Liste des dossiers :</h2>
      <ul>
        {folders.map(folder => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
}
