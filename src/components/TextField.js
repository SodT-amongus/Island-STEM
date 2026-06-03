export const TextField = (props) => {
  return (
    <input
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "calc(100% - 20px)",
      }}
      {...props}
    />
  );
};
