'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/providers/language-provider';
import { Code, Layers, Server } from 'lucide-react';

const servicesData = [
	{
		icon: Code,
		title: {
			en: 'Frontend Development',
			es: 'Desarrollo Frontend',
			pt: 'Desenvolvimento Frontend',
			ru: 'Фронтенд Разработка',
			ua: 'Фронтенд Розробка',
		},
		description: {
			en: 'Creating responsive and interactive user interfaces using modern frameworks and libraries',
			es: 'Creación de interfaces de usuario responsivas e interactivas utilizando frameworks y bibliotecas modernas',
			pt: 'Criação de interfaces de usuário responsivas e interativas usando frameworks e bibliotecas modernas',
			ru: 'Создание отзывчивых и интерактивных пользовательских интерфейсов с использованием современных фреймворков и библиотек',
			ua: 'Створення адаптивних та інтерактивних користувацьких інтерфейсів з використанням сучасних фреймворків та бібліотек',
		},
	},
	{
		icon: Server,
		title: {
			en: 'Backend Development',
			es: 'Desarrollo Backend',
			pt: 'Desenvolvimento Backend',
			ru: 'Бэкенд Разработка',
			ua: 'Бекенд Розробка',
		},
		description: {
			en: 'Building robust server-side applications and APIs to power your web applications',
			es: 'Construcción de aplicaciones robustas del lado del servidor y APIs para potenciar sus aplicaciones web',
			pt: 'Construção de aplicações robustas do lado do servidor e APIs para alimentar suas aplicações web',
			ru: 'Создание надежных серверных приложений и API для обеспечения работы ваших веб-приложений',
			ua: 'Створення надійних серверних додатків та API для забезпечення роботи ваших веб-додатків',
		},
	},
	{
		icon: Layers,
		title: {
			en: 'Full Stack Solutions',
			es: 'Soluciones Full Stack',
			pt: 'Soluções Full Stack',
			ru: 'Полный Стек Решений',
			ua: 'Повний Стек Рішень',
		},
		description: {
			en: 'Providing end-to-end web development solutions from concept to deployment',
			es: 'Proporcionando soluciones de desarrollo web de principio a fin, desde el concepto hasta la implementación',
			pt: 'Fornecendo soluções de desenvolvimento web de ponta a ponta, do conceito à implantação',
			ru: 'Предоставление комплексных решений веб-разработки от концепции до развертывания',
			ua: 'Надання комплексних рішень веб-розробки від концепції до розгортання',
		},
	},
];

export default function Services() {
	const { language } = useLanguage();

	const content = {
		en: {
			title: 'Services I offer',
		},
		es: {
			title: 'Servicios que ofrezco',
		},
		pt: {
			title: 'Serviços que ofereço',
		},
		ru: {
			title: 'Предлагаемые услуги',
		},
		ua: {
			title: 'Послуги, які я пропоную',
		},
	};

	return (
		<section className='py-20 bg-gray-100 dark:bg-gray-800'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>{content[language].title}</h2>
				<div className='grid md:grid-cols-3 gap-8 sm:text-center text-left'>
					{servicesData.map((service, index) => (
						<Card key={index}>
							<CardHeader className='flex-row items-center justify-center'>
								<service.icon className='h-12 w-12' />
								<CardTitle className='ml-2'>{service.title[language]}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>{service.description[language]}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
