import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  CreatedAt,
  DataType,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { Option } from 'src/options/options.entity';
import { Poll } from 'src/poll/poll.entitiy';
import { Auth } from 'src/auth/auth.entity';

@Table({ tableName: 'votes' })
export class Vote extends Model<Vote> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  // Which user cast the vote
  @ForeignKey(() => Auth)
  @AllowNull(false)
  @Column
  declare userId: number;

  @BelongsTo(() => Auth)
  declare user: Auth;

  // Which poll the vote belongs to
  @ForeignKey(() => Poll)
  @AllowNull(false)
  @Column
  declare pollId: number;

  @BelongsTo(() => Poll)
  declare poll: Poll;

  // Which option was selected
  @ForeignKey(() => Option)
  @AllowNull(false)
  @Column
  declare optionId: number;

  @BelongsTo(() => Option)
  declare option: Option;

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
