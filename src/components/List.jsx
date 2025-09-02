import React, { useEffect, useState } from "react";

export default function List({ getItem }) {
  const [item, setItems] = useState([]);
  useEffect(() => {
    setItems(getItem());
    console.log("updating items");
  }, [getItem]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
