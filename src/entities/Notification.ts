import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("notifications")
class Notification {
  @PrimaryColumn()
  id: number;

  @Column("text", { array: true })
  sended_to: string[];

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Notification };
