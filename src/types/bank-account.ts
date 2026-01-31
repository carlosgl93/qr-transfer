export interface BankAccount {
  id?: string;
  userId: string;
  fullName: string;
  rut: string;
  bankOrPlatform: string;
  accountType: string;
  accountNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BankAccountFormData {
  fullName: string;
  rut: string;
  bankOrPlatform: string;
  accountType: string;
  accountNumber: string;
  email: string;
}
