"use client";  
import { useRouter } from "next/navigation";

export default function StoreButtons() {
    const router = useRouter();
    return (
        <>


<ul class="links">
          
            
            
              <li><Link href="/">Store Home</Link></li>
            
          
            
            
              <li><Link href="/store/music">Music</Link></li>
            
          
            
            
              <li><Link href="/store/apparel">Apparel</Link></li>
            
          
    		</ul>

        </>


          )};