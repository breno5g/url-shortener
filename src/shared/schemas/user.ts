import * as z from 'zod';

const PASSWORD_REGEX =
  /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

export const User = z.object({
  id: z.number().int(),
  email: z.string().email(),
  name: z.string().nullish(),
  password: z.string().regex(PASSWORD_REGEX, 'Invalid Password')
});
