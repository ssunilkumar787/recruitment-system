import React, { useState, useRef, useEffect } from "react";

const InputList = ({ titleText }) => {
  const [inputValue, setInputValue] = useState("");
  const [companies, setCompanies] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [companies]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setCompanies([...companies, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeCompany = (index: number) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-3">
      <label
        htmlFor="company-input"
        className="block mb-2 font-bold"
        style={{ fontWeight: "bold" }}
      >
        {titleText}
      </label>
      <div className="flex flex-wrap items-center p-2 border rounded bg-white">
        <input
          id="company-input"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={companies.length === 0 ? "Enter text here..." : ""}
          className="flex-grow min-w-[120px] outline-none border-none"
          style={{ border: "none", outline: "none" }}
        />
        <div className="d-flex flex-row gap-1 mt-2">
          {companies.map((company, index) => (
            <div key={index} className="list-input d-flex gap-2">
              <span className="text-blue-800">{company}</span>
              <button
                onClick={() => removeCompany(index)}
                style={{
                  borderRadius: "54%",
                  border: "none",
                  paddingBottom: "5px",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputList;
