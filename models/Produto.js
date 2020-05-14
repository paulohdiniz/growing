const Produto = (sequelize, DataTypes) => {
    let produto = sequelize.define(
        'Produto',
        {
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            tipo_produto: {
              type: Sequelize.STRING(50),
              allowNull: false
            },
        },
        { 
            tableName: "produto",
            timestamps: false 
        }
    );

    produto.associate = (models) => {
        
        produto.belongsToMany(models.Usuario, {
            through: "UsuarioProduto",
            foreignKey:'fk_produto',
            as: 'usuario'
        });

    };

    return produto;
}

module.exports = Produto;