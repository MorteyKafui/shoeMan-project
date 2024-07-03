"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "./zodSchema";
import prisma from "./db";

export const createProductAction = async (
  prevState: unknown,
  formData: FormData
) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const flattenUrl = submission.value.images.flatMap(urlString =>
    urlString.split(",").map(url => url.trim())
  );

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      status: submission.value.status,
      price: submission.value.price,
      images: flattenUrl,
      category: submission.value.category,
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect("/dashboard/products");
};

export const editProductAction = async (prev: unknown, formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const productId = formData.get("productId") as string;
  const flattenUrl = submission.value.images.flatMap(urlString =>
    urlString.split(",").map(url => url.trim())
  );

  const { category, name, description, price, status, isFeatured, images } =
    submission.value;

  await prisma.product.update({
    where: { id: productId },
    data: {
      name,
      description,
      price,
      isFeatured,
      images: flattenUrl,
      status,
      category,
    },
  });

  redirect("/dashboard/products");
};
