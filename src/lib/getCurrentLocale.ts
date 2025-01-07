import { Locale } from '@/i18n.config'
import { headers } from 'next/headers'

export default async function getCurrentLocale() {

    const url =(await headers()).get('x-url')
const local = url?.split('/')[3] as Locale ;
return local ;



}
