import { Banner } from "./components/Banner";
import BigMenComponent from "./components/BigMen";
import FooterComponent from "./components/Footer";
import { NavbarComponent } from "./components/Navbar";
import HomeComponent from "./pages/Home";
export default function App() {
  return (
    <div>
      <NavbarComponent/>
      <BigMenComponent/>
        <HomeComponent />
      <FooterComponent />
    </div>
  );
}
