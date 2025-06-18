import { DataTypes } from 'sequelize'

export const definicionBitacora = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  accion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  ip: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}
