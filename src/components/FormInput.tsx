interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  error?: string;
  variant?: "dark" | "warm";
}

export default function FormInput({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  error,
  variant = "dark",
}: FormInputProps) {
  const inputStyles =
    variant === "warm"
      ? `w-full text-base text-primary bg-secondary border ${
          error ? "border-accent" : "border-neutral-200"
        } px-4 py-3.5 placeholder:text-neutral-400 focus:border-accent focus:ring-1 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-accent outline-none`
      : `w-full text-base text-secondary bg-neutral-900 border ${
          error ? "border-accent" : "border-neutral-800"
        } px-4 py-3.5 placeholder:text-neutral-600 focus:border-accent focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent outline-none`;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputStyles}
      />
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
}
