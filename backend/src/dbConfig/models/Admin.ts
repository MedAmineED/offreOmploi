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


 @Table ({timestamps : true, tableName : "admin", modelName : "Admin"})
 class Admin extends Model {
    @Column({
            primaryKey : true, 
            type : DataType.INTEGER,
            autoIncrement: true})
    declare id : number;



    @Column({
        type : DataType.STRING
    })
    declare login : string;


    @Column({
        type : DataType.STRING
    })
    declare password : string;

    
 }

 export default Admin;
