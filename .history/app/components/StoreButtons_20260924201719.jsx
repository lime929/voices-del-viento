import { Link } from "next/navigation";

export default function StoreButtons() {
    return (
        <>


<ul class="links">
          
            
            
              <li>
                <Link 
                href="/store"
                
                />
              </li>
            
          
            
            
              <li><Link href="/store/music">Music</Link></li>
            
          
            
            
              <li><Link href="/store/apparel">Apparel</Link></li>
            
          
    		</ul>

        </>


          )};