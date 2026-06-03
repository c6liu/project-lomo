import { Button } from "@repo/ui/button";
import { Text } from "@repo/ui/text";
import { Heading } from "@repo/ui/heading";
import { isAuthenticated } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function WelcomePage() {
  if (await isAuthenticated()) {
    redirect("/app");
  }

  return (
    <div className="flex flex-col gap-6 text-center">
      <Heading level={2} color="gray" highContrast>
        Welcome to LoMo
      </Heading>
      <Text size={2}>Start by signing in or creating an account.</Text>
      
      <div className="flex flex-col gap-3">
        <Button asChild>
          <Link href="/signin">Sign In</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
