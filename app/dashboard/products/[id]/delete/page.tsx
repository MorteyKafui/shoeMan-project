import SubmitButtons from "@/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteProductAction } from "@/lib/actions";
import Link from "next/link";

const DeleteProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this product</CardTitle>
          <CardDescription>
            This action cannot be undone once you hit the delete button
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between items-center">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>Cancel</Link>
          </Button>
          <form action={deleteProductAction}>
            <input type="hidden" value={params.id} name="productId" />

            <SubmitButtons variant={"destructive"} text="Delete product" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeleteProductPage;
