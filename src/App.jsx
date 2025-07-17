import { useForm } from "react-hook-form";

const SECRET_PIN_LENGTH = 19; // including hyphens

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

  console.log(errors);

  return (
    <main>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <h1>Interest Form</h1>
        <h3>Who's ready for a top-of-the-line air fryer? You are!</h3>

        <label>First Name
          <input {...register("firstName", { required: true })} placeholder="e.g. Peter" />
        </label>
        <label>Last Name
          <input {...register("lastName", { required: true })} placeholder="e.g. Parker" />
        </label>
        <label>Phone Number
          <input type="tel" {...register("phone", { required: true })} placeholder="e.g. 630-383-2070" />
        </label>
        <label>Email
          <input type="email" {...register("email", { required: true })} placeholder="e.g. spiderman@spidr.com" />
        </label>
        <label>Guess the Fryer Cost
         <input {...register("fryerCost", { required: true })} placeholder="e.g. $1000" />
        </label>
        <label>Your Top Secret Spidr PIN
          <input
            {...register("secretPin", 
              { required: true, 
                minLength: {value: SECRET_PIN_LENGTH, message: `Length is ${SECRET_PIN_LENGTH}`},
                maxLength: {value: SECRET_PIN_LENGTH, message: `Length is ${SECRET_PIN_LENGTH}`} })} 
            placeholder="e.g. 1234-5678-1234-5678"/>
        </label>
        <div><button type="submit">Submit</button></div>
      </form>
    </main>
  )
}

export default App
