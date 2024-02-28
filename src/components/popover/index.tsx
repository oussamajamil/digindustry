import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
export function PopoverMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          src="/icons/flesh.svg"
          alt="Layer"
          width={16}
          height={16}
          quality={100}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2"></div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
