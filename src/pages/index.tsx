import React from "react";
import { Route, Routes } from "react-router-dom";

type Props = {};

export function Routing({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<p>main</p>} />
    </Routes>
  );
}
