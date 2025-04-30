import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};
export async function getItems() {
  const itemsRef = collection(db, "items");
  const docSnap = await getDocs(itemsRef);
  const data: Array<Item> = [];

  docSnap.forEach((d) =>
    data.push({
      id: d.id,
      ...d.data(),
    } as Item)
  );

  return data;
}
