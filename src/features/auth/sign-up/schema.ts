import { z } from 'zod';

export const signUpSchema = z
  .object({
    accountType: z.enum(['personal', 'business'], {
      required_error: 'Please select an account type',
    }),
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .min(1, 'Email is required')
      .email('Invalid email address'),
    country: z
      .string({ required_error: 'Country is required' })
      .min(1, 'Please select a country'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string({ required_error: 'Confirm password is required' })
      .min(1, 'Confirm password is required'),
    dateOfBirth: z.string().optional(),
    gender: z.enum(['male', 'female', 'other']).optional(),
    companyName: z.string().optional(),
    taxId: z.string().optional(),
    industry: z.string().optional(),
    skills: z
      .array(
        z.object({
          name: z
            .string({ required_error: 'Skill name is required' })
            .min(1, 'Skill name is required'),
          level: z.enum(['beginner', 'intermediate', 'expert'], {
            required_error: 'Skill level is required',
          }),
        })
      )
      .min(1, 'Add at least one skill'),
    newsletter: z.boolean(),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .refine(
    (data) => {
      if (data.accountType === 'personal') {
        return !!data.dateOfBirth && !!data.gender;
      }
      return true;
    },
    {
      message: 'Date of birth and gender are required for personal accounts',
      path: ['dateOfBirth'],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === 'business') {
        return !!data.companyName && !!data.taxId && !!data.industry;
      }
      return true;
    },
    {
      message: 'Company details are required for business accounts',
      path: ['companyName'],
    }
  );

