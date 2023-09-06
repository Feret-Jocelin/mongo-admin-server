export default {
  loginForm: {
    login: 'Se connecter',
    selected: 'Langue',
    userName: "Nom d'utilisateur",
    passWord: 'Mot de passe',
  },
  formCreateDB: {
    title: 'Créer une base de données',
    nameDB: 'Nom de la base de données',
    nameFirstCollection: 'Nom de la colletion',
    error500: 'Le nom de la base de données ne peut pas contenir d\'espace',
    error409: 'Le nom de la base de données est déjà utilisé'
  },
  theme: {
    light: 'Clair',
    dark: 'Sombre',
  },
  menuSideBar: {
    database: 'Base de données',
    collection: 'Collections',
    language: 'Langue',
    setting: 'Paramètres',
    logout: 'Déconnexion'
  },
  modal: {
    language: {
      title: 'Langue',
    },
    confirm: {
      title: 'Confirmation',
    },
    button: {
      cancel: 'Annuler',
      confirm: 'Confirmer',
    },
  },
  database: {
    title: 'Base de données',
    create: 'Créer une base de données',
    deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cette base de données ?',
    deleteSuccess: 'Base de données supprimée avec succès',
    deleteError: 'Erreur lors de la suppression de la base de données',
    createSuccess: 'Base de données créée avec succès',
    createError: 'Erreur lors de la création de la base de données',
    name: 'Base de données',
    storage: 'Stockage',
    collection: 'Collections',
    indexes: 'Index',
  },
  collection: {
    title: 'Collections',
    collectionName: 'Nom Collection',
    count: 'Document',
    avgDocumentSize: 'Taille Moyenne Document',
    totalDocumentSize: 'Taille Totale Document',
    indexes: 'Numero Index',
    totalIndexSize: 'Taille Totale Index',
    deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cette collection ?',
  },
  document: {
    noDocument: 'Aucun document',
  },
  language: {
    en: '🇬🇧 Anglais',
    fr: '🇫🇷 Français',
    es: '🇪🇸 Espagnol',
  },
} as const;
