import { z } from 'zod';

export const bankAccountSchema = z.object({
  fullName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  rut: z.string().min(8, 'RUT inválido').max(12, 'RUT inválido'),
  bankOrPlatform: z.string().min(2, 'Selecciona un banco o plataforma'),
  accountType: z.string().min(2, 'Selecciona el tipo de cuenta'),
  accountNumber: z.string().min(5, 'Número de cuenta inválido'),
  email: z.string().email('Email inválido'),
});

export type BankAccountFormData = z.infer<typeof bankAccountSchema>;
