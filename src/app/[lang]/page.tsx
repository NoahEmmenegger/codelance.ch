import { Locale } from '../../../i18-config';
import { getDictionary } from '../../get-dictionary';
import LocaleSwitcher from './components/locale-switcher';

import '../globals.css';

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(lang);

    return (
        <div>
            <LocaleSwitcher />
            <p>Current locale: {lang}</p>
            <p>This text is rendered on the server: {dictionary['server-component'].welcome}</p>
        </div>
    );
}
