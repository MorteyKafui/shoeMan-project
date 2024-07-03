import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

const ProductsPage = async () => {
  const products = await getData();

  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center justify-center gap-2">
          <Link href={"/dashboard/products/create"}>
            <PlusCircle className="size-4" />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your prodcuts and view your sales performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map(
                ({ id, status, price, name, images, createdAt }) => (
                  <TableRow key={id}>
                    <TableCell>
                      {images ? (
                        <Image
                          src={images[0]}
                          alt="product pic"
                          width={64}
                          height={64}
                          className="rounded-md size-16"
                        />
                      ) : (
                        <UserIcon className="size-16" />
                      )}
                    </TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell>${price}</TableCell>
                    <TableCell>
                      {new Intl.DateTimeFormat("en-US").format(createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size={"icon"} variant={"ghost"}>
                            <MoreHorizontal className="size-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/products/${id}`}>Edit</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/products/${id}/delete`}>
                              Delete
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;
