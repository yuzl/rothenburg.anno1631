import React from 'react';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronDown,
  Sword,
  Shield,
  Crown,
  BookOpen,
  Mail,
  Phone,
  Divide,
  Timer,
  Languages,
  UserCheck,
  Theater,
} from 'lucide-react';
import { content } from '../content/landing-page-content';

const LandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
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
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="medieval-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Image with Vignette */}
        <div
          className="vignette absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/rothenburg.anno1631/bg-hero.png)' }}
        />

        {/* Semi-transparent overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(155, 126, 68, 0.1)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-in">
            <h1
              className="mb-8 leading-none font-bold md:mb-12"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              <div className="text-3xl md:text-5xl lg:text-6xl">{content.hero.headline.part1}</div>
              <div className="text-5xl md:text-7xl lg:text-8xl" style={{ color: '#c3a86b' }}>
                {content.hero.headline.part2}
              </div>
            </h1>
            <h2
              className="mb-2 font-semibold text-lg md:text-xl lg:text-2xl"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'EB Garamond, Garamond, serif',
              }}
            >
              {content.hero.subheadline}
            </h2>
            <p
              className="mx-auto mb-12 max-w-3/4 lg:max-w-3xl text-md leading-relaxed md:text-lg lg:text-xl"
              style={{ color: '#b7ae98' }}
            >
              {content.hero.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('tickets')}
                className="btn-primary group inline-flex cursor-pointer items-center px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                {content.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} style={{ color: '#b7ae98' }}>
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-brand-surface relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div className="mb-16 text-center">
            <h3
              className="mb-6 text-3xl font-bold md:text-4xl"
              style={{
                color: '#e9e6dc',
                fontFamily: 'EB Garamond, Garamond, serif',
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
          <div className="mb-16 text-center">
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
          <div className="mb-20">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  <p
                    className="text-base leading-relaxed md:text-lg"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {feature.split(':').map((part, partIndex) => {
                      if (partIndex === 0) {
                        return (
                          <div
                            key={partIndex}
                            className="text-base font-bold"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {part}:
                          </div>
                        );
                      }
                      return part;
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-brand-bg relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.experience.headline}
            </h2>
            <p className="mx-auto max-w-3xl text-xl" style={{ color: '#b7ae98' }}>
              {content.experience.description}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
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
                  <div className="relative aspect-[3/4]">
                    {scene.image ? (
                      <img
                        src={scene.image}
                        alt={scene.alt}
                        className="h-full w-full object-cover"
                        onError={e => {
                          console.error(`Failed to load image: ${scene.image}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
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
                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <h3
                        className="mb-3 text-2xl font-bold drop-shadow-lg"
                        style={{
                          color: '#e9e6dc',
                          fontFamily: 'EB Garamond, Garamond, serif',
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        }}
                      >
                        {scene.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed font-medium drop-shadow-lg"
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
      <section id="tickets" className="bg-brand-surface relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.tickets.headline}
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: '#b7ae98' }}>
              {content.tickets.description}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
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
                  <div className="mb-6 grid grid-cols-2 gap-4">
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
                      <div className="mt-1 text-xs" style={{ color: '#b7ae98' }}>
                        {content.tickets.priceComparison}
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
                      className="rounded-lg p-4 text-center mb-8"
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

            <div className="mt-12 text-center">
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
                  <div className="flex items-center justify-center gap-2">
                    <span>📞</span>
                    <span className="text-sm font-medium" style={{ color: '#e9e6dc' }}>
                      {content.tickets.contact.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-bg relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-rise">
              <h2
                className="mb-8 text-4xl font-bold md:text-5xl"
                style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
              >
                {content.team.headline}
              </h2>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: '#b7ae98' }}>
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
                  {content.team.image ? (
                    <img
                      src={content.team.image}
                      alt={content.team.alt}
                      className="h-full w-full object-cover"
                      onError={e => {
                        console.error(`Failed to load team image: ${content.team.image}`);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Show placeholder if image fails to load
                        const placeholder = target.parentElement?.querySelector(
                          '.placeholder'
                        ) as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback placeholder */}
                  <div
                    className={`placeholder ${content.team.image ? 'hidden' : 'flex'} h-full w-full items-center justify-center`}
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

      {/* Footer */}
      <footer
        className="relative z-10 border-t py-12"
        style={{ backgroundColor: '#0f0e0c', borderColor: '#2a261f' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-lg" style={{ color: '#e9e6dc' }}>
              {content.footer.projectInfo}
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 text-sm sm:gap-8"
              style={{ color: '#b7ae98' }}
            >
              <a
                href="https://www.meistertrunk.de/de/"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Verein
              </a>
              <a
                href="https://maps.app.goo.gl/UqfXKebC2SzRLZGv8"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Museum
              </a>
              <a
                href="https://www.meistertrunk.de/de/hist-festspiel/"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Pfingstfestspiele
              </a>
              <a
                href="https://www.meistertrunk.de/de/impressum/"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
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
