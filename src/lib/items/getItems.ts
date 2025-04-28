import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getItems() {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())

  // const { data, error, isLoading } = useSWR("/api/user", fetcher);

  // if (error) return <div>échec du chargement</div>;
  // if (isLoading) return <div>chargement...</div>;

  const itemsRef = collection(db, "items");
  const snapshot = await getDocs(itemsRef);
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
  return snapshot;
}
