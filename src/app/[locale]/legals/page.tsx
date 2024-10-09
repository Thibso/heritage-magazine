type Params = {
  params: { locale: string };
};
export default function LegalNotices({ params }: Params) {
  const locale = params.locale;
  if (locale === "en") {
    return (
      <main>
        <section className="bg-bgLight mt-[103px] myContainer space-y-10">
          <h1 className="h2">Terms of use</h1>
          <div className="space-y-6">
            <h2 className="font-bold text-xl">Site editor :</h2>
            <p>
              The MAGAZINE-HERITAGE.COM website is published by HEALTHCIE, SAS
              with capital of €11,000, registered in the BORDEAUX Trade and des
              Sociétés (RCS) of BORDEAUX under the number 87835285500018, whose
              head office is located at 11 RUE SUCCURSALE, 33000 BORDEAUX.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-xl">Director of publication:</h2>
            <p>
              The publication director is Mr VERVEL Julien, acting as Managing
              Director.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Hosting :</h2>
            <p>
              Our web site is hosted by Vercel, Inc. Vercel provides
              infrastructure and services necessary to deploy and manage manage
              our web applications. For more information about Vercel, please
              visit their web site at at https://vercel.com.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Purpose of the site</h2>
            <div className="space-y-4">
              <p>
                MAGAZINE-HERITAGE.COM is a specialized digital platform for
                health professionals working in the fields of cosmetic surgery
                cosmetic surgery, aesthetic medicine and dermatology. and
                dermatology. Its main objective is to disseminate scientific and
                technical information on innovation in these disciplines, both
                nationally and and international level.
              </p>
              <p>
                The site strives to provide accurate, up-to-date information.
                however, due to the rapid evolution of medical knowledge medical
                knowledge, MAGAZINE-HERITAGE.COM cannot guarantee the the
                accuracy and completeness of the content published. published.
                Users of the site are invited to verify the validity of
                information by cross-checking with authorized sources or by
                consulting qualified professionals. professionals.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Target audience</h2>
            <div className="space-y-4">
              <p>
                The content offered on MAGAZINE-HERITAGE.COM is intended
                exclusively for a professional audience of doctors, surgeons
                surgeons, dermatologists and other healthcare practitioners in
                the in the field of medical aesthetics. It is expressly that
                this content is not intended for the general public and cannot
                be and cannot be considered as medical information accessible to
                patients.
              </p>
              <p>
                Any user accessing the MAGAZINE-HERITAGE.COM website confirms
                that that he/she is a healthcare professional authorized to
                consult and use the information available. MAGAZINE-HERITAGE.COM
                declines all responsibility should a non-professional consult or
                use to consult or use this information for inappropriate
                inappropriate purposes.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">No commercial relations</h2>
            <div className="space-y-4">
              <p>
                In compliance with article R. 4127-19 of the French Public
                Health Code Code, doctors and healthcare professionals are not
                allowed to advertise their right to advertise their services or
                promote their activities. promote their activities.
                Consequently, no commercial commercial, advertising or
                promotional relationship exists between MAGAZINE-HERITAGE.COM
                and the healthcare professionals who publish on the platform.
              </p>
              <p>
                The content disseminated, including articles, testimonials, case
                studies case studies, or any other type of publication, is
                strictly for informative scientific purposes. No healthcare
                professional receive any remuneration, benefit in kind or
                financial consideration financial consideration in exchange for
                their participation or contribution to the site.
              </p>
              <p>
                HEALTHCIE SAS also declines all responsibility in the event of
                conflict of interest or divergence between healthcare
                professionals laboratories or manufacturers of medical devices
                medical device manufacturers mentioned in the content published
                on the site.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Intellectual property</h2>
            <div className="space-y-4">
              <p>
                All elements present on the MAGAZINE-HERITAGE.COM site,
                including, but not limited to, texts, images, videos, logos,
                icons and trademarks, are protected by French and international
                and international intellectual property laws. intellectual
                property.
              </p>
              <p>
                Any reproduction, distribution, modification, adaptation or
                partial or total exploitation of the content of this site, in
                any form whatsoever in any form whatsoever, without the express
                prior authorization authorization of HEALTHCIE SAS is strictly
                forbidden and constitutes a under the French Intellectual
                Property Code. Code.
              </p>
              <p>
                Users may, however, share hyperlinks to the site&apos;s public
                pages, subject to the following conditions content is not
                distorted or used in a commercial or defamatory commercial or
                defamatory use.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Personal data protection</h2>
            <div className="space-y-4">
              <p>
                HEALTHCIE SAS attaches particular importance to the protection
                of the personal data of the users of the site and complies with
                the provisions of the General Data Protection Protection (RGPD).
                No personal data is collected collected without the user&apos;s
                knowledge.
              </p>
              <p>
                Professional users may be required to create an account on the
                account on the site to access certain content or services. In
                this case, the information collected (name, e-mail address,
                profession, etc.) will only be used to manage the user account
                account management and will not be passed on to third parties
                third parties without the user&apos;s explicit consent.
              </p>
              <p>
                Users have the right to access, rectify, delete and port their
                data at any time. rectification, deletion and portability of
                their personal data in accordance with articles 15 to 20 of the
                RGPD. To exercise these rights, they can contact
                hello@healthcie.fr.
              </p>
            </div>
            <h2 className="font-bold text-xl">Limitation of liability</h2>
            <div className="space-y-4">
              <p>
                MAGAZINE-HERITAGE.COM makes every effort to update and
                distribute reliable and relevant information. However, the
                available on the site is provided for information purposes and
                is not intended to replace personalized medical medical advice.
              </p>
              <p>
                By accessing the site, users agree that HEALTHCIE SAS cannot be
                held responsible for any errors, omissions or inaccuracy in the
                content provided. Likewise, the company shall not be held liable
                for any use of the information use of the information for
                purposes that do not comply with medical medical or legal
                practices.
              </p>
              <p>
                The use of the information published is under the responsibility
                of the healthcare professionals, who must always must always
                refer to the official guidelines and recommendations
                recommendations in force in their country of practice.
              </p>
              <p>
                The site may contain hyperlinks to other websites. other
                websites. HEALTHCIE SAS declines all responsibility for the
                content or privacy policy policy of these third-party sites.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Contact</h2>
            <p>
              If you have any questions about this legal notice or wish to
              exercise or to exercise your rights concerning your personal data,
              you can by e-mail at hello@healthcie.fr or by post at the
              following address 11 RUE SUCCURSALE, 33000 Bordeaux.
            </p>
          </div>
        </section>
      </main>
    );
  }
  if (locale === "fr") {
    return (
      <main>
        <section className="bg-bgLight mt-[103px] myContainer space-y-10">
          <h1 className="h2">Mentions légales</h1>
          <div className="space-y-6">
            <h2 className="font-bold text-xl">Éditeur du site :</h2>
            <p>
              Le site internet MAGAZINE-HERITAGE.COM est édité par HEALTHCIE,
              SAS société au capital de 11000 €, inscrite au Registre du
              Commerce et des Sociétés (RCS) de BORDEAUX sous le numéro
              87835285500018, dont le siège social est situé à 11 RUE
              SUCCURSALE, 33000 BORDEAUX.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-xl">Directeur de la publication :</h2>
            <p>
              Le directeur de la publication est Monsieur VERVEL Julien,
              agissant en qualité de Directeur Général.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Hébergement :</h2>
            <p>
              Notre site web est hébergé par Vercel, Inc. Vercel fournit
              l&apos;infrastructure et les services nécessaires pour déployer et
              gérer efficacement nos applications web. Pour plus
              d&apos;informations sur Vercel, veuillez consulter son site web à
              l&apos;adresse https://vercel.com.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Objet du site</h2>
            <div className="space-y-4">
              <p>
                Le site MAGAZINE-HERITAGE.COM est une plateforme digitale
                spécialisée, destinée aux professionnels de la santé exerçant
                dans les domaines de la chirurgie esthétique, de la médecine
                esthétique et de la dermatologie. Son objectif principal est de
                diffuser des informations à caractère scientifique et technique
                relatives à l’innovation dans ces disciplines, tant à l’échelle
                nationale qu’internationale.
              </p>
              <p>
                Le site s’efforce de fournir des informations précises et à
                jour, cependant, en raison de l&apos;évolution rapide des
                connaissances dans le domaine médical, MAGAZINE-HERITAGE.COM ne
                garantit ni l’exactitude, ni l&apos;exhaustivité des contenus
                publiés. Les utilisateurs du site sont invités à vérifier
                eux-mêmes la validité des informations en recoupant avec des
                sources autorisées ou en consultant des professionnels
                qualifiés.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Public visé</h2>
            <div className="space-y-4">
              <p>
                Les contenus proposés sur MAGAZINE-HERITAGE.COM sont destinés
                exclusivement à un public professionnel composé de médecins,
                chirurgiens, dermatologues et autres praticiens de la santé dans
                le domaine de l&apos;esthétique médicale. Il est expressément
                indiqué que ces contenus ne sont pas destinés au grand public et
                ne peuvent être considérés comme des informations médicales
                accessibles aux patients.
              </p>
              <p>
                Tout utilisateur accédant au site MAGAZINE-HERITAGE.COM confirme
                qu&apos;il est un professionnel de la santé habilité à consulter
                et utiliser les informations disponibles. MAGAZINE-HERITAGE.COM
                se dégage de toute responsabilité si un non-professionnel venait
                à consulter ou utiliser ces informations à des fins
                inappropriées.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">
              Absence de relations commerciales
            </h2>
            <div className="space-y-4">
              <p>
                En conformité avec l&apos;article R. 4127-19 du Code de la Santé
                Publique, les médecins et les professionnels de santé n’ont pas
                le droit de faire de publicité concernant leurs services ou de
                promouvoir leurs activités. Par conséquent, aucune relation
                commerciale, publicitaire ou promotionnelle n’existe entre
                MAGAZINE-HERITAGE.COM et les professionnels de santé qui
                publient sur la plateforme.
              </p>
              <p>
                Les contenus diffusés, incluant articles, témoignages, études de
                cas, ou tout autre type de publication, sont strictement à visée
                informative et scientifique. Aucun professionnel de santé ne
                reçoit de rémunération, avantage en nature ou contrepartie
                financière en échange de sa participation ou de sa contribution
                au site.
              </p>
              <p>
                HEALTHCIE SAS se dégage également de toute responsabilité en cas
                de conflit d’intérêts ou de divergence entre les professionnels
                de santé et les laboratoires ou fabricants de dispositifs
                médicaux mentionnés dans les contenus publiés sur le site.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Propriété intellectuelle</h2>
            <div className="space-y-4">
              <p>
                Tous les éléments présents sur le site MAGAZINE-HERITAGE.COM,
                incluant, sans s&apos;y limiter, les textes, images, vidéos,
                graphismes, logos, icônes et marques, sont protégés par les lois
                françaises et internationales relatives à la propriété
                intellectuelle.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation ou
                exploitation partielle ou totale du contenu de ce site, sous
                quelque forme que ce soit, sans autorisation préalable expresse
                de HEALTHCIE SAS est strictement interdite et constitue une
                contrefaçon sanctionnée par le Code de la Propriété
                Intellectuelle.
              </p>
              <p>
                Les utilisateurs peuvent toutefois partager des liens
                hypertextes menant vers les pages publiques du site, sous
                réserve de ne pas dénaturer les contenus et de ne pas en faire
                une utilisation commerciale ou diffamatoire.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">
              Protection des données personnelles
            </h2>
            <div className="space-y-4">
              <p>
                HEALTHCIE SAS attache une importance particulière à la
                protection des données personnelles des utilisateurs du site et
                respecte les dispositions du Règlement Général sur la Protection
                des Données (RGPD). Aucune donnée personnelle n&apos;est
                collectée à l’insu des utilisateurs.
              </p>
              <p>
                Les utilisateurs professionnels peuvent être amenés à créer un
                compte sur le site pour accéder à certains contenus ou services.
                Dans ce cadre, les informations collectées (nom, adresse email,
                profession, etc.) ne seront utilisées que dans le cadre de la
                gestion du compte utilisateur et ne seront pas transmises à des
                tiers sans le consentement explicite de l’utilisateur.
              </p>
              <p>
                Les utilisateurs disposent à tout moment d’un droit d’accès, de
                rectification, de suppression et de portabilité de leurs données
                personnelles, conformément aux articles 15 à 20 du RGPD. Pour
                exercer ces droits, ils peuvent contacter hello@healthcie.fr.
              </p>
            </div>
            <h2 className="font-bold text-xl">Limitation de responsabilité</h2>
            <div className="space-y-4">
              <p>
                MAGAZINE-HERITAGE.COM s’efforce de mettre à jour et de diffuser
                des informations fiables et pertinentes. Toutefois, les
                informations disponibles sur le site sont fournies à titre
                indicatif et ne sauraient remplacer un avis médical
                personnalisé.
              </p>
              <p>
                En accédant au site, les utilisateurs acceptent que HEALTHCIE
                SAS ne puisse être tenue responsable de toute erreur, omission,
                ou inexactitude dans les contenus diffusés. De même, la
                responsabilité de l&apos;entreprise ne saurait être engagée en
                cas d’utilisation des informations à des fins non conformes aux
                pratiques médicales ou légales en vigueur.
              </p>
              <p>
                L&apos;utilisation des informations publiées se fait sous
                l&apos;entière responsabilité des professionnels de santé, qui
                doivent toujours se référer aux directives officielles et
                recommandations en vigueur dans leur pays d’exercice.
              </p>
              <p>
                Le site peut contenir des liens hypertextes renvoyant vers
                d&apos;autres sites internet. HEALTHCIE SAS décline toute
                responsabilité quant au contenu ou à la politique de
                confidentialité de ces sites tiers.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-bold text-xl">Contact</h2>
            <p>
              Pour toute question relative aux mentions légales ou pour exercer
              vos droits concernant vos données personnelles, vous pouvez nous
              contacter par e-mail à hello@healthcie.fr ou par courrier postal à
              l’adresse suivante : 11 RUE SUCCURSALE, 33000 Bordeaux.
            </p>
          </div>
        </section>
      </main>
    );
  }
}
