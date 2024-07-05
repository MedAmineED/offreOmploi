interface Offre {
    id: number;
    id_ent: string;
    title : string;
    discreption: string;
    experience: string;
    email: string;
    contactType : string;
    location: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export default Offre;
  