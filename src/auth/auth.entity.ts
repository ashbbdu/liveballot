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
    tableName : "user"
})
export class Auth extends Model {
 @PrimaryKey
  @AutoIncrement
  @Column
  declare userId: number;

  @Column
  declare firstName: string;

  @Column
  declare lastName: string;

  @Column
  declare email: string;
  @Column
  declare password: string;

  @Column   
declare profilePicture? : string;
// profilePicture! : number;


  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
