import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LandingLayoutContainer, LandingLayoutContent } from "./styles";
import { Footer } from "../Footer";

export function LandingLayout() {
  return (
    <LandingLayoutContainer>
      <Header />

      <LandingLayoutContent>
        <Outlet />
      </LandingLayoutContent>

      <Footer />
    </LandingLayoutContainer>
  );
}
