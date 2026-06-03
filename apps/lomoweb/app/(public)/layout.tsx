import { Heading } from "@repo/ui/heading";
import { LomoLogo } from "@repo/ui/icons";
import { Text } from "@repo/ui/text";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen flex-col bg-terracotta-2 py-8 px-6"
      data-radius="full"
    >
      {/* Main content — vertically centered */}
      <div className="m-auto w-full max-w-104 flex-1 flex-col justify-center gap-2">
        {/* Logo */}
        <div className="mb-4 flex w-full items-center gap-3 h-fit">
          <LomoLogo className="size-24 flex" />
          <Heading level={1} color="gray" highContrast className="font-display">
            Welcome to
            <br />
            LoMo
          </Heading>
        </div>

        {/* Form slot */}
        {children}
      </div>
      {/* Safety footer */}
      <footer className="px-6 text-center">
        <Text size={1} color="red" className="mx-auto max-w-sm leading-relaxed">
          If you are in immediate danger, contact local emergency services. LoMo
          is not a replacement for that.
        </Text>
      </footer>
    </div>
  );
}
