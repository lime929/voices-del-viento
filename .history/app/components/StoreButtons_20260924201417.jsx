"use client";  
import { useRouter } from "next/navigation";

export default function StoreButtons() {
    const router = useRouter();
    return (
        <>
        <button
            onClick={() => router.replace('/store')}
            className=""
          >
            Store Home
          </button>
     <button
            onClick={() => router.replace('/store/apparel')}
            className=""
          >
            Apparel
          </button>
      <button
            onClick={() => router.replace('/store/music')}
            className=""
          >
            Music
          </button>


<ul class="links">
          
            
            
              <li><a href="/">Store Home</a></li>
            
          
            
            
              <li><a href="/store/music">Music</a></li>
            
          
            
            
              <li><a href="/store/apparel">Apparel</a></li>
            
          
    		</ul>

        </>


          )};