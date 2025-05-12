import { Check } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <Check size={40} color="green" />
      <p className="text-2xl font-semibold from-neutral-400">
        Your order is confirmed !
      </p>
    </div>
  );
}
