import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <h1
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "20px",
          fontSize: "70px",
          textTransform: "uppercase",
        }}
      >
        this is About page
      </h1>
      <p style={{ width: "520px", marginLeft: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi,
        quasi animi eum molestias nihil nobis quo ipsam? Tempora fugit
        doloremque illum asperiores architecto consequatur ratione ad doloribus,
        deleniti eligendi?
      </p>
      <p style={{ width: "520px", marginLeft: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi,
        quasi animi eum molestias nihil nobis quo ipsam? Tempora fugit
        doloremque illum asperiores architecto consequatur ratione ad doloribus,
        deleniti eligendi?
      </p>
    </div>
  );
}
export default About;
