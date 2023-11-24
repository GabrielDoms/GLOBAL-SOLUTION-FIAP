import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavigationButton,
  HeaderNavigationSpan,
  LogoContainer,
  WorkTitle,
} from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NAV_LINKS = [
  {
    title: "Login",
    to: "/login",
  },

  {
    title: "Home",
    to: "/",
  },
];

export function Header() {
  const { token, logout } = useAuth();
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <WorkTitle> Saúde No Foco</WorkTitle>
      </LogoContainer>

      <HeaderNavigation>
        <HeaderNavigationSpan>
          Global solution - Engenharia de Software
        </HeaderNavigationSpan>
      </HeaderNavigation>

      {token && (
        <HeaderNavigationButton
          type="button"
          onClick={() => {
            logout();
            window.location = "/";
          }}
        >
          Logout
        </HeaderNavigationButton>
      )}
    </HeaderContainer>
  );
}
