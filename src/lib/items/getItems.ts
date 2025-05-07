import { db } from "@/lib/firebase";
import { Item } from "@/types/types";
import { collection, getDocs } from "firebase/firestore";

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
