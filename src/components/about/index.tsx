import getCurrentLocale from '@/lib/getCurrentLocale';
import { Routes } from '../constants/enum';
import MainHeading from '../main-heading';
import getTrans from '@/lib/translation';

async function About() {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { about } = home;
  return (
    <section className='section-gap' id={Routes.ABOUT}>
      <div className='container text-center'>
        <MainHeading title={about.aboutUs} subTitle={about.ourStory} />
        <div className='text-accent max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            {about.descriptions.one}            
            </p>
          <p>
            {about.descriptions.two}          
              </p>
          <p>
            {about.descriptions.three}           
             </p>

        </div>
      </div>
    </section>
  );
}

export default About;