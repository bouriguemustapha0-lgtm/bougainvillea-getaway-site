import { SITE, FAQS, AMENITIES } from "./site";

export function lodgingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    name: SITE.name,
    description: SITE.descriptionShort,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    telephone: SITE.phone,
    email: SITE.email,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Piscine extérieure",
        value: true,
      },
      ...AMENITIES.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a.title,
        value: true,
      })),
    ],
    petsAllowed: true,
    servesCuisine: "Moroccan",
    checkinTime: "14:00",
    checkoutTime: "11:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      bestRating: SITE.rating.scale,
      ratingCount: SITE.rating.count,
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
