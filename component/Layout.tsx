import { ReactNode } from "react";
import Navbar from "./navbar";


interface Props {
  children?: ReactNode
};

const Layout =({children,...props}: Props) =>{

   return(

    <>
    <Navbar/>

     <main {...props}>{children}</main> 

   
    </>
  )
}
 export default Layout;