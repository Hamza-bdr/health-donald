"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import getItems from "@/lib/items/getItems";
import useSWR from "swr";

export default function ItemsPage() {
  const { data, error, isLoading } = useSWR("/api/data", getItems);

  const items = data?.docs.map((doc: { data: () => any }) => {
    return doc.data();
  });
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      {items?.map((item) => (
        <Card className="bg-transparent p-2 m-2 h-fit" key={item.name}>
          <CardHeader className="text-xl font-bold justify-end">
            {item.price}€
          </CardHeader>
          <CardContent>
            <img src={item.image} alt={item.name} />
          </CardContent>
          <CardFooter className="text-lg font-medium justify-center">
            {item.name}
          </CardFooter>
          <div className="flex justify-end ">
            <Button>Add</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
