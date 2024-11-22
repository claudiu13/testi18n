import { useRouter } from 'next/router';
import { translations } from '../utils/translations';

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

  return (
    <div>
      <h1>{t.about.title}</h1>
      <p>{t.about.description}</p>
    </div>
  );
}