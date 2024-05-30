import { SignIn } from "@clerk/nextjs";
import { useLocale } from "next-intl";

export default function SignInPage() {
  const locale = useLocale();

  return <SignIn fallbackRedirectUrl={`/${locale}/protected`} />;
}
