'use client';

import { type TranslationsObject, useLanguage } from '@/components/language-provider';
import { useEffect, useState } from 'react';

export default function Clock() {
	const [time, setTime] = useState(new Date());
	const { language } = useLanguage();

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const content: TranslationsObject = {
		en: {
			localTime: 'Local time (São Paulo, Brazil):',
		},
		es: {
			localTime: 'Hora local (São Paulo, Brasil):',
		},
		pt: {
			localTime: 'Hora local (São Paulo, Brasil):',
		},
		ru: {
			localTime: 'Местное время (Сан-Паулу, Бразилия):',
		},
		ua: {
			localTime: 'Місцевий час (Сан-Паулу, Бразилія):',
		},
	};

	return (
		<div className='text-sm'>
			<p>{content[language].localTime}</p>
			<p className='font-mono'>
				{time.toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo' })}
			</p>
		</div>
	);
}
