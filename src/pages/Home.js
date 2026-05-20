import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            filter: "grayscale(50%) brightness(70%) opacity(90%)",
          }}
          src="https://i.postimg.cc/HkRfRXvG/image.png"
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white", fontSize: 50 }}>
            The Digital STEM hub for Alameda Island
          </h1>
          <p
            style={{
              color: "white",
              fontSize: 16,
              maxWidth: 500,
              textAlign: "center",
            }}
          >
            An online platform for residents of Alameda Island to educate,
            share, and learn to make STEM accessible, available, and affordable.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
