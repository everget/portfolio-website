'use client';

import { type TranslationsObject, useLanguage } from '@/components/language-provider';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function TimeUnit({ label, value }: { label: string; value: string }) {
	return (
		<div className='flex flex-col items-center'>
			<div className='text-center text-4xl font-bold bg-gray-100 dark:bg-gray-700 w-20 px-3 py-2 rounded'>
				{value}
			</div>
			<div className='text-xs text-gray-500 dark:text-gray-400 mt-1'>{label}</div>
		</div>
	);
}

const formatTime = (date: Date) => {
	return {
		hours: date.getHours().toString().padStart(2, '0'),
		minutes: date.getMinutes().toString().padStart(2, '0'),
		seconds: date.getSeconds().toString().padStart(2, '0'),
		ampm: date.getHours() >= 12 ? 'PM' : 'AM',
	};
};

const formatDate = (date: Date) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return `${days[date.getDay()]}, ${date.getDate()}`;
};

export default function Clock() {
	const [time, setTime] = useState(new Date());
	const { language } = useLanguage();
	const { theme } = useTheme();

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

	const { hours, minutes, seconds, ampm } = formatTime(time);

	return (
		<div
			className={`mt-6 p-6 rounded-lg shadow-lg ${
				theme === 'dark' ? 'bg-gray-800' : 'bg-white'
			}`}
		>
			<p className='mb-4'>{content[language].localTime}</p>
			<div className='flex justify-between items-center mb-4'>
				<div className='flex space-x-2'>
					<TimeUnit label='Hours' value={hours} />
					<span className='text-4xl font-bold'>:</span>
					<TimeUnit label='Minutes' value={minutes} />
					<span className='text-4xl font-bold'>:</span>
					<TimeUnit label='Seconds' value={seconds} />
				</div>
				<div className='ml-2 text-xl font-semibold'>{ampm}</div>
			</div>
			<div className='text-center text-gray-500 dark:text-gray-400'>{formatDate(time)}</div>
		</div>
	);
}
