import React, { createContext, useContext, useState } from "react";

const translations = {
  ro: {
    nav: {
      servicii: "Servicii",
      portofoliu: "Portofoliu",
      despreNoi: "Despre noi",
      contact: "Contact",
      langLabel: "România",
    },
    hero: {
      title: "VALARO",
      subtitle: "Creștem branduri îndrăznețe. De la strategie la execuție, construim campanii care aduc rezultate reale — nu doar impresii.",
      cta: "Descoperă serviciile",
    },
    services: {
      sectionTitle: "Ce facem",
      items: [
        {
          tag: "STRATEGIE DE BRAND",
          desc: "Construim o identitate de brand puternică, memorabilă și consistentă — care vorbește direct cu publicul tău.",
        },
        {
          tag: "CAMPANII SOCIAL MEDIA",
          desc: "Conținut captivant, publicitate plătită și management complet al canalelor tale sociale.",
        },
        {
          tag: "GENERARE DE LEAD-URI",
          desc: "Atragem clienți potențiali calificați prin funnel-uri de marketing testate și optimizate constant.",
        },
        {
          tag: "PREZENȚĂ ONLINE 360°",
          desc: "Website, SEO, reclame și PR — ne asigurăm că brandul tău este vizibil oriunde contează.",
        },
        {
          tag: "CREAȚIE & PRODUCȚIE",
          desc: "Design grafic, video, copywriting și conținut vizual care opresc thumb-ul și convertesc.",
        },
        {
          tag: "RAPORTARE TRANSPARENTĂ",
          desc: "Primești rapoarte clare și detaliate. Știi exact ce funcționează și unde îți mergem banii.",
        },
      ],
    },
    serviceCards: [
      { tag: "Strategie de brand", desc: "AI-ul nostru raspunde instant la emailuri, WhatsApp si DM-uri - fara sa ridici un deget." },
      { tag: "Campanii social media", desc: "Clientii se programeaza singuri, primesc confirmari si reminder-uri — totul fara interventie umana." },
      { tag: "Generare de lead-uri", desc: "Angajatii tai se ocupa de ce conteaza, nu de sarcini repetitive care pot fi automatizate." },
      { tag: "Prezență online 360°", desc: "Automatizarile functioneaza non-stop. Clientii primesc raspuns chiar si noaptea sau in weekend." },
      { tag: "Creație & producție", desc: "Vezi in timp real cate mesaje, programari si lead-uri sunt gestionate automat pentru tine." },
      { tag: "Raportare transparentă", desc: "Nu trebuie sa schimbi nimic in business-ul tau. Noi integram Ai-ul in uneltele pe care le folosesti deja." },
    ],
    servicesButton: "Ce Facem Pentru Tine",
    about: {
      titleLine1: "Lucrăm cu branduri care vor",
      titleHighlight1: "să crească",
      titleLine2: "serios",
      titleHighlight2: "și rapid",
      p1a: "Valaro s-a născut dintr-o convingere simplă:",
      p1Bold: "marketingul bun schimbă complet traiectoria unui business",
      p1b: "— indiferent de industrie sau dimensiune.",
      p2a: "Aducem o echipă de specialiști în strategie, creație și performance marketing, care lucrează ca un departament intern al tău.",
      p2Bold: "Fără intermediari, fără birocrație.",
    },
    contact: {
      title: "Hai să creștem brandul tău",
      tipCerere: "Tip de cerere",
      selecteaza: "Selectează o opțiune",
      optiuni: ["Strategie de brand & poziționare", "Management social media", "Campanii Meta & Google Ads", "SEO & content marketing", "Email marketing & automation", "Producție video & foto", "Design grafic & identitate vizuală", "Influencer marketing", "Website & landing page", "PR & relații publice", "Pachet personalizat"],
      despretine: "Despre tine",
      prenume: "Prenume",
      nume: "Nume",
      email: "Adresă email",
      telefon: "Telefon",
      business: "Business",
      mesaj: "Mesaj",
      trimite: "Trimite pe WhatsApp",
      hint: "Apăsând butonul, vei fi redirecționat către WhatsApp cu mesajul completat.",
      required: "*",
      back: "Înapoi",
    },
    portfolio: {
      title: "Portofoliu",
      subtitle: "Proiectele noastre vorbesc de la sine.",
      comingSoon: "În curând",
      comingDesc: "Lucrăm la ceva excepțional. Revino în curând pentru a descoperi proiectele noastre.",
      back: "Înapoi",
    },
    serviciiPage: {
      title: "Ce automatizam pentru tine.",
      subtitle: "Indiferent de tipul afacerii tale, avem automatizarea perfecta.",
      cta: "Cere ofertă",
      items: [
        "Strategie de brand & poziționare",
        "Management social media",
        "Campanii Meta & Google Ads",
        "SEO & content marketing",
        "Email marketing & automation",
        "Producție video & foto",
        "Design grafic & identitate vizuală",
        "Influencer marketing",
        "Website & landing page",
        "PR & relații publice",
        "Pachet personalizat",
      ],
    },
    footer: {
      heading: "Hai să construim\nceva extraordinar",
      copyright: "© 2026 Valaro. Toate drepturile rezervate.",
      privacy: "Politică de confidențialitate",
      terms: "Termeni și condiții",
    },
  },
  en: {
    nav: {
      servicii: "Services",
      portofoliu: "Portfolio",
      despreNoi: "About us",
      contact: "Contact",
      langLabel: "English",
    },
    hero: {
      title: "VALARO",
      subtitle: "We grow bold brands. From strategy to execution, we build campaigns that deliver real results — not just impressions.",
      cta: "Discover our services",
    },
    services: {
      sectionTitle: "What we do",
      items: [
        {
          tag: "BRAND STRATEGY",
          desc: "We build a strong, memorable and consistent brand identity — that speaks directly to your audience.",
        },
        {
          tag: "SOCIAL MEDIA CAMPAIGNS",
          desc: "Captivating content, paid advertising and full management of your social channels.",
        },
        {
          tag: "LEAD GENERATION",
          desc: "We attract qualified potential clients through tested and constantly optimized marketing funnels.",
        },
        {
          tag: "360° ONLINE PRESENCE",
          desc: "Website, SEO, ads and PR — we make sure your brand is visible wherever it matters.",
        },
        {
          tag: "CREATION & PRODUCTION",
          desc: "Graphic design, video, copywriting and visual content that stops the scroll and converts.",
        },
        {
          tag: "TRANSPARENT REPORTING",
          desc: "You receive clear and detailed reports. You know exactly what works and where your money goes.",
        },
      ],
    },
    serviceCards: [
      { tag: "Brand Strategy", desc: "Our AI replies instantly to emails, WhatsApp and DMs — without you lifting a finger." },
      { tag: "Social Media Campaigns", desc: "Clients book themselves, receive confirmations and reminders — all without human intervention." },
      { tag: "Lead Generation", desc: "Your employees focus on what matters, not repetitive tasks that can be automated." },
      { tag: "360° Online Presence", desc: "Automations run non-stop. Clients get a response even at night or on weekends." },
      { tag: "Creation & Production", desc: "See in real time how many messages, bookings and leads are managed automatically for you." },
      { tag: "Transparent Reporting", desc: "You don't need to change anything in your business. We integrate AI into the tools you already use." },
    ],
    servicesButton: "What We Do For You",
    about: {
      titleLine1: "We work with brands that want",
      titleHighlight1: "to grow",
      titleLine2: "seriously",
      titleHighlight2: "and fast",
      p1a: "Valaro was born from a simple belief:",
      p1Bold: "good marketing completely changes the trajectory of a business",
      p1b: "— regardless of industry or size.",
      p2a: "We bring a team of specialists in strategy, creation and performance marketing, working as your internal department.",
      p2Bold: "No middlemen, no bureaucracy.",
    },
    contact: {
      title: "Let's grow your brand",
      tipCerere: "Request type",
      selecteaza: "Select an option",
      optiuni: ["Brand strategy & positioning", "Social media management", "Meta & Google Ads campaigns", "SEO & content marketing", "Email marketing & automation", "Video & photo production", "Graphic design & visual identity", "Influencer marketing", "Website & landing page", "PR & public relations", "Custom package"],
      despretine: "About you",
      prenume: "First name",
      nume: "Last name",
      email: "Email address",
      telefon: "Phone",
      business: "Business",
      mesaj: "Message",
      trimite: "Send via WhatsApp",
      hint: "By pressing the button, you will be redirected to WhatsApp with the completed message.",
      required: "*",
      back: "Back",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Our projects speak for themselves.",
      comingSoon: "Coming Soon",
      comingDesc: "We're working on something exceptional. Come back soon to discover our projects.",
      back: "Back",
    },
    serviciiPage: {
      title: "What we automate for you.",
      subtitle: "Regardless of your business type, we have the perfect automation.",
      cta: "Get a quote",
      items: [
        "Brand strategy & positioning",
        "Social media management",
        "Meta & Google Ads campaigns",
        "SEO & content marketing",
        "Email marketing & automation",
        "Video & photo production",
        "Graphic design & visual identity",
        "Influencer marketing",
        "Website & landing page",
        "PR & public relations",
        "Custom package",
      ],
    },
    footer: {
      heading: "Let's build\nsomething extraordinary",
      copyright: "© 2026 Valaro. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  fr: {
    nav: {
      servicii: "Services",
      portofoliu: "Portfolio",
      despreNoi: "À propos",
      contact: "Contact",
      langLabel: "Français",
    },
    hero: {
      title: "VALARO",
      subtitle: "Nous développons des marques audacieuses. De la stratégie à l'exécution, nous construisons des campagnes qui apportent de vrais résultats — pas seulement des impressions.",
      cta: "Découvrir nos services",
    },
    services: {
      sectionTitle: "Ce que nous faisons",
      items: [
        {
          tag: "STRATÉGIE DE MARQUE",
          desc: "Nous construisons une identité de marque forte, mémorable et cohérente — qui parle directement à votre audience.",
        },
        {
          tag: "CAMPAGNES SOCIAL MEDIA",
          desc: "Contenu captivant, publicité payante et gestion complète de vos canaux sociaux.",
        },
        {
          tag: "GÉNÉRATION DE LEADS",
          desc: "Nous attirons des clients potentiels qualifiés grâce à des entonnoirs marketing testés et constamment optimisés.",
        },
        {
          tag: "PRÉSENCE EN LIGNE 360°",
          desc: "Site web, SEO, publicités et PR — nous nous assurons que votre marque est visible là où ça compte.",
        },
        {
          tag: "CRÉATION & PRODUCTION",
          desc: "Design graphique, vidéo, copywriting et contenu visuel qui arrête le scroll et convertit.",
        },
        {
          tag: "RAPPORT TRANSPARENT",
          desc: "Vous recevez des rapports clairs et détaillés. Vous savez exactement ce qui fonctionne et où va votre argent.",
        },
      ],
    },
    serviceCards: [
      { tag: "Stratégie de marque", desc: "Notre IA répond instantanément aux emails, WhatsApp et DMs — sans que vous ayez à lever le petit doigt." },
      { tag: "Campagnes social media", desc: "Les clients prennent rendez-vous seuls, reçoivent des confirmations et rappels — sans intervention humaine." },
      { tag: "Génération de leads", desc: "Vos employés se concentrent sur ce qui compte, pas sur des tâches répétitives automatisables." },
      { tag: "Présence en ligne 360°", desc: "Les automatisations tournent en continu. Les clients reçoivent une réponse même la nuit ou le week-end." },
      { tag: "Création & production", desc: "Voyez en temps réel combien de messages, rendez-vous et leads sont gérés automatiquement pour vous." },
      { tag: "Rapport transparent", desc: "Vous n'avez rien à changer dans votre entreprise. Nous intégrons l'IA dans les outils que vous utilisez déjà." },
    ],
    servicesButton: "Ce Que Nous Faisons Pour Vous",
    about: {
      titleLine1: "Nous travaillons avec des marques qui veulent",
      titleHighlight1: "croître",
      titleLine2: "sérieusement",
      titleHighlight2: "et rapidement",
      p1a: "Valaro est né d'une conviction simple :",
      p1Bold: "le bon marketing change complètement la trajectoire d'une entreprise",
      p1b: "— quelle que soit l'industrie ou la taille.",
      p2a: "Nous apportons une équipe de spécialistes en stratégie, création et performance marketing, travaillant comme votre département interne.",
      p2Bold: "Sans intermédiaires, sans bureaucratie.",
    },
    contact: {
      title: "Faisons grandir votre marque",
      tipCerere: "Type de demande",
      selecteaza: "Sélectionnez une option",
      optiuni: ["Stratégie de marque & positionnement", "Gestion des réseaux sociaux", "Campagnes Meta & Google Ads", "SEO & content marketing", "Email marketing & automation", "Production vidéo & photo", "Design graphique & identité visuelle", "Marketing d'influence", "Website & landing page", "PR & relations publiques", "Pack personnalisé"],
      despretine: "À votre sujet",
      prenume: "Prénom",
      nume: "Nom",
      email: "Adresse email",
      telefon: "Téléphone",
      business: "Business",
      mesaj: "Message",
      trimite: "Envoyer via WhatsApp",
      hint: "En appuyant sur le bouton, vous serez redirigé vers WhatsApp avec le message complété.",
      required: "*",
      back: "Retour",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Nos projets parlent d'eux-mêmes.",
      comingSoon: "Bientôt disponible",
      comingDesc: "Nous travaillons sur quelque chose d'exceptionnel. Revenez bientôt pour découvrir nos projets.",
      back: "Retour",
    },
    serviciiPage: {
      title: "Ce que nous automatisons pour vous.",
      subtitle: "Quel que soit votre type d'entreprise, nous avons l'automatisation parfaite.",
      cta: "Demander un devis",
      items: [
        "Stratégie de marque & positionnement",
        "Gestion des réseaux sociaux",
        "Campagnes Meta & Google Ads",
        "SEO & content marketing",
        "Email marketing & automation",
        "Production vidéo & photo",
        "Design graphique & identité visuelle",
        "Marketing d'influence",
        "Website & landing page",
        "PR & relations publiques",
        "Pack personnalisé",
      ],
    },
    footer: {
      heading: "Construisons\nquelque chose d'extraordinaire",
      copyright: "© 2026 Valaro. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
    },
  },
  nl: {
    nav: {
      servicii: "Diensten",
      portofoliu: "Portfolio",
      despreNoi: "Over ons",
      contact: "Contact",
      langLabel: "Deutsch",
    },
    hero: {
      title: "VALARO",
      subtitle: "Wij laten gedurfde merken groeien. Van strategie tot uitvoering bouwen wij campagnes die echte resultaten opleveren — niet alleen impressies.",
      cta: "Ontdek onze diensten",
    },
    services: {
      sectionTitle: "Wat we doen",
      items: [
        {
          tag: "MERKSTRATEGIE",
          desc: "Wij bouwen een sterke, memorabele en consistente merkidentiteit — die direct spreekt tot uw publiek.",
        },
        {
          tag: "SOCIAL MEDIA CAMPAGNES",
          desc: "Boeiende content, betaalde advertenties en volledig beheer van uw sociale kanalen.",
        },
        {
          tag: "LEADGENERATIE",
          desc: "Wij trekken gekwalificeerde potentiële klanten aan via geteste en constant geoptimaliseerde marketingfunnels.",
        },
        {
          tag: "360° ONLINE AANWEZIGHEID",
          desc: "Website, SEO, advertenties en PR — wij zorgen ervoor dat uw merk zichtbaar is waar het telt.",
        },
        {
          tag: "CREATIE & PRODUCTIE",
          desc: "Grafisch ontwerp, video, copywriting en visuele content die de scroll stopt en converteert.",
        },
        {
          tag: "TRANSPARANTE RAPPORTAGE",
          desc: "U ontvangt duidelijke en gedetailleerde rapporten. U weet precies wat werkt en waar uw geld naartoe gaat.",
        },
      ],
    },
    serviceCards: [
      { tag: "Merkstrategie", desc: "Onze AI reageert direct op e-mails, WhatsApp en DMs — zonder dat u een vinger hoeft uit te steken." },
      { tag: "Social media campagnes", desc: "Klanten boeken zelf, ontvangen bevestigingen en herinneringen — alles zonder menselijke tussenkomst." },
      { tag: "Leadgeneratie", desc: "Uw medewerkers focussen op wat telt, niet op repetitieve taken die geautomatiseerd kunnen worden." },
      { tag: "360° online aanwezigheid", desc: "Automatiseringen draaien non-stop. Klanten krijgen antwoord, zelfs 's nachts of in het weekend." },
      { tag: "Creatie & productie", desc: "Zie in realtime hoeveel berichten, afspraken en leads automatisch voor u worden beheerd." },
      { tag: "Transparante rapportage", desc: "U hoeft niets te veranderen in uw bedrijf. Wij integreren AI in de tools die u al gebruikt." },
    ],
    servicesButton: "Wat Wij Voor U Doen",
    about: {
      titleLine1: "We werken met merken die willen",
      titleHighlight1: "serieus groeien",
      titleLine2: "",
      titleHighlight2: "en snel",
      p1a: "Valaro is geboren uit een simpele overtuiging:",
      p1Bold: "goede marketing verandert volledig de koers van een bedrijf",
      p1b: "— ongeacht industrie of omvang.",
      p2a: "We brengen een team van specialisten in strategie, creatie en performance marketing, werkend als uw interne afdeling.",
      p2Bold: "Geen tussenpersonen, geen bureaucratie.",
    },
    contact: {
      title: "Laten we uw merk laten groeien",
      tipCerere: "Type aanvraag",
      selecteaza: "Selecteer een optie",
      optiuni: ["Merkstrategie & positionering", "Social media management", "Meta & Google Ads campagnes", "SEO & content marketing", "E-mail marketing & automation", "Video- & fotoproductie", "Grafisch ontwerp & visuele identiteit", "Influencer marketing", "Website & landing page", "PR & public relations", "Gepersonaliseerd pakket"],
      despretine: "Over u",
      prenume: "Voornaam",
      nume: "Achternaam",
      email: "E-mailadres",
      telefon: "Telefoon",
      business: "Bedrijf",
      mesaj: "Bericht",
      trimite: "Verzenden via WhatsApp",
      hint: "Door op de knop te drukken, wordt u doorgestuurd naar WhatsApp met het ingevulde bericht.",
      required: "*",
      back: "Terug",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Onze projecten spreken voor zich.",
      comingSoon: "Binnenkort beschikbaar",
      comingDesc: "We werken aan iets uitzonderlijks. Kom snel terug om onze projecten te ontdekken.",
      back: "Terug",
    },
    serviciiPage: {
      title: "Wat wij voor u automatiseren.",
      subtitle: "Ongeacht uw type bedrijf, wij hebben de perfecte automatisering.",
      cta: "Offerte aanvragen",
      items: [
        "Merkstrategie & positionering",
        "Social media management",
        "Meta & Google Ads campagnes",
        "SEO & content marketing",
        "E-mail marketing & automation",
        "Video- & fotoproductie",
        "Grafisch ontwerp & visuele identiteit",
        "Influencer marketing",
        "Website & landing page",
        "PR & public relations",
        "Gepersonaliseerd pakket",
      ],
    },
    footer: {
      heading: "Laten we iets\nbuitengewoons bouwen",
      copyright: "© 2026 Valaro. Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ro");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
