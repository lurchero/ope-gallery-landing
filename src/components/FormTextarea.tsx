interface FormTextareaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

export default function FormTextarea({
  label,
  name,
  required = false,
  placeholder,
  error,
}: FormTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full text-base text-secondary bg-[#0f0f0f] border ${
          error ? "border-accent" : "border-neutral-800"
        } px-4 py-3.5 min-h-[160px] resize-y placeholder:text-neutral-600 focus:border-accent focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent outline-none`}
      />
      {error && <p className="mt-1 text-sm text-accent">{error}</p>}
    </div>
  );
}
