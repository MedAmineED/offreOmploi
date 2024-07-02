import { Model } from "sequelize-typescript";
declare class User extends Model {
    id: number;
    firstname: string;
    lastname: string;
    age: string;
    role: string;
    numtel: string;
    niveauetude: string;
    diplome: string;
    experience: string;
    email: string;
    password: string;
    created_at: Date;
    updatedAt: Date;
}
export default User;
//# sourceMappingURL=User.d.ts.map