import { ArrowSquareDown } from "phosphor-react";
import React, { useState } from "react";
import { data } from "../data";

const InputField = () => {
  const [openModal, setOpenModal] = useState(false);
  const [changed, setChanged] = useState("Select Options");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {" "}
      <div
        onClick={() => {
          setOpenModal(!openModal);
        }}
        style={{
          width: "380px",
          height: "40px",
          backgroundColor: "#E5E8EA",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius:'4px',
          padding:"4px"
        }}
      >
        <p>{changed}</p>

        <ArrowSquareDown size={32} />
      </div>
      <div>
        {" "}
        {openModal && (
          <div
            style={{
              width: "380px",
              height: "auto",
              overflow: "scroll",
              backgroundColor: "wheat",
              color: "black",
              padding:"4px"
            }}
          >
            {data.map((res, idx) => {
              return (
                <li
                  key={idx}
                  style={{
                    listStyleType: "none",
                    padding: "4px",
                    borderBottom: "1px solid black",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setChanged(res.data);
                  }}
                >
                  {res.data}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
