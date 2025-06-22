import { ThemeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <h1> Hello World</h1>
      <div className ="absolute right-4 top-4" >
        <ThemeToggle/>
      </div>
    </div>
  );
}
