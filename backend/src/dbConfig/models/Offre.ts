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


 @Table ({timestamps : true, tableName : "offre", modelName : "Offre"})
 class Offre extends Model {
    @Column({
            primaryKey : true, 
            type : DataType.INTEGER,
            autoIncrement: true})
    declare id : number;

    @Column({
        type : DataType.INTEGER
    })
    declare id_ent : number;

    @Column({
        type : DataType.STRING
    })
    declare title : string;

    @Column({
        type : DataType.STRING
    })
    declare discreption : string;

    @Column({
        type : DataType.INTEGER
    })
    declare experience : number;

    @Column({
        type : DataType.STRING
    })
    declare location : string;

    @Column({
        type : DataType.STRING
    })
    declare contactType : string;

    @Column({
        type : DataType.STRING
    })
    declare studyLevel : string;    
 }

 export default Offre;
