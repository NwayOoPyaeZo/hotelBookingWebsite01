const BASE_LOCALES = [
  {
    code: "en",
    language: "English",
    currency: "USD",
    countryCode: "US",
  },
  {
    code: "jp",
    language: "日本語",
    currency: "JPY",
    countryCode: "JP",
  },
  {
    code: "th",
    language: "ไทย",
    currency: "THB",
    countryCode: "TH",
  },
];

let cachedLocales = null;

export const getLocales = async () => {
  if (cachedLocales) return cachedLocales;

  const locales = await Promise.all(
    BASE_LOCALES.map(async (loc) => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${loc.countryCode}?fields=flags`,
        );
        const data = await res.json();
        return {
          ...loc,
          flag: data?.flags?.svg || "",
        };
      } catch (e) {
        return {
          ...loc,
          flag: "",
        };
      }
    }),
  );

  cachedLocales = locales;
  return locales;
};

export const getLocale = async () => {
  const stored = localStorage.getItem("locale");
  if (stored) return JSON.parse(stored);

  const locales = await getLocales();
  const defaultLocale = locales[0];

  localStorage.setItem("locale", JSON.stringify(defaultLocale));
  return defaultLocale;
};

export const getCountryFlag = async (countryCode) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags`,
    );
    const data = await res.json();
    return data?.flags?.svg || "";
  } catch (e) {
    console.error(`Error fetching flag for ${countryCode}:`, e);
    return "";
  }
};
