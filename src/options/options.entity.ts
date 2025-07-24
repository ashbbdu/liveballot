import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';
import { Poll } from 'src/poll/poll.entitiy';

@Table({ tableName: 'options' })
export class Option extends Model<Option> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare text: string;

  @ForeignKey(() => Poll)
  @AllowNull(false)
  @Column
  declare pollId: number;

  @BelongsTo(() => Poll)
  declare poll: Poll;
}
