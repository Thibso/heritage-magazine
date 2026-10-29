// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;
//   // Validate that the incoming `locale` parameter is valid
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   if (!routing.locales.includes(locale as any)) notFound();

//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });


import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});