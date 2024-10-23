'use client';

import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'es' | 'pt' | 'ru' | 'ua';
export type TranslationsObject = Record<Language, Record<string, string>>;

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languageNames: Record<Language, string> = {
	en: 'English',
	es: 'Español',
	pt: 'Português',
	ru: 'Русский',
	ua: 'Українська',
};

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>('en');

	useEffect(() => {
		const userLanguage = navigator.language.split('-')[0] as Language;
		if (Object.keys(languageNames).includes(userLanguage)) {
			setLanguage(userLanguage);
		}
	}, []);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
