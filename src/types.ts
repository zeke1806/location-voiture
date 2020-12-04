export interface ILocataire {
  idLocataire: number;
  nom: string;
  adresse: string;
}

export type IFormLocataire = Omit<ILocataire, 'idLocataire'>;

export interface IVoiture {
  idVoiture: number;
  designation: string;
  loyer: number;
}
