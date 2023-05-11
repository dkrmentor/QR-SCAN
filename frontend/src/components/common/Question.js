export function Question({ label, value, onChange }) {
  const options = ["Excellent", "Correct", "Insuffisant", "Inacceptable"];

  return (
    <div className="question">
      <h2 className="question-name">{label}</h2>
      {options.map((option) => (
        <div key={option} className="option">
          <input
            type="radio"
            id={`${label}-${option}`}
            name={label}
            value={option}
            checked={value === option}
            onChange={(event) => onChange(event.target.value)}
            disabled
          />
          <label htmlFor={`${label}-${option}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}