import Sequelize from 'sequelize';

import sequelize from '../config/database';

const User = sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull: false
    },
    password:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

export default User;