// import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <h1>Hello World</h1>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://app.firstintexas.org/images/news/pitcrew%20picture2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};
