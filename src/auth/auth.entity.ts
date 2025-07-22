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

@Table
export class Auth extends Model {
 @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @Column
  firstName: string;

  @Column
  lastName: number;

  @Column
  email: string;
  @Column
  password: string;

  @Column
  profilePicture: number;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
