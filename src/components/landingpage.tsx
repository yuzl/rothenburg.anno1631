import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Users,
  ChevronDown,
  Shield,
  BookOpen,
  Timer,
  Languages,
  UserCheck,
  Theater,
} from 'lucide-react';
import { content } from '../content/landing-page-content';

const LandingPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const scrollToSection = (sectionId: string) => {
    if (!isClient) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleBooking = () => {
    if (!isClient) return;

    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="medieval-bg space-y-12">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden md:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[1px] brightness-75 sepia-25"
          style={{ backgroundImage: 'url(/rothenburg.anno1631/bg-hero.jpg)' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-in flex flex-col items-center justify-center gap-16">
            <h1
              className="flex flex-col gap-6 leading-none font-bold tracking-tighter"
              style={{ color: '#e9e6dc' }}
            >
              <span className="unifrakturcook-bold text-6xl font-bold text-shadow-black/20 text-shadow-lg md:text-7xl lg:text-[10rem]">
                Rothenburg
              </span>
              <span className="text-xl font-light tracking-widest uppercase md:text-3xl">
                Anno 1631
              </span>
            </h1>
            <div
              className="animate-in flex max-w-2xl flex-col gap-2 text-xl text-shadow-black/20 text-shadow-lg"
              style={{ color: '#e9e6dc' }}
            >
              <h2 className="text-2xl font-bold">Unser Museum wird zur Bühne</h2>
              <p>
                Frauen kämpfen um ihre Familien, Soldaten marschieren, der Rat ringt um
                Entscheidungen. Erleben Sie Szenen des Dreißigjährigen Krieges hautnah – interaktiv,
                authentisch, bewegend.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            style={{ backgroundColor: 'var(--color-brand-accent)' }}
            className="cursor-pointer rounded-full p-2"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-brand-surface relative z-10 py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {/* Headline */}
          <div className="mb-12 text-center sm:mb-16">
            <h3
              className="mb-6 text-3xl font-bold md:text-4xl"
              style={{
                color: '#e9e6dc',
              }}
            >
              {content.about.headline}
            </h3>
            <div
              className="mx-auto h-1 w-24 rounded-full"
              style={{ backgroundColor: '#27384a' }}
            ></div>
          </div>

          {/* Description Text */}
          <div className="mb-12 text-center sm:mb-16">
            <p
              className="mx-auto max-w-4xl text-lg leading-relaxed font-medium sm:text-xl md:text-2xl"
              style={{
                color: '#c8bfa8',
                lineHeight: '1.7',
              }}
            >
              {content.about.description.split('**').map((part, index) => {
                if (index % 2 === 1) {
                  // Odd indices are the bold parts
                  return (
                    <span
                      key={index}
                      className="font-bold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {part}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          </div>

          {/* Hero Image Card */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,.4)',
              }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <img
                  src={content.about.image}
                  alt={content.about.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.about.features.map((feature, index) => {
              // Define fitting icons for each benefit
              const icons = [
                <Users key="users" className="h-6 w-6" style={{ color: '#e9e6dc' }} />, // Interaktive Szenen
                <Shield key="shield" className="h-6 w-6" style={{ color: '#e9e6dc' }} />, // Authentische Darstellung
                <BookOpen key="book" className="h-6 w-6" style={{ color: '#e9e6dc' }} />, // Historischer Kontext
                <MapPin key="map" className="h-6 w-6" style={{ color: '#e9e6dc' }} />, // Museum als Bühne
              ];

              return (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: '#27384a',
                        boxShadow: '0 8px 32px rgba(39, 56, 74, 0.3)',
                      }}
                    >
                      {icons[index]}
                    </div>
                  </div>
                  <div
                    className="text-base leading-relaxed md:text-lg"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {feature.split(':').map((part, partIndex) => {
                      if (partIndex === 0) {
                        return (
                          <div
                            key={partIndex}
                            className="mb-1 text-base font-bold"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {part}:
                          </div>
                        );
                      }
                      return <span key={partIndex}>{part}</span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-brand-bg relative z-10 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2
              className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: '#e9e6dc' }}
            >
              {content.experience.headline}
            </h2>
            <p className="mx-auto max-w-3xl text-lg sm:text-xl" style={{ color: '#b7ae98' }}>
              {content.experience.description}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.experience.scenes.map((scene, index) => {
              const IconComponent = scene.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,.4)',
                  }}
                >
                  <div className="relative aspect-square sm:aspect-[3/4]">
                    {scene.image && !imageErrors[`experience-${scene.image}`] ? (
                      <img
                        src={scene.image}
                        alt={scene.alt}
                        className="h-full w-full object-cover"
                        onError={() => handleImageError(`experience-${scene.image}`)}
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ backgroundColor: '#141310' }}
                      >
                        <IconComponent className="h-16 w-16" style={{ color: '#c3a86b' }} />
                      </div>
                    )}

                    {/* Enhanced gradient overlay for better text readability */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 90%, transparent 100%)',
                      }}
                    />

                    {/* Text overlay with improved styling */}
                    <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-6">
                      <h3
                        className="mb-2 text-xl font-bold drop-shadow-lg sm:mb-3 sm:text-2xl"
                        style={{
                          color: '#e9e6dc',
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        }}
                      >
                        {scene.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed font-medium drop-shadow-lg sm:text-base"
                        style={{
                          color: '#c8bfa8',
                          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                          lineHeight: '1.6',
                        }}
                      >
                        {scene.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section id="tickets" className="bg-brand-surface relative z-10 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2
              className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: '#e9e6dc' }}
            >
              {content.tickets.headline}
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg" style={{ color: '#b7ae98' }}>
              {content.tickets.description}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {/* Ticket Info Card */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: '#141310',
                  border: '1px solid #2a261f',
                  boxShadow: '0 10px 30px rgba(0,0,0,.3)',
                }}
              >
                <div
                  className="p-6 text-center"
                  style={{
                    backgroundColor: '#27384a',
                    color: '#e9e6dc',
                  }}
                >
                  <h3 className="text-xl font-bold">Veranstaltungsdetails</h3>
                </div>
                <div className="p-6">
                  <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {content.tickets.info.map((info, index) => {
                      const icons = [
                        <Timer key="timer" className="h-6 w-6" style={{ color: '#e9e6dc' }} />,
                        <Languages
                          key="languages"
                          className="h-6 w-6"
                          style={{ color: '#e9e6dc' }}
                        />,
                        <UserCheck
                          key="usercheck"
                          className="h-6 w-6"
                          style={{ color: '#e9e6dc' }}
                        />,
                        <Theater key="theater" className="h-6 w-6" style={{ color: '#e9e6dc' }} />,
                      ];

                      return (
                        <div
                          key={index}
                          className="rounded-lg p-4 text-center"
                          style={{ backgroundColor: '#1b1915' }}
                        >
                          <div className="mb-3 flex justify-center">{icons[index]}</div>
                          <div className="text-sm" style={{ color: '#b7ae98' }}>
                            {info.label}
                          </div>
                          <div className="font-semibold" style={{ color: '#e9e6dc' }}>
                            {info.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-3">
                    <h4 className="mb-3 font-semibold" style={{ color: '#e9e6dc' }}>
                      Im Erlebnis enthalten:
                    </h4>
                    {content.tickets.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: '#c3a86b' }}
                        ></div>
                        <span className="text-sm" style={{ color: '#b7ae98' }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: '#141310',
                  border: '1px solid #2a261f',
                  boxShadow: '0 10px 30px rgba(0,0,0,.3)',
                }}
              >
                <div
                  className="p-6 text-center"
                  style={{
                    backgroundColor: '#27384a',
                    color: '#e9e6dc',
                  }}
                >
                  <h3 className="text-xl font-bold">Jetzt Tickets buchen</h3>
                </div>
                <div className="p-6">
                  <div className="text-md mb-2 font-medium" style={{ color: '#c3a86b' }}>
                    {content.tickets.discountLabel}
                  </div>
                  <div
                    className="mb-8 rounded-lg p-4 text-center"
                    style={{ backgroundColor: '#1b1915' }}
                  >
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <div
                          className="text-xl font-bold line-through"
                          style={{ color: '#b7ae98' }}
                        >
                          {content.tickets.regularPrice}
                        </div>
                        <div className="text-3xl font-bold" style={{ color: '#c3a86b' }}>
                          {content.tickets.discountedPrice}
                        </div>
                      </div>
                      <div className="text-sm" style={{ color: '#b7ae98' }}>
                        {content.tickets.priceLabel}
                      </div>
                      <div
                        className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: '#27384a', color: '#e9e6dc' }}
                      >
                        {content.tickets.availability}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-md font-medium" style={{ color: '#c3a86b' }}>
                      {content.tickets.upcomingShowsLabel}
                    </div>
                    <div
                      className="mb-8 rounded-lg p-4 text-center"
                      style={{ backgroundColor: '#1b1915' }}
                    >
                      <div className="space-y-4">
                        {content.tickets.upcomingShows.map((show, index) => (
                          <div key={index}>
                            <div
                              className="mb-2 text-lg font-semibold"
                              style={{ color: '#e9e6dc' }}
                            >
                              {show.date}
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                              {show.timeSlots.map((timeSlot, timeIndex) => (
                                <div
                                  key={timeIndex}
                                  className="rounded px-3 py-1 text-xs font-medium"
                                  style={{ backgroundColor: '#27384a', color: '#e9e6dc' }}
                                >
                                  {timeSlot}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBooking()}
                      className="w-full cursor-pointer text-lg font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: '#c3a86b',
                        color: '#0f0e0c',
                        borderRadius: '12px',
                        padding: '16px 20px',
                      }}
                    >
                      {content.tickets.primaryButton}
                    </button>

                    <button
                      className="w-full cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        border: '1px solid #c3a86b',
                        color: '#c3a86b',
                        borderRadius: '12px',
                        padding: '12px 20px',
                        fontWeight: '600',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {content.tickets.secondaryButton}
                    </button>

                    <div className="pt-4 text-center text-sm" style={{ color: '#b7ae98' }}>
                      {content.tickets.trustInfo}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center sm:mt-12">
              <div
                className="rounded-lg border p-6"
                style={{
                  backgroundColor: 'rgba(39, 56, 74, 0.1)',
                  borderColor: 'rgba(39, 56, 74, 0.3)',
                }}
              >
                <h3 className="mb-3 text-lg font-semibold" style={{ color: '#e9e6dc' }}>
                  {content.tickets.contact.title}
                </h3>
                <p className="mb-4" style={{ color: '#b7ae98' }}>
                  {content.tickets.contact.description}
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <div className="flex items-center justify-center gap-2">
                    <span>📧</span>
                    <span className="text-sm font-medium" style={{ color: '#e9e6dc' }}>
                      {content.tickets.contact.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-bg relative z-10 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-rise">
              <h2
                className="mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl"
                style={{ color: '#e9e6dc' }}
              >
                {content.team.headline}
              </h2>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: '#b7ae98' }}
              >
                {content.team.description}
              </p>
              <div className="space-y-4">
                {content.team.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className="mt-3 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#c3a86b' }}
                    ></div>
                    <p style={{ color: '#b7ae98' }}>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-rise" style={{ animationDelay: '200ms' }}>
              <div
                className="relative overflow-hidden rounded-xl"
                style={{
                  boxShadow: '0 10px 30px rgba(0,0,0,.35)',
                }}
              >
                <div className="relative aspect-square">
                  {content.team.image && !imageErrors[`team-${content.team.image}`] ? (
                    <img
                      src={content.team.image}
                      alt={content.team.alt}
                      className="h-full w-full object-cover"
                      onError={() => handleImageError(`team-${content.team.image}`)}
                    />
                  ) : null}

                  {/* Fallback placeholder */}
                  <div
                    className={`placeholder ${content.team.image && !imageErrors[`team-${content.team.image}`] ? 'hidden' : 'flex'} h-full w-full items-center justify-center`}
                    style={{
                      backgroundColor: '#1b1915',
                      border: '1px solid #2a261f',
                    }}
                  >
                    <p className="font-medium" style={{ color: '#c3a86b' }}>
                      {content.team.placeholderText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="bg-brand-surface relative z-10 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <h2
              className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl"
              style={{ color: '#e9e6dc' }}
            >
              {content.partners.headline}
            </h2>
            <div
              className="mx-auto h-1 w-20 rounded-full sm:w-24"
              style={{ backgroundColor: '#27384a' }}
            ></div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.partners.partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105"
                  >
                    <div
                      className="flex h-30 w-50 items-center justify-center overflow-hidden rounded-lg"
                      style={{
                        backgroundColor: '#fff',
                        border: '1px solid #2a261f',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                      }}
                    >
                      {partner.image && !imageErrors[`partner-${partner.image}`] ? (
                        <img
                          src={partner.image}
                          alt={partner.alt}
                          className="h-full w-full object-contain p-2"
                          onError={() => handleImageError(`partner-${partner.image}`)}
                        />
                      ) : null}
                      <div
                        className={`text-logo text-2xl font-bold ${partner.image && !imageErrors[`partner-${partner.image}`] ? 'hidden' : 'flex'} h-full w-full items-center justify-center`}
                        style={{ color: '#c3a86b' }}
                      >
                        {partner.logo}
                      </div>
                    </div>
                  </a>
                </div>
                <h3 className="mb-2 text-lg font-semibold" style={{ color: '#e9e6dc' }}>
                  {partner.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#b7ae98' }}>
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-8 sm:py-12"
        style={{ backgroundColor: '#0f0e0c', borderColor: '#2a261f' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-base sm:text-lg" style={{ color: '#e9e6dc' }}>
              {content.footer.projectInfo}
            </p>
            <div
              className="flex flex-wrap justify-center gap-3 text-xs sm:gap-4 sm:text-sm"
              style={{ color: '#b7ae98' }}
            >
              <a
                href="https://www.meistertrunk.de/de/"
                className="hover:text-c3a86b px-3 py-2 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Verein
              </a>
              <a
                href="https://maps.app.goo.gl/UqfXKebC2SzRLZGv8"
                className="hover:text-c3a86b px-3 py-2 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Museum
              </a>
              <a
                href="https://www.meistertrunk.de/de/hist-festspiel/"
                className="hover:text-c3a86b px-3 py-2 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Pfingstfestspiele
              </a>
              <a
                href="https://www.meistertrunk.de/de/impressum/"
                className="hover:text-c3a86b px-3 py-2 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
