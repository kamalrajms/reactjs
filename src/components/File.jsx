import React from "react";
import { useParams } from "react-router-dom";

export default function File() {
  const { id } = useParams;
  return (
    <div>
      hello sai--{id}
    </div>
  );
}
