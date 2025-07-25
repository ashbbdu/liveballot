import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { Poll } from 'src/poll/poll.entitiy';
import { Vote } from 'src/vote/vote.entity';

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

  @HasMany(() => Vote)
declare votes: Vote[];

  @BelongsTo(() => Poll)
  declare poll: Poll;
}
