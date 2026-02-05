interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  error,
}: FormInputProps) {
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
        className={`w-full text-base text-secondary bg-[#0f0f0f] border ${
          error ? "border-accent" : "border-neutral-800"
        } px-4 py-3.5 placeholder:text-neutral-600 focus:border-accent focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent outline-none`}
      />
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
}
