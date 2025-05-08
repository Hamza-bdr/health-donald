"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { useUserStore } from "@/lib/store/user-store";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { User } from "lucide-react";
import { getId } from "@/lib/utils";
import { useRouter } from "next/navigation";
import ImageInput from "@/components/ImageInput";
import saveItem from "../../../lib/items/saveItem";
import { categories } from "@/lib/categories";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  price: z.coerce.number().min(0).max(1000),
  image: z.any(),
});
export default function ItemPage() {
  const isAdmin = useUserStore((state) => state.isAdmin);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      image: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted!");
    console.log(values);
    const id = getId(values.name);
    if (!id) {
      console.error("Invalid ID generated from name");
      return;
    }
    await saveItem(id, {
      name: values.name,
      price: values.price * 100,
      category: values.category,
      image: values.image,
    });
    router.push("/");
  }

  if (!isAdmin) {
    return (
      <Alert>
        <User size={12} />
        <AlertTitle>You are not authorized to view this page.</AlertTitle>
        <AlertDescription>Only admin can.</AlertDescription>
      </Alert>
    );
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <h1 className="text-lg font-bold">Create item</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter a name " {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        <div className="inline-flex items-center gap-2">
                          <Image
                            src={category.imageURL}
                            alt="image"
                            width={25}
                            height={25}
                          />{" "}
                          <span>{category.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="99.1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <ImageInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-4"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
