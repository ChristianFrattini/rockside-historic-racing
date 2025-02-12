import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user && user.email === process.env.ADMIN_EMAIL) {
    return redirect("/admin");
  }
  return (
    <div>
      <Button asChild>
        <LoginLink>Admin Sign In</LoginLink>
      </Button>
    </div>
  );
}
