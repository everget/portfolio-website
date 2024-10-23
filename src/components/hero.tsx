'use client';

import { Button } from '@/components/ui/button';
import { type TranslationsObject, useLanguage } from '@/providers/language-provider';
import Image from 'next/image';

export default function Hero() {
	const { language } = useLanguage();

	const content: TranslationsObject = {
		en: {
			greeting: "Hi, I'm Alex",
			title: 'Full Stack Web Developer',
			description: 'I create modern web applications with cutting-edge technologies.',
			cta: 'View My Work',
		},
		es: {
			greeting: 'Hola, soy Alex',
			title: 'Desarrollador Web Full Stack',
			description: 'Creo aplicaciones web modernas con tecnologías de vanguardia.',
			cta: 'Ver Mi Trabajo',
		},
		pt: {
			greeting: 'Olá, eu sou Alex',
			title: 'Desenvolvedor Web Full Stack',
			description: 'Eu crio aplicações web modernas com tecnologias de ponta.',
			cta: 'Ver Meu Trabalho',
		},
		ru: {
			greeting: 'Привет, я Алекс',
			title: 'Full Stack Веб-разработчик',
			description:
				'Я создаю современные веб-приложения с использованием передовых технологий.',
			cta: 'Посмотреть Мои Работы',
		},
		ua: {
			greeting: 'Привіт, я Алекс',
			title: 'Full Stack Веб-розробник',
			description: 'Я створюю сучасні веб-додатки з використанням передових технологій.',
			cta: 'Переглянути Мої Роботи',
		},
	};

	return (
		<section
			id='home'
			className='py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'
		>
			<div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-center'>
				<div className=''>
					<Image
						src='/me.jpg'
						alt='Alex'
						width={200}
						height={200}
						className='rounded-full shadow-lg'
					/>
				</div>
				<div className='mt-8 text-center md:ml-10 md:mt-0 md:text-left'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						{content[language].greeting}
					</h1>
					<h2 className='text-2xl md:text-3xl mb-4'>{content[language].title}</h2>
					<p className='text-xl mb-8'>{content[language].description}</p>
					<Button size='lg' asChild>
						<a href='#projects'>{content[language].cta}</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
