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
    AutoIncrement
 } from "sequelize-typescript";


 @Table ({timestamps : true, tableName : "demandeemploit", modelName : "DemandeEmploi"})
 class DemandeEmploi extends Model {
    @Column({
            primaryKey : true, 
            type : DataType.INTEGER,
            autoIncrement: true})
    declare id : number;


    @Column({
        type : DataType.INTEGER
    })
    declare condidat : number;


    @Column({
        type : DataType.INTEGER
    })
    declare offre : number;
 }

 export default DemandeEmploi;