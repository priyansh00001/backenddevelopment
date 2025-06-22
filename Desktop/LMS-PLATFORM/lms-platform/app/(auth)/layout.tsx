import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import Logo from "@/public/logo.png";

export default function AuthLayout({children} : {children:ReactNode}) {
    return(
        <div className="relative flex min-h-svh flex-col items-center justify-center">

            <Link href ="/" className={buttonVariants({
                variant:"outline",
                className:"absolute left-4 top-4"
            })}>
            <ArrowLeft className ="size-4"/>
            Back
            </Link>
            <div className="flex w-full max-w-sm flex-col gap-6">
            <Link href ="/" className="flex items-center self-center gap-2 font-large font-bold">
                
                <Image src = {Logo} alt ="Logo" width={32} height={32} />
                LMS PLATFORM

            </Link>    
            {children}</div>
            <div className="text-xs text-muted-foreground text-center text-balance">
            By clicking continue you agree to our <span className="hover:text-primary hover:underline">Privacy</span> and <span  className="hover:text-primary hover:underline">Policies</span>.
            </div>
        </div>
    )
}