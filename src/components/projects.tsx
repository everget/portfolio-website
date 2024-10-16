'use client';

import {
	type Language,
	type TranslationsObject,
	useLanguage,
} from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export interface IProjectData {
	title: Record<Language, string>;
	description: Record<Language, string>;
	image: string;
	techstack: { name: string; icon?: string }[];
	liveLink: string;
	githubLink: string;
}

// {
// 	title: {
// 		en: '',
// 		es: '',
// 		pt: '',
// 		ru: '',
// 		ua: '',
// 	},
// 	description: {
// 		en: '',
// 		es: '',
// 		pt: '',
// 		ru: '',
// 		ua: '',
// 	},
// 	image: '/placeholder-300x200.svg',
// 	techstack: [],
// 	liveLink: '',
// 	githubLink: '',
// }

const projectsData: IProjectData[] = [
	{
		title: {
			en: 'Portfolio Website',
			es: '',
			pt: '',
			ru: '',
			ua: '',
		},
		description: {
			en: 'A little recursion to spice up your UX :)',
			es: '',
			pt: '',
			ru: '',
			ua: '',
		},
		image: '/projects/portfolio-website.png',
		techstack: [
			{ name: 'TypeScript', icon: '/techstack/typescript.svg' },
			{ name: 'Next.js', icon: '/techstack/nextjs.svg' },
			{ name: 'React', icon: '/techstack/react.svg' },
			{ name: 'Tailwind CSS', icon: '/techstack/tailwindcss.svg' },
			{ name: 'ESLint', icon: '/techstack/eslint.svg' },
			{ name: 'Prettier', icon: '/techstack/prettier.svg' },
			{ name: 'PNPM', icon: '/techstack/pnpm.svg' },
		],
		liveLink: '/',
		githubLink: 'https://github.com/everget/portfolio-website',
	},
	{
		title: {
			en: 'Advanced To-Do List',
			es: '',
			pt: '',
			ru: '',
			ua: '',
		},
		description: {
			en: 'A To-Do list app with some additional functionality',
			es: '',
			pt: '',
			ru: '',
			ua: '',
		},
		image: '/projects/todolist.png',
		techstack: [
			{ name: 'TypeScript', icon: '/techstack/typescript.svg' },
			{ name: 'Tailwind CSS', icon: '/techstack/tailwindcss.svg' },
			{ name: 'Redux', icon: '/techstack/redux.svg' },
			{ name: 'Vite', icon: '/techstack/vite.svg' },
			{ name: 'Playwright', icon: '/techstack/playwright.svg' },
			{ name: 'Cypress', icon: '/techstack/cypress.svg' },
			{ name: 'ESLint', icon: '/techstack/eslint.svg' },
			{ name: 'Prettier', icon: '/techstack/prettier.svg' },
			{ name: 'PNPM', icon: '/techstack/pnpm.svg' },
		],
		liveLink: 'https://everget.github.io/todolist-app/',
		githubLink: 'https://github.com/everget/todolist-app',
	},
	{
		title: {
			en: 'Space Invaders Game',
			es: '',
			pt: '',
			ru: '',
			ua: '',
		},
		description: {
			en: 'My test task to join TradingView (May of 2017)',
			es: '',
			pt: '',
			ru: 'Тестовое задание TradingView (Май 2017)',
			ua: '',
		},
		image: '/projects/space-invaders.png',
		techstack: [
			{ name: 'TypeScript', icon: '/techstack/typescript.svg' },
			{ name: 'Canvas', icon: '/techstack/html5.svg' },
			{ name: 'Vite', icon: '/techstack/vite.svg' },
			{ name: 'ESLint', icon: '/techstack/eslint.svg' },
			{ name: 'Prettier', icon: '/techstack/prettier.svg' },
			{ name: 'PNPM', icon: '/techstack/pnpm.svg' },
		],
		liveLink: 'https://everget.github.io/space_invaders/',
		githubLink: 'https://github.com/everget/space_invaders',
	},
	{
		title: {
			en: 'Securities Portfolio Calculator',
			es: '',
			pt: '',
			ru: 'Калькулятор портфеля ценных бумаг',
			ua: '',
		},
		description: {
			en: 'My test task to join eSignal (May of 2016)',
			es: '',
			pt: '',
			ru: 'Тестовое задание eSignal (Май 2016)',
			ua: '',
		},
		image: '/projects/securities-portfolio-calculator.png',
		techstack: [
			{ name: 'JavaScript', icon: '/techstack/javascript.svg' },
			{ name: 'AngularJS', icon: '/techstack/angular.svg' },
			{ name: 'Bootstrap', icon: '/techstack/bootstrap.svg' },
			{ name: 'Webpack', icon: '/techstack/webpack.svg' },
			{ name: 'ESLint', icon: '/techstack/eslint.svg' },
			{ name: 'Prettier', icon: '/techstack/prettier.svg' },
			{ name: 'PNPM', icon: '/techstack/pnpm.svg' },
		],
		liveLink: 'https://everget.github.io/securities_portfolio_app/',
		githubLink: 'https://github.com/everget/securities_portfolio_app',
	},
	// {
	//     title: {
	//         en: 'Chat App',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     description: {
	//         en: 'Chat application with real-time messaging',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     image: '/placeholder-300x200.svg',
	//     techstack: [],
	//     liveLink: '',
	//     githubLink: 'https://github.com/everget/nodejs-chat-app',
	// },
	// {
	//     title: {
	//         en: 'Notes App',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     description: {
	//         en: 'A Notion-style app to make notes',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     image: '/placeholder-300x200.svg',
	//     techstack: [],
	//     liveLink: '',
	//     githubLink: 'https://github.com/everget/notes-app',
	// },
	// {
	//     title: {
	//         en: 'Calculator',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     description: {
	//         en: 'Calculator with virtual keyboard',
	//         es: '',
	//         pt: '',
	//         ru: '',
	//         ua: '',
	//     },
	//     image: '/placeholder-300x200.svg',
	//     techstack: [],
	//     liveLink: '',
	//     githubLink: 'https://github.com/everget/calculator',
	// },
	// {
	// 	title: {
	// 		en: 'Weather App',
	// 		es: 'Panel de Control del Clima',
	// 		pt: 'Painel de Controle do Clima',
	// 		ru: 'Панель Погоды',
	// 		ua: 'Панель Погоди',
	// 	},
	// 	description: {
	// 		en: 'A responsive weather dashboard with location-based forecasts and interactive maps.',
	// 		es: 'Un panel de control del clima responsivo con pronósticos basados en la ubicación y mapas interactivos.',
	// 		pt: 'Um painel de controle do clima responsivo com previsões baseadas na localização e mapas interativos.',
	// 		ru: 'Адаптивная панель погоды с прогнозами на основе местоположения и интерактивными картами.',
	// 		ua: 'Адаптивна панель погоди з прогнозами на основі місцезнаходження та інтерактивними картами.',
	// 	},
	// 	image: '/placeholder-300x200.svg',
	// techstack: [
	// 	{ name: 'TypeScript', icon: '/techstack/typescript.svg' },
	//     { name: 'React', icon: '/techstack/react.svg' },
	//     { name: 'TanStack Query', icon: '/techstack/tanstack-query.svg' },
	// 	{ name: 'Tailwind CSS', icon: '/techstack/tailwindcss.svg' },
	// 	{ name: 'ESLint', icon: '/techstack/eslint.svg' },
	// 	{ name: 'Prettier', icon: '/techstack/prettier.svg' },
	// 	{ name: 'PNPM', icon: '/techstack/pnpm.svg' },
	//     { name: 'OpenWeatherMap API' },
	//     { name: 'Mapbox' },
	// ],
	// 	liveLink: '',
	// 	githubLink: '',
	// },
	// {
	// 	title: {
	// 		en: 'E-commerce Platform',
	// 		es: 'Plataforma de Comercio Electrónico',
	// 		pt: 'Plataforma de E-commerce',
	// 		ru: 'Платформа Электронной Коммерции',
	// 		ua: 'Платформа Електронної Комерції',
	// 	},
	// 	description: {
	// 		en: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
	// 		es: 'Una plataforma de comercio electrónico completa con gestión de inventario en tiempo real y procesamiento de pagos.',
	// 		pt: 'Uma plataforma de e-commerce completa com gerenciamento de estoque em tempo real e processamento de pagamentos.',
	// 		ru: 'Полнофункциональная платформа электронной коммерции с управлением запасами в реальном времени и обработкой платежей.',
	// 		ua: 'Повнофункціональна платформа електронної комерції з управлінням запасами в реальному часі та обробкою платежів.',
	// 	},
	// 	image: '/placeholder-300x200.svg',
	// 	techstack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
	// 	liveLink: '',
	// 	githubLink: '',
	// },
	// {
	// 	title: {
	// 		en: 'Task Management App',
	// 		es: 'Aplicación de Gestión de Tareas',
	// 		pt: 'Aplicativo de Gerenciamento de Tarefas',
	// 		ru: 'Приложение для Управления Задачами',
	// 		ua: 'Додаток для Управління Завданнями',
	// 	},
	// 	description: {
	// 		en: 'A collaborative task management application with real-time updates and team chat functionality.',
	// 		es: 'Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funcionalidad de chat en equipo.',
	// 		pt: 'Um aplicativo colaborativo de gerenciamento de tarefas com atualizações em tempo real e funcionalidade de chat em equipe.',
	// 		ru: 'Приложение для совместного управления задачами с обновлениями в реальном времени и функцией командного чата.',
	// 		ua: 'Додаток для спільного управління завданнями з оновленнями в реальному часі та функцією командного чату.',
	// 	},
	// 	image: '/placeholder-300x200.svg',
	// 	techstack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
	// 	liveLink: '',
	// 	githubLink: '',
	// },
];

export default function Projects() {
	const { language } = useLanguage();

	const content: TranslationsObject = {
		en: {
			title: 'Featured Projects',
			liveDemo: 'Live Demo',
			viewCode: 'View Code',
		},
		es: {
			title: 'Proyectos Destacados',
			liveDemo: 'Demo en Vivo',
			viewCode: 'Ver Código',
		},
		pt: {
			title: 'Projetos em Destaque',
			liveDemo: 'Demo ao Vivo',
			viewCode: 'Ver Código',
		},
		ru: {
			title: 'Избранные Проекты',
			liveDemo: 'Живое Демо',
			viewCode: 'Посмотреть Код',
		},
		ua: {
			title: 'Вибрані Проекти',
			liveDemo: 'Живе Демо',
			viewCode: 'Переглянути Код',
		},
	};

	return (
		<section id='projects' className='py-20 bg-white dark:bg-gray-900'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-1 text-center'>{content[language].title}</h2>
				<div className='flex items-center justify-center mb-8'>
					<a href='https://www.svgrepo.com/'>{'Icons from SVG Repo'}</a>
					<Image
						src='/svgrepo.svg'
						alt='SVG Repo'
						width={50}
						height={50}
						className='ml-1'
					/>
				</div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projectsData.map((project, index) => (
						<Card key={index} className='overflow-hidden'>
							<Image
								src={project.image}
								alt={project.title[language] ?? project.title.en}
								width={1200}
								height={800}
								className='w-full h-48 object-cover'
							/>
							<CardHeader>
								<CardTitle>{project.title[language]}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>
									{project.description[language] ?? project.description.en}
								</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.techstack.map((tech, techIndex) => (
										<div
											key={techIndex}
											className='flex flex-row items-center justify-center bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm'
										>
											{tech.icon && (
												<Image
													src={`${tech.icon}`}
													alt={`${tech.name}`}
													width={16}
													height={16}
													className='rounded-md mr-1 h-5 w-5'
												/>
											)}
											{tech.name}
										</div>
									))}
								</div>
								<div className='flex justify-between'>
									<Button size='sm' variant='outline' asChild>
										<a
											href={project.liveLink}
											target='_blank'
											rel='noopener noreferrer'
										>
											<ExternalLink className='mr-2 h-4 w-4' />{' '}
											{content[language].liveDemo}
										</a>
									</Button>
									<Button size='sm' variant='outline' asChild>
										<a
											href={project.githubLink}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Image
												src={'/socials/github.svg'}
												alt='View on Github'
												width={16}
												height={16}
												className='rounded-full mr-2 h-4 w-4'
											/>{' '}
											{content[language].viewCode}
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
