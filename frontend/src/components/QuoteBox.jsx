import React, { useEffect, useState } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState(null);

  // Fetch quote from backend
  const fetchQuote = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/quotes/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
    }
  };

  useEffect(() => {
    fetchQuote(); // Load first quote on mount
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      minWidth: "100vw",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    card: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "60px 40px",
      maxWidth: "700px",
      width: "100%",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    },
    quote: {
      fontSize: "28px",
      fontWeight: "300",
      color: "#2c3e50",
      lineHeight: "1.6",
      marginBottom: "30px",
      fontStyle: "italic",
      letterSpacing: "-0.02em"
    },
    author: {
      fontSize: "18px",
      color: "#7f8c8d",
      fontWeight: "500",
      marginBottom: "40px",
      position: "relative"
    },
    authorLine: {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "-15px",
      transform: "translateX(-50%)",
      width: "60px",
      height: "1px",
      background: "linear-gradient(90deg, transparent, #bdc3c7, transparent)"
    },
    button: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      borderRadius: "50px",
      color: "white",
      padding: "16px 32px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
      letterSpacing: "0.5px"
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 25px rgba(102, 126, 234, 0.4)"
    },
    decorativeElement: {
      position: "absolute",
      top: "20px",
      left: "20px",
      fontSize: "80px",
      color: "rgba(52, 73, 94, 0.05)",
      fontFamily: "Georgia, serif",
      lineHeight: "1",
      userSelect: "none"
    }
  };

  return (
    
    <div style={styles.container}>

      <div style={styles.card}>
        <div style={styles.decorativeElement}>"</div>
        <h1 style={{color:"black"}}>Random Quote Generator</h1>
        {quote && (
          <>
            <div style={styles.quote}>
              "{quote.text}"
            </div>
            <div style={styles.author}>
              <div style={styles.authorLine}></div>
              {quote.author}
            </div>
          </>
        )}
        
        <button
          onClick={fetchQuote}
          style={styles.button}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, styles.buttonHover);
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.3)";
          }}
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;