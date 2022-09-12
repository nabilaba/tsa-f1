import React from "react";

const Referensi = ({ children }: { children: any }) => {
  return (
    <div style={{ border: "1px solid #f687b3", padding: "20px" }}>
      <h3>Referensi</h3>
      {children}
    </div>
  );
};
export default Referensi;
