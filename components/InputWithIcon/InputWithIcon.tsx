"use client";

import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconId: string; // наприклад: "search"
}

export default function InputWithIcon({ iconId, ...props }: Props) {
  const [value, setValue] = useState("");

  const showIcon = value.length === 0;

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`
        inputSearch
        ${props.className}
        ${showIcon ? "input-with-icon" : ""}
      `}
      style={{
        // додаємо іконку всередину інпуту
        WebkitMask: showIcon ? `url('/sprite.svg#${iconId}') no-repeat 10px center` : undefined,
        mask: showIcon ? `url('/sprite.svg#${iconId}') no-repeat 10px center` : undefined,
        backgroundColor: showIcon ? "gray" : undefined,
        paddingLeft: showIcon ? "36px" : undefined,
        maskSize: "18px",
        WebkitMaskSize: "18px",
      }}
    />
  );
}