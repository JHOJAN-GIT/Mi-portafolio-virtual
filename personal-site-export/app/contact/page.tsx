import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contacto',
  description: `Contacta a ${profile.name} por correo en ${profile.email}.`,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper hideFooter mainClassName="page-main--contact">
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Contacto</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Respondo en menos de 24 horas</p>
          </div>

          <div className="contact-divider">
            <span>o encuéntrame en</span>
          </div>

          <ContactIcons includeEmail={false} />
        </div>
      </section>
    </PageWrapper>
  );
}
