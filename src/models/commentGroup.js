const Sequelize = require('sequelize');

module.exports = class CommentGroup extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                groupId:{
                    type:Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                order:{
                    type:Sequelize.INTEGER,
                    comment:"group순서"
                }
            },
            {
                modelName:'CommentGroup',
                tableName:'commentGroup',
                sequelize
            }
        )
    }
    static associate(db) {
        db.CommentGroup.hasMany(db.Comment);
    }
}