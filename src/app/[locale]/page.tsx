import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10 bg-green-700">{t("title")}</div>
    </main>
  );
}
