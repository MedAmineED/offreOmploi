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
        type : DataType.STRING
    })
    declare id_ent : string;


    @Column({
        type : DataType.STRING
    })
    declare poste : string;

    @Column({
        type : DataType.STRING
    })
    declare experience : string;

    @Column({
        type : DataType.STRING
    })
    declare email : string;

    @Column({
        type : DataType.STRING
    })
    declare location : string;

    
 }

 export default Offre;
