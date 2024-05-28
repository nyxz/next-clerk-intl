import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <div className="p-10 bg-green-700">{t("title")}</div>
      <Link href="/en/protected" className="p-4 mt-8 bg-red-500">
        Go to Protected page
      </Link>
    </>
  );
}
