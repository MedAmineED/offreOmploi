import { Model } from "sequelize-typescript";
declare class Offre extends Model {
    id: number;
    id_ent: number;
    title: string;
    discreption: string;
    experience: number;
    location: string;
    contactType: string;
    studyLevel: string;
}
export default Offre;
//# sourceMappingURL=Offre.d.ts.map