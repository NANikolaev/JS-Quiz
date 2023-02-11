import { StyledHeader } from "./elements"

 const Layout=({children})=>{
    return(
        <>
        <StyledHeader>JavaScript Quiz Test</StyledHeader>
         {children}
        </>        
    )
}
export default Layout