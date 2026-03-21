"use client";

import { useState } from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

const MAX_CENTAVOS = 99_999_999; // R$ 999.999,99

export default function CurrencyInput({ value, onChange, disabled, className }: Props) {
  const [centavos, setCentavos] = useState(() => Math.round(value * 100));

  function update(next: number) {
    setCentavos(next);
    onChange(next / 100);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();
      const next = centavos * 10 + parseInt(e.key);
      if (next > MAX_CENTAVOS) return;
      update(next);
    } else if (e.key === "Backspace") {
      e.preventDefault();
      update(Math.floor(centavos / 10));
    } else if (e.key === "Delete") {
      e.preventDefault();
      update(0);
    }
  }

  const display = (centavos / 100).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 select-none pointer-events-none">
        R$
      </span>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onKeyDown={handleKeyDown}
        onChange={() => {}}
        disabled={disabled}
        placeholder="0,00"
        className={`pl-9 ${className ?? ""}`}
      />
    </div>
  );
}
