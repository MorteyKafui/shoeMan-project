import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.coerce.number().min(1),
  images: z.array(z.string()).min(1, { message: "upload at least one image" }),
  isFeatured: z.boolean().optional(),
  category: z.enum(["men", "women", "kids"]),
});
