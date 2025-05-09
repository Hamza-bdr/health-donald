import { db } from "@/lib/firebase";
import { Item } from "@/types/types";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getItems(categoryName: string) {
  const itemsRef = collection(db, "items");
  let docSnap = await getDocs(itemsRef);

  if (categoryName) {
    const q = query(itemsRef, where("category", "==", categoryName));
    docSnap = await getDocs(q);
  }
  const data: Array<Item> = [];

  docSnap.forEach((d) =>
    data.push({
      id: d.id,
      ...d.data(),
    } as Item)
  );

  return data;
}
