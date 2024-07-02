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


 @Table ({timestamps : true, tableName : "entreprise", modelName : "Entreprise"})
 class Entreprise extends Model {
    @Column({
            primaryKey : true, 
            type : DataType.INTEGER,
            autoIncrement: true})
    declare id : number;



    @Column({
        type : DataType.STRING
    })
    declare nom_ent : string;


    @Unique
    @Column({
        type : DataType.STRING
    })
    declare email : string;

    
    @Column({
        type : DataType.STRING
    })
    declare pwd : string;


    @Column({
        type : DataType.STRING
    })
    declare numtel : string;

    @Column({
        type : DataType.STRING
    })
    declare location : string;
 }

 export default Entreprise;


