import NavBar from "./NavBar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import styled from "@emotion/styled";
import { zIndexes } from "src/styles/zIndexes";
import { useLocation } from "react-router-dom";


type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <StyledWrapper fullWidth={isMainPage}>
      <div data-full-width={fullWidth} className="container">
        <Logo />
        <div className="nav">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  top: 1%;
  padding: 1rem 1rem 0;
  .container {
    background-color : ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
    border-radius: 1.5rem;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${({ fullWidth }) => (fullWidth ? "1088px" : "896px")}; // 메인 페이지 여부에 따라 max-width 변경
    height: 3rem;
    margin: 0 auto;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`
