"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createProductAction } from "@/lib/actions";
import { UploadDropzone } from "@/lib/uploadthing";
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchema";
import { useState } from "react";
import Image from "next/image";
import SubmitButtons from "@/components/SubmitButtons";

const CreateProductPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [lastResult, action] = useFormState(createProductAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteImage = (index: any) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className="size-6" />
          </Link>
        </Button>
        <h2 className="text-xl font-semibold tracking-tight">New Product</h2>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Start creating your product here!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Label>Product name</Label>
              <Input
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                type="text"
                className="w-full"
                placeholder="product name"
              />
              <p className="text-red-500">{fields.name.errors}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Description</Label>
              <Textarea
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={fields.description.initialValue}
                placeholder="product description"
              />
              <p className="text-red-500">{fields.description.errors}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Price</Label>
              <Input
                name={fields.price.name}
                key={fields.price.key}
                defaultValue={fields.price.initialValue}
                type="number"
                placeholder="$100.99"
              />
              <p className="text-red-500">{fields.price.errors}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultValue={fields.isFeatured.initialValue}
              />
              <p className="text-red-500">{fields.isFeatured.errors}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.status.errors}</p>
            </div>

            <div className="flex flex-col gap-4">
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={fields.category.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="catgory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="men">Men</SelectItem>
                  <SelectItem value="women">Women</SelectItem>
                  <SelectItem value="kids">Kids</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.category.errors}</p>
            </div>

            <div className="flex flex-col gap-4">
              <Label>Images</Label>
              <input
                type="hidden"
                name={fields.images.name}
                value={images}
                key={fields.images.key}
                defaultValue={fields.images.initialValue as any}
              />
              {images.length > 0 ? (
                <div className="flex gap-6">
                  {images.map((image, index) => {
                    return (
                      <div key={index} className="relative w-[100px] h-[100px]">
                        <Image
                          src={image}
                          width={100}
                          height={100}
                          alt="product image"
                          className=""
                        />
                        <button
                          onClick={() => handleDeleteImage(index)}
                          type="button"
                          className="absolute -top-3 -right-3 bg-red-500 rounded-lg text-white"
                        >
                          <XIcon className="size-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={res => {
                    setImages(res.map(r => r.url));
                    // toast.success("Finished uploading");
                  }}
                  onUploadError={() => {
                    toast.error("Uploading failed");
                  }}
                />
              )}
              <p className="text-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButtons />
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateProductPage;
