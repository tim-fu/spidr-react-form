import { useForm } from "react-hook-form";

const SECRET_PIN_LENGTH = 4;

export function App() {
  const { 
    register, 
    handleSubmit,
    formState: { errors } } = useForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        fryerCost: '',
        secretPin: '',
      }
    });

    console.log(errors)

  return (
    <main>
      <h1>Interest Form</h1>
      <h3>Fill this out for a brand-new, legendary air fryer!</h3>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <label>First Name
          <input {...register("firstName", { required: true })} placeholder="e.g. Peter" />
        </label>
        <label>Last Name
          <input {...register("lastName", { required: true })} placeholder="e.g. Parker" />
        </label>
        <label>Phone
          <input {...register("phone", { required: true })} placeholder="e.g. 630-383-2070" />
        </label>
        <label>Email
          <input {...register("email", { required: true })} placeholder="e.g. spiderman@spidr.com" />
        </label>
        <label>Fryer Cost
         <input {...register("fryerCost", { required: true })} placeholder="e.g. $1000" />
        </label>
        <label>Spidr PIN
          <input {...register("secretPin", 
            { required: true, 
              minLength: {value: SECRET_PIN_LENGTH, message: `Length is ${SECRET_PIN_LENGTH}`},
              maxLength: {value: SECRET_PIN_LENGTH, message: `Length is ${SECRET_PIN_LENGTH}`} })} placeholder="Your secret 16-digit code" />
        </label>
        <input type="submit" />
      </form>
    </main>
  )
}

export default App
