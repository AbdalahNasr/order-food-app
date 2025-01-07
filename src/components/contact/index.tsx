import MainHeading from '@/components/main-heading';
import { Routes } from '@/components/constants/enum';
import getTrans from '@/lib/translation';
import getCurrentLocale from '@/lib/getCurrentLocale';

const Contact = async () => {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
const { contact } = home;
  return (
    <section className='section-gap' id={Routes.CONTACT}>
      <div className='container text-center'>
        <MainHeading
          title={contact.contactUs}
          subTitle={contact['Don\'tHesitate']}
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-accent' href='tel:+2012121212'>
            +2012121212
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;