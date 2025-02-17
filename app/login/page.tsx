import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div
      className={
        "w-full h-full flex flex-col items-center justify-center mt-48 gap-5"
      }
    >
      <Label className={"text-xl"}>Rockside Historic Racing - LOGIN</Label>
      <Button asChild>
        <LoginLink>Admin Sign In</LoginLink>
      </Button>
    </div>
  );
}
