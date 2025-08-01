import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  ForeignKey,
  BelongsTo,
  AllowNull,
  DataType,
} from 'sequelize-typescript';
import { Auth } from 'src/auth/auth.entity';
import { Option } from 'src/options/options.entity';
import { Vote } from 'src/vote/vote.entity';

@Table({
  tableName: 'poll',
})
export class Poll extends Model<Poll> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare question: string;

  @AllowNull(true)
  @Column
  declare description?: string;

  @HasMany(() => Option)
  declare options: Option[];

  getOptions(): Option[] {
    return this.options || [];
  }

  @ForeignKey(() => Auth)
  @AllowNull(false)
  @Column
  declare createdBy: number; // this is userId

  @BelongsTo(() => Auth)
  declare user: Auth;

  @AllowNull(false)
  @Column({ defaultValue: true })
  declare isActive: boolean;

  @AllowNull(true)
  @Column({ type: DataType.INTEGER })
  declare maxVotesPerUser?: number;

  @HasMany(() => Vote)
  declare votes: Vote[];

  @CreatedAt
  @Column({ type: DataType.DATE })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  declare updatedAt: Date;
}
