import { Container } from "react-bootstrap";

const BackgroundMain = () => {
  const hideCategories2 = location.pathname.includes("/createBottleForm");
  const hideCategories3 = location.pathname.includes("/cart");

  if (hideCategories2) {
    return null;
  }
  if (hideCategories3) {
    return null;
  }
  return (
    <Container fluid className="bgMain mt-2 ">
      <img
        src="https://www.triacca.com/wp-content/uploads/2022/02/Casa-Vinicola-Triacca-Esperienze-Toscana-02-1536x1075.jpg"
        alt=""
      />
    </Container>
  );
};
export default BackgroundMain;
