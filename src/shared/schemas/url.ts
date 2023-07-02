import * as z from 'zod';

export const Url = z.object({
  id: z.string(),
  url: z.string()
});
