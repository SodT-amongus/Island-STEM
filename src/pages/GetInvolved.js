import { addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { messagesCollection } from "../firebase/Firebase";

export const GetInvolved = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields");
      return;
    }
    setLoading(true);
    await addDoc(messagesCollection, {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
    });
    setLoading(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message sent! We'll be in touch soon.");
  };

  return (
    <div
      style={{
        backgroundColor: "#F5F0E8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div
        style={{
          position: "relative",
          backgroundColor: "#0B2545",
          padding: "60px 80px 50px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            position: "relative",
            color: "#F5F0E8",
            fontSize: 42,
            fontWeight: 800,
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}
        >
          Get Involved
        </h1>
        <p
          style={{
            position: "relative",
            color: "#a8c5e8",
            fontSize: 16,
            maxWidth: 520,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Whether or not your a student, parent, have questions, or an
          organization wanting to sponsor us, we would love for you to get
          involved.
        </p>
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: 760,
          width: "100%",
          margin: "0 auto",
          padding: "56px 80px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <span
            style={{
              color: "#0B2545",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            REACH OUT
          </span>
          <div
            style={{
              flex: 1,
              height: 2,
              backgroundColor: "#0ABFBC",
            }}
          />
        </div>

        <h2
          style={{
            color: "#0B2545",
            fontSize: 26,
            fontWeight: 800,
          }}
        >
          Send us a message
        </h2>

        <div
          style={{
            backgroundColor: "#0B2545",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              <input
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "none",
                  borderRadius: 8,
                  color: "#F5F0E8",
                  fontSize: 14,
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Your email"
                type="email"
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "none",
                  borderRadius: 8,
                  color: "#F5F0E8",
                  fontSize: 14,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              placeholder="Subject"
              style={{
                width: "495px",
                padding: "11px 14px",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "none",
                borderRadius: 8,
                color: "#F5F0E8",
                fontSize: 14,
              }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              placeholder="Write a message..."
              rows={6}
              style={{
                width: "495px",
                padding: "11px 14px",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "none",
                borderRadius: 8,
                color: "#F5F0E8",
                fontSize: 14,
                resize: "vertical",
                lineHeight: 1.6,
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                padding: "13px",
                backgroundColor: loading ? "rgba(244,224,77,0.5)" : "#F4E04D",
                color: "#0B2545",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
