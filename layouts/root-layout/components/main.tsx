import Container from "@shsfwork/components/semantic-elements/container";

export default function Main({ children }: ChildrenType) {
  return (
    <main>
      <Container id="main">{children}</Container>
    </main>
  );
}
