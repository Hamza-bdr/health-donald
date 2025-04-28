import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "sonner";

export default async function saveItem(id: string, item: any) {
  if (item.image instanceof File) {
    const path = `images/${item.image.name}`;
    const imageRef = ref(storage, path);
    try {
      // On upload le fichier sur notre server
      await uploadBytes(imageRef, item.image);
      // On récupère la downloadUrl
      const downloadURL = await getDownloadURL(imageRef);

      // On met à jour l'item avec l'URL de l'image et le chemin de celuic-i
      item.image = downloadURL;
      item.imagePath = path;
    } catch {
      toast.error("Error uploading image");
      return;
    }
  }

  const itemDoc = doc(db, "items", id);
  const res = await setDoc(itemDoc, item);
  console.log("Item saved:", res);
}
