import { AddPrimaryKeyConstraintOptions } from 'sequelize';
import {
  Table,
  Column,
  Model,
  CreatedAt,
  DataType,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'poll',
})
export class Poll extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  declare question: string;

  @Column
  declare description?: string;

  @Column({ type: DataType.JSON, allowNull: true })
  options?: string[];
  @Column
  declare password: string;

  @Column({ allowNull: false })
  declare createdBy: number;

  @Column({ defaultValue: true })
  declare isActive: boolean;

  @Column({ type: DataType.INTEGER, allowNull: true })
  maxVotesPerUser?: number;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
