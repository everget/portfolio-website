'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { type Language, languageNames, useLanguage } from '@/providers/language-provider';
import Image from 'next/image';
import { useState } from 'react';

const flags: Record<Language, string> = {
	en: '🇬🇧',
	es: '🇪🇸',
	pt: '🇧🇷',
	ru: '🇷🇺',
	ua: '🇺🇦',
};

export default function LanguageSelector() {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (newLanguage: Language) => {
		setLanguage(newLanguage);
		setIsOpen(false);
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' className='w-[80px] flex items-center'>
					<Image
						src={`/flags/${language}.svg`}
						alt={`${languageNames[language]}`}
						width={20}
						height={20}
						className='rounded-full'
					/>
					<span className='ml-2 text-lg'>{flags[language]}</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0' align='end'>
				<div className='grid gap-2 p-2 '>
					{Object.entries(languageNames).map(([code, name]) => (
						<Button
							key={code}
							variant='ghost'
							className='w-full justify-start'
							onClick={() => handleLanguageChange(code as Language)}
						>
							<Image
								src={`/flags/${code}.svg`}
								alt={name}
								width={20}
								height={20}
								className='rounded-full'
							/>
							<span className='ml-2'>{name}</span>
						</Button>
					))}
				</div>
			</PopoverContent>
		</Popover>
	);
}
