import EditForm from "@/components/EditForm";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

const getData = async (id: string) => {
  const data = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!data) {
    return notFound();
  }

  return data;
};

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const product = await getData(params.id);

  return (
    <>
      <EditForm product={product} />
    </>
  );
};

export default ProductDetailsPage;
