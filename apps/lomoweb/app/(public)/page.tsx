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
    <div className="flex flex-col gap-6 text-left">
      <Heading level={2} color="gray" className="font-display text-center">
        Welcome to LoMo
      </Heading>
      <div className="flex flex-col gap-2">
        <Text>
          LoMo is a peer-based community support platform. It helps people ask
          for and offer support in ways that prioritize safety, consent, and
          care for everyone involved.
        </Text>
        <ul className="list-disc ml-5 flex flex-col gap-2">
          <li>
            <Text>
              Free & Not-for-Profit: Everything operates on a mutual aid model.
            </Text>
          </li>
          <li>
            <Text>
              Pure Connection: No monetization. No ads. No algorithms.
            </Text>
          </li>
          <li>
            <Text>
              Boundaries: LoMo is not an emergency service, medical provider, or
              replacement for professional care.
            </Text>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          variant="ghost"
          size={3}
          border="large"
          borderColor="terracotta"
        >
          <Link href="/signin">Sign In</Link>
        </Button>
        <Button size={3} color="yellow" border="large" borderColor="terracotta">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
