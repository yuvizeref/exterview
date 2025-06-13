import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
const CardGroupContainer: React.FC<ContainerProps> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "80vh",
    margin: "0 auto",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    overflowY: "auto",
  };
  return <div style={containerStyle}>{children}</div>;
};

export default CardGroupContainer;
