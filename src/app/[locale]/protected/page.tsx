import { SignOutButton } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProtectedPage() {
  const t = useTranslations("Protected");

  return (
    <>
      <div className="p-10 bg-red-700">{t("title")}</div>
      <Link href="/en" className="p-4 mt-8 bg-green-500">
        Go to Public page
      </Link>
      <SignOutButton>
        <div className="p-10 mt-8 bg-cyan-700 cursor-pointer">Sign Out</div>
      </SignOutButton>
    </>
  );
}
