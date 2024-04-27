import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionButtons from "./action-buttons";

const Navbar = () => {
  return ( 
    <div className="flex flex-row justify-between p-10 border-b">
      <Logo/>
      <NavigationBar />
      <ActionButtons />
    </div>
   );
}
 
export default Navbar;