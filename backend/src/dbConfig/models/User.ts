import { timeStamp } from "console";
import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    BeforeCreate,
    HasMany,
    PrimaryKey,
    AutoIncrement,
    Unique
 } from "sequelize-typescript";


 @Table ({timestamps : true, tableName : "user", modelName : "User"})
 class User extends Model {
    @Column({
            primaryKey : true, 
            type : DataType.INTEGER,
            autoIncrement: true})
    declare id : number;


    @Column({
        type : DataType.STRING
    })
    declare firstname : string;


    @Column({
        type : DataType.STRING
    })
    declare lastname : string;


    @Column({
        type : DataType.STRING
    })
    declare age : string;



    
    @Column({
        type : DataType.STRING
    })
    declare role : string;


    @Unique
    @Column({
        type : DataType.STRING
    })
    declare numtel : string;


    @Column({
        type : DataType.STRING
    })
    declare niveauetude : string;


    @Column({
        type : DataType.STRING
    })
    declare diplome : string;


    @Column({
        type : DataType.STRING
    })
    declare experience : string;


    @Unique
    @Column({
        type : DataType.STRING
    })
    declare email : string;


    @Column({
        type : DataType.STRING
    })
    declare password : string;


    @CreatedAt 
    declare created_at : Date;

    @UpdatedAt
    declare updatedAt: Date;
 }

 export default User;


