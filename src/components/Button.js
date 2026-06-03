export const Button = (props) => {
  const { children, style, ...rest } = props;

  return (
    <button
      style={{
        padding: "10px 16px",
        backgroundColor: "#67c7f0",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        color: "white",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
