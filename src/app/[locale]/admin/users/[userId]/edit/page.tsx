import { Pages, Routes } from "@/components/constants/enum";
import EditUserForm from "@/components/edit-user-form";
import { Locale } from "@/i18n.config";
import { getUser, getUsers } from "@/lib/server/db/users";
import getTrans from "@/lib/translation";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({ userId: user.id }));
}

async function EditUserPage({
  params,
}: {
  params: Promise<{ userId: string; locale: Locale }>;
}) {
  const { locale, userId } = await params;
  const translations = await getTrans(locale);
  const user = await getUser(userId);
  if (!user) {
    redirect(`/${locale}/${Routes.ADMIN}/${Pages.USERS}`);
  }
  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <EditUserForm translations={translations} user={user} />
        </div>
      </section>
    </main>
  );
}

export default EditUserPage;