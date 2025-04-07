import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

export default function MarketingLayout({ children }: ChildrenType) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
