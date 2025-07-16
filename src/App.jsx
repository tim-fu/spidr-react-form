import { useForm } from "react-hook-form";

export function App() {
  const { register, handleSubmit } = useForm();

  return (
    <main>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <input {...register("phone")} placeholder="Phone" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("fryerCost")} placeholder="Fryer cost" />
        <input {...register("secretPIN")} placeholder="Spidr PIN" />
        <input type="submit" />
      </form>
    </main>
  )
}

export default App
