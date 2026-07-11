import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "../lib/site";
import { LanguageProvider } from "../i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-sm">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary text-sm"
          >
            Try again
          </button>
          <a href="/" className="btn-outline text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const defaultTitle = `${SITE.name} | ${SITE.tagline}`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultTitle },
      { name: "description", content: SITE.descriptionShort },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#c33b7a" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: SITE.descriptionShort },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: SITE.descriptionShort },
      { title: "Bougainvilla" },
      { property: "og:title", content: "Bougainvilla" },
      { name: "twitter:title", content: "Bougainvilla" },
      {
        name: "description",
        content:
          "Bougainvilla Retreat is a boutique guesthouse in Mohammedia, Morocco, about 43 km from Casablanca's Mohammed V Airport, featuring an infinity pool and garden.",
      },
      {
        property: "og:description",
        content:
          "Bougainvilla Retreat is a boutique guesthouse in Mohammedia, Morocco, about 43 km from Casablanca's Mohammed V Airport, featuring an infinity pool and garden.",
      },
      {
        name: "twitter:description",
        content:
          "Bougainvilla Retreat is a boutique guesthouse in Mohammedia, Morocco, about 43 km from Casablanca's Mohammed V Airport, featuring an infinity pool and garden.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07ce3b5f-1cf5-4cd4-b6d0-3e8800bb486c/id-preview-7b3aa8f6--c0ee130d-b288-4aa8-9ed7-a0154438e51f.lovable.app-1783600317794.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/07ce3b5f-1cf5-4cd4-b6d0-3e8800bb486c/id-preview-7b3aa8f6--c0ee130d-b288-4aa8-9ed7-a0154438e51f.lovable.app-1783600317794.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
