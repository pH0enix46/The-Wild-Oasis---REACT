// // //
import SignupForm from "../components/authentication/SignupForm";
import Heading from "../ui/Heading";

export default function Users() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}
