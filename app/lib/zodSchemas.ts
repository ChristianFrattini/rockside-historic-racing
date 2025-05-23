import { z } from "zod";

export const VehicleSchema = z.object({
  name: z.string().refine((val) => /^[A-Z]/.test(val), {
    message: "Name must start with a capital letter",
  }),
  brand: z.string().refine((val) => /^[A-Z]/.test(val), {
    message: "Brand must start with a capital letter",
  }),
  year: z
    .number()
    .min(1800, "Year must be higher than 1800")
    .max(2026, "Year must be lower than 2026"),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(0),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z.string(),
  imageString: z.string(),
});

export const spareSchema = z.object({
  name: z.string().refine((val) => /^[A-Z]/.test(val), {
    message: "Name must start with a capital letter",
  }),
  status: z.enum(["draft", "published", "archived"]),
  category: z.string(),
  description: z.string(),
  price: z.number().min(1),
  isFeatured: z.boolean().optional(),
  images: z.array(z.string()).min(1, "At least one image is required"),
});
