// import EditUserForm from "@/components/edit-user-form";
import { Pages, Routes } from "@/components/constants/enum";
import EditUserForm from "@/components/edit-user-form";
import { Locale } from "@/i18n.config";
import { authOptions } from "@/lib/server/db/auth";
import getTrans from "@/lib/translation";
import { UserRole } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function AdminPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const translations = await getTrans(locale);
  const session = await getServerSession(authOptions); 

  if (!session) {
    redirect(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`);
  }

  if (session && session.user.role !== UserRole.ADMIN) {
    redirect(`/${locale}/${Routes.PROFILE}`);
  }
  return (
    <main>
      <section className="section-gap">
        <div className="container">
          <EditUserForm user={session?.user} translations={translations} />
        </div>
      </section>
    </main>
  );
}

export default AdminPage;