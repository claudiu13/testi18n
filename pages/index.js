import { useRouter } from 'next/router';
import Link from 'next/link';
import { translations } from '../utils/translations';

export default function Home() {
  const router = useRouter();
  const { locale, locales } = router;
  const t = translations[locale];

  return (
    <div>
      <h1>{t.home.welcome}</h1>
      
      <div>
        <h2>{t.home.selectLanguage}</h2>
        {locales?.map((loc) => (
          <Link 
            key={loc} 
            href="/" 
            locale={loc}
            className={locale === loc ? 'active' : ''}
          >
            {loc === 'en' ? 'English' : 'Română'}
          </Link>
        ))}
      </div>
    </div>
  );
}