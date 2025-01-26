"use client" 
import { signOut } from 'next-auth/react'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Translations } from '@/Types/translations';
import { Pages, Routes } from '../constants/enum';
import { Session } from 'next-auth';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useClientSession } from '@/hooks/UseClientSessions';

function AuthButtons ({translations , initialSession} : {translations:Translations 
  initialSession: Session | null;
}) {
  const session = useClientSession(initialSession);
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  return (<div className="">
  {session.data?.user && (
        <div className="flex items-center gap-10">
          <Button
            className="!px-8 !rounded-full"
            size="lg"
            onClick={() => signOut()}
          >
            {translations.navbar.signOut}
          </Button>
        </div>
      )}   {!session.data?.user && (
        <div className="flex items-center gap-6">
          <Button
            className={`${
              pathname.startsWith(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`)
                ? "text-primary"
                : "text-accent"
            } hover:text-primary duration-200 transition-colors font-semibold hover:no-underline !px-0`}
            size="lg"
            variant="link"
            onClick={() =>
              router.push(`/${locale}/${Routes.AUTH}/${Pages.LOGIN}`)
            }
          >
            {translations.navbar.login}
          </Button>
          <Button
            className="!px-8 !rounded-full"
            size="lg"
            onClick={() =>
              router.push(`/${locale}/${Routes.AUTH}/${Pages.Register}`)
            }
          >
            {translations.navbar.register}
          </Button>
        </div>
      )}
      
       </div>
  )
}

export default AuthButtons