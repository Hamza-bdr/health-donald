"use client";
import { useState } from "react";
import { Input } from "./ui/input";

interface ImageInputProps {
  value: string;
  onChange: (file: File) => void;
}

export default function ImageInput({ value, onChange }: ImageInputProps) {
  const [preview, setPreview] = useState<string | null>(value);
  interface ImageUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const onImageUpload = async (event: ImageUploadEvent) => {
    const image = event.target.files[0];
    setPreview(URL.createObjectURL(image));
    onChange(image);
  };

  return (
    <div className="flex items-center gap-4">
      <Input type="file" onChange={onImageUpload} />
      {preview && (
        <img
          alt="the preview image"
          src={preview}
          className="aspect-square w-12 rounded-md bg-accent"
        ></img>
      )}
    </div>
  );
}
