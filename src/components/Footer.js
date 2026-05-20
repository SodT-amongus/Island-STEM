export const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#c7edfc", padding: "60px 0", marginTop: 50 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          maxWidth: 1200,
          padding: "0 40px",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 289,
            }}
          >
            <h4
              style={{
                lineHeight: "25px",
                margin: 0,
              }}
            >
              About
            </h4>
            <p
              style={{
                color: "#696a75",
                margin: 0,
              }}
            >
              Empowering the next generation of creators, builders, and thinkers
              on Alameda Island. Connect, learn, and build the future.
            </p>
            <div style={{ lineHeight: "20px", marginTop: 10 }}>
              <p>
                <b>Email:</b> sodtum1023@gmail.com
              </p>
              <p>
                <b>Phone:</b> 628-444-8804
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
            <a
              style={{ textDecoration: "none", color: " rgb(59, 60, 74)" }}
              href="/"
            >
              Home
            </a>
            <a
              style={{ textDecoration: "none", color: "rgb(59, 60, 74)" }}
              href="/blogs"
            >
              Blogs
            </a>
            <a
              style={{ textDecoration: "none", color: "rgb(59, 60, 74)" }}
              href="/contact-us"
            >
              Contact
            </a>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <img
              style={{ height: 16 }}
              alt="facebookLogo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABTVJREFUeAHlm71SG1cUx//nLuNhXOkNLLp0xo0hsWciOnfmDaJ0mSSSlplYdgd0QIroi9rQpcRlKpSCTFCD8gRZ3kBpPBMb3etzVouQQB+r1e6yi34zsmS4Wu49e+49n0uIGNt+l+0COWXMUw1kCSYLUMYYeb+BiBzAdAzIIWP+UQptQLUrlT0HEUKIAF50jhf42gCbtxcaAIel07SIjlkYTYRMaAKw7Z2M1h9LvGib/5tBNDgwZteyrGZYmjG3AGJa+G06iuiIt011XkFYmINi8W1Jm88n/PEVv5YRH8ss8HXeXptrz7/5r9X6q42ABNIA92Az5j2rYw7JwLGU2giiDTNrQO+um9/541dIDmJV8mvPX/zfap39PcsXZxJAqVT+jVVvB/Gqu1+WWZ9fra+9wPn52Z9+v+RbAIXS2/fG4Ackn9za+sts6/zsg5/Bvs6AYql8wYtfRYogQrtWPXg2bZyaNsC786lavCBzlrlPGzdxCxSL5W307HtaWf16/WWGz4Q/xg0YuwXktDcwFcRLh2fUJEOXEhdc/9AQPeF/MxJD8ISzM7vXBlv1+sHItYwUgGvntb5APJ4dB0CoQqlmYwZfn7Xzgr/nd2t22E94NspPWBo1Wht9ijgW3wtyvg/iwLBWdGSj+yTjOm7Axu1f3DkEC/abPF83i4jhqe/Wq/sbUYe7N3/Q5AqF8p3zbEgAovq8/7YR9VxA1UbtYAdxQ9iW4G3wR0MCMEaXor/75DRq+/dlWSRyHfrbfQHI3dcGeUSNoV3cI7z1SoNa0BdAF90cIj/4yKnX945wvwxpQV8Acex9sfFIAKIF159dMyg5PLb7WUSMRcpXgCJcZ5pYaJsjXXH/JnAUmZ95zeJ3uAJgG/kdYkEyv/7Q5uOp6+jMtc7xKG02+a3pbgFOVecQC48cP6N+KvxiRx2AsZv/Wt7Jc3v/RQzUawf+wu/Z3NzAsHu8oq6udOJC3TgWL3S73ZziCkzqYv2wIFKryhCeYkFhTcsqiiHwSSqcNnui2ATEVc1JHJxYySizwBoA2QJYcKhQLIflazls51cQA57rfooQSKUGsO8S2rnFVWauuaeMEH0XR7Ex7CBlhOW7ECdWxRFykDLC8l3YAl6yI2QukTLCihU4Cm4r43ZjpYcf7TehxS5KWW1lwWoiRTyCFaLnyhoghYk0WYJuN6zwnRxZe680Zgzn6qiE+chwOXqicyKVIPhg4nXm7zvs4SVoXQFoZZ2Q1nMLILSmqRiar7i2eCzvrifoVWVT5w8Eh6tTXiX6pi4gJepFYaA61ReAUp+kgWARtKBjWTcFmr4AKpVKZxG0gCvTx4Ml+aFo8OFrATlLioZaZYYEIFrAFeJ7rd5GCu/92w0Zd/IBh9JMRNTEg2N0ZXpkQkT6dvCwtkLHUjTSCRspAFGTh7QVZC3jepHGpsRkK3ABMfVWQZqxDsf0CAoTc4KN2q82X+AYKUXmPq0Za2pSlC+Ql8ZjpAyZs8x92jhfWWHpuk6TJshc/XSKC77T4iJN2U9IOF4PYt7v+JnqArKf+ETdQjJNpDhxW7P2IM5cGJETVRqPe096JgTpOeY5TTrtx7GEAHg2daVgv8tzVnnbhJWlmR3XdT+s7Qdu65+rNFav7B1xaWnD8xfi3BbSYr9rqccrQe76IIE0YBBPG2wuWFbkIemINcJ9tmBJPea4bScUgc8tgGs8QRzJS5oQoXWetePbeYXhnjUGH7Sik0YED0+HJoBBvInKy23CvoJeVdp/NYfYlBlFbYuvEfXzBF8A52c0wYjWsHcAAAAASUVORK5CYII="
            ></img>
            <img
              style={{ height: 16 }}
              alt="twitterLogo"
              src="data:image/png;base64,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"
            ></img>
            <img
              style={{ height: 16 }}
              alt="instagramLogo"
              src="data:image/png;base64,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"
            ></img>
            <img
              style={{ height: 16 }}
              alt="linkedinLogo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAzNJREFUeAHtm71uE0EQx/+zZ0Wic0l5b4A7RIHIGyR+gpgSiJ1DIiZdnAYlpsjZDrRJSqrkDRIKCqicNzBv4AohlNth97BRhLBuzrGSPe/9Ct+H587e/+3H7MweYUKr1d4FUYOZQywxRBiy5t5g8P4kPbYfza23F2BehU8QnQ96B3V61XwTKVKH8BDz9PdUQGoDnsLAhjIfNfhLqOA5pQDwnArmgIhGdmt8hqrZVFFgcgnAoF5FPejEcWc8PdeMdhrEvFtUB4qarTaLLJmfT72nf4miqKp55YK5eCOKqA8wCu3NKrwljuOxcabqZneMgiESoKLUSZZNHO+PCHyKgpEtANGlLRwEsMIQBWOhw2CAYISCkS1Ajt49QSK2dQVJDQg3o51VSGBaQ8EQNQE7zmfZNKPthhku1lEwZH2ACZaYoMnxrK8jW0M0FTKmIHeE/jAyT7kXBGqY7kPXEqatIkeT8s4FQhNGOUy0vnEqj37uUU6H4TlzTYfvDOOFEuOKFQ057XMmp01TJM01Jjy6bf8jEsBGT/v9bifLblaHOuh3Kde1puBMtHcU719mXWdGoPBa6475gbmCu87VAM14/aF/EEvtJ/OUhnHWTkjrM+QM0DjVB6SFH3TFhb+JrS2s0il5LpwRwEab5i38FCuCba55rnFGABtqwwJQ6pcVURyYcUaAm3HG290nHucJzCylH6BVcC61ddYPsBOsxLresIEWjGLBkDilgp/DBCu2RlWzbR1jM2qvk8axmW/8/fNGCOsnjBJVqX+M32WG3WwzaBl7Sd7TqSZgn7op/KyxPAz09UUUdaTj/JXEyDE/QB9nmFS1/hFhgTgjwMtou2YSK2GWnXGRn0HGSGLkjADqmkKRIfNCs0/uCKDEabWFJmMd6gP4XrLMDglAvgtwP5QCwHNKAeA5pQDwnFIAeE4pADynFACe470AsiUyaZqaP2eZmRv9dzGVKF1FWJOuNZbcLw2dCVLnedcILR1lHwDPKQWA5ygiWQJhGSGioTJjV+FeclgUTHw6eXm6fVbEhc63gnA+6HXrgd3/9vXLp8dPnn4npO8GPMQSY1/5M45P76jffWGPfwO9TBJSkj9dPgAAAABJRU5ErkJggg=="
            ></img>
          </div>
        </div>
        <hr style={{ height: 1, width: 1150 }}></hr>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
          }}
        ></div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a
            href="/"
            style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
          >
            Terms of Service
          </a>
          <hr style={{ height: 30, backgroundColor: "whitesmoke" }}></hr>
          <a
            href="/"
            style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          <hr style={{ height: 30, backgroundColor: "whitesmoke" }}></hr>
          <a
            href="/"
            style={{ color: "rgb(59, 60, 74)", textDecoration: "none" }}
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};
