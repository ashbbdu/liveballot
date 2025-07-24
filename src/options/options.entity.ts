import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Poll } from 'src/poll/poll.entitiy';

@Table({ tableName: 'options' })
export class Option extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  declare text: string;  // the option text/value

  @ForeignKey(() => Poll)
  @Column
  declare pollId: number;

  @BelongsTo(() => Poll)
  poll: Poll;
}
