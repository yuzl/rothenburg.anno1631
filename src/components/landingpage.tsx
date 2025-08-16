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
      {/* Navigation */}
      <nav
        className="fixed top-0 z-50 w-full backdrop-blur-lg"
        style={{
          backgroundColor: 'rgba(15, 14, 12, 0.95)',
          borderBottom: '1px solid rgba(39, 56, 74, 0.3)',
          boxShadow: '0 4px 20px rgba(39, 56, 74, 0.1)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: '#27384a' }}
              >
                <span className="text-sm font-bold" style={{ color: '#e9e6dc' }}>
                  R
                </span>
              </div>
              <h1
                className="text-xl font-semibold"
                style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
              >
                Rothenburg Anno 1631
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('dates')}
                className="relative z-50 cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(180deg, #cbb07a 0%, #b7924d 100%)',
                  color: '#0f0e0c',
                  fontWeight: '600',
                }}
              >
                Termine
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background Image with Vignette */}
        <div
          className="vignette absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/rothenburg.anno1631/bg-hero.png)' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-in">
            <h1
              className="mb-6 text-5xl leading-tight font-bold md:text-7xl lg:text-8xl"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.hero.headline}
            </h1>
            <h2
              className="mb-8 text-2xl font-semibold md:text-3xl lg:text-4xl"
              style={{ color: '#c3a86b', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.hero.subheadline}
            </h2>
            <p
              className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed md:text-xl"
              style={{ color: '#b7ae98' }}
            >
              {content.hero.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('dates')}
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
          <button
            onClick={() => scrollToSection('about')}
            className="text-brand-accent hover:text-brand-accent2 transition-colors"
          >
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
              {content.about.description}
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

      {/* Dates Section */}
      <section id="dates" className="bg-brand-surface relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.dates.headline}
            </h2>
            <p className="text-xl" style={{ color: '#b7ae98' }}>
              {content.dates.description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {content.dates.events.map((event, index) => (
              <div
                key={index}
                className="relative p-8"
                style={{
                  backgroundColor: '#1b1915',
                  border: '1px solid #c3a86b',
                  borderRadius: '14px',
                  boxShadow: '0 10px 30px rgba(0,0,0,.35)',
                }}
              >
                {index === 1 && (
                  <div
                    className="bg-opacity-60 absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    <div className="p-6 text-center">
                      <p className="mb-2 text-lg font-semibold" style={{ color: '#e9e6dc' }}>
                        {content.dates.futureEvents.title}
                      </p>
                      <p className="text-sm" style={{ color: '#b7ae98' }}>
                        {content.dates.futureEvents.description}
                      </p>
                    </div>
                  </div>
                )}
                <h3
                  className="mb-6 text-2xl font-bold"
                  style={{ color: '#c3a86b', fontFamily: 'EB Garamond, Garamond, serif' }}
                >
                  {event.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5" style={{ color: '#c3a86b' }} />
                    <span style={{ color: '#b7ae98' }}>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" style={{ color: '#c3a86b' }} />
                    <span style={{ color: '#b7ae98' }}>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" style={{ color: '#c3a86b' }} />
                    <span style={{ color: '#b7ae98' }}>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#c3a86b' }}
                    >
                      <span className="text-xs font-bold" style={{ color: '#0f0e0c' }}>
                        €
                      </span>
                    </div>
                    <span className="font-semibold" style={{ color: '#e9e6dc' }}>
                      {event.price}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleBooking()}
                  className="mt-8 w-full cursor-pointer transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(180deg, #cbb07a 0%, #b7924d 100%)',
                    color: '#0f0e0c',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                  }}
                >
                  {content.dates.bookingButton}
                </button>
              </div>
            ))}
          </div>

          {/* Booking Information */}
          <div
            className="mt-16 rounded-xl p-8"
            style={{
              backgroundColor: '#1b1915',
              border: '1px solid #2a261f',
              boxShadow: '0 10px 30px rgba(0,0,0,.35)',
            }}
          >
            <h3
              className="mb-6 text-center text-2xl font-bold"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.dates.bookingLabels.title}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6" style={{ color: '#c3a86b' }} />
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.dates.bookingLabels.groupSize}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.dates.booking.maxGroup}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6" style={{ color: '#c3a86b' }} />
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.dates.bookingLabels.duration}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.dates.booking.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#c3a86b' }}
                >
                  <span className="text-xs font-bold" style={{ color: '#0f0e0c' }}>
                    D
                  </span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.dates.bookingLabels.language}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.dates.booking.language}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#c3a86b' }}
                >
                  <span className="text-xs font-bold" style={{ color: '#0f0e0c' }}>
                    8+
                  </span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.dates.bookingLabels.age}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.dates.booking.ageRecommendation}</p>
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

      {/* Contact Section */}
      <section id="contact" className="bg-brand-surface relative z-10 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ color: '#e9e6dc', fontFamily: 'EB Garamond, Garamond, serif' }}
            >
              {content.contact.headline}
            </h2>
            <p className="mx-auto max-w-3xl text-xl" style={{ color: '#b7ae98' }}>
              {content.contact.description}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: '#27384a',
                    boxShadow: '0 8px 32px rgba(39, 56, 74, 0.3)',
                  }}
                >
                  <Mail className="h-6 w-6" style={{ color: '#e9e6dc' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.contact.labels.email}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: '#27384a',
                    boxShadow: '0 8px 32px rgba(39, 56, 74, 0.3)',
                  }}
                >
                  <Phone className="h-6 w-6" style={{ color: '#e9e6dc' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.contact.labels.phone}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: '#27384a',
                    boxShadow: '0 8px 32px rgba(39, 56, 74, 0.3)',
                  }}
                >
                  <MapPin className="h-6 w-6" style={{ color: '#e9e6dc' }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e9e6dc' }}>
                    {content.contact.labels.address}
                  </p>
                  <p style={{ color: '#b7ae98' }}>{content.contact.info.address}</p>
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
                href="#"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Verein
              </a>
              <a
                href="#"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Museum
              </a>
              <a
                href="#"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Pfingstfestspiele
              </a>
              <a
                href="#"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Impressum
              </a>
              <a
                href="#"
                className="hover:text-c3a86b px-2 py-1 transition-colors"
                style={{ color: '#b7ae98' }}
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
