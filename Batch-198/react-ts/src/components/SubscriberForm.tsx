import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Subcriber.css";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  mobile: yup
    .string()
    .trim()
    // .matches(/^\d{10}$/, "Mobile must contain exactly 10 digits")
    .min(10)
    .max(10)
    .required("Mobile is required"),

  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

type SubscriberFormData = yup.InferType<typeof schema>;

const SubscriberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SubscriberFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: SubscriberFormData) => {
    console.log("Subscriber data:", data);

    // TODO: Call API
    // await subscribeNewsletter(data);

    reset();
  };

  return (
    <section className="subscriber-section">
      <div className="subscriber-header">
        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Do not want to miss news, updates, note and any offer on our products,
          then please subscriber to our mailing list.
        </p>
      </div>

      <form className="subscriber-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="form-field">
          <input
            type="text"
            placeholder="Your name"
            {...register("name")}
            className={errors.name ? "input-error" : ""}
          />

          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        {/* Mobile */}
        <div className="form-field">
          <input
            type="tel"
            placeholder="Your Mobile phone"
            {...register("mobile")}
            className={errors.mobile ? "input-error" : ""}
          />

          {errors.mobile && (
            <span className="error-message">{errors.mobile.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-field">
          <input
            type="email"
            placeholder="Your email address"
            {...register("email")}
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        {/* Submit */}
        <button type="submit" disabled={isSubmitting}>
          <span className="email-icon">✉</span>

          {isSubmitting ? "Subscribing..." : "Subscribe email list"}
        </button>
      </form>
    </section>
  );
};

export default SubscriberForm;
