import SliderCards from "@/app/components/SliderCards";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>

      {/* Slider */}
      <section className="overflow-hidden max-w-[1920px] m-auto bg-bgLight">
        <div className="myContainer max-w-screen-xl m-auto space-y-8 lg:space-y-16 lg:pb-[70px]">
          <div className="text-center">
            <h2 className="h2 text-mainBlue">
              (H)eritage un Magazine dédié aux acteurs de l&apos;esthétique
            </h2>
            <h3 className="h3 mt-2 lg:mt-4">
              L&apos;innovation au service de l&apos;excellence médicale
            </h3>
          </div>

          <SliderCards />
        </div>
      </section>
    </>
  );
}
