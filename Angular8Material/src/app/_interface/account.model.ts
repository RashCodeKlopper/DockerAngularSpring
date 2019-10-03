export interface Account {
  id: number;
  dateCreated: Date;
  accountType: string;
  ownerId?: string;
}
