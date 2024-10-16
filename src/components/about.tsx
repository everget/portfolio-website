'use client';

import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
	const { language } = useLanguage();

	const content = {
		en: {
			title: 'About & Experience',
			description:
				"I'm a passionate full-stack web developer with extensive experience (8+ years) in both frontend and backend technologies. I specialize in creating modern, efficient, and scalable web applications.",
			experience: [
				{
					year: '2020 - Present',
					role: 'Full Stack Developer',
					company: 'Freelance',
					employmentType: 'Full-time self-employed',
				},
				{
					year: '2017 - 2020',
					role: 'Frontend Developer',
					company: 'TradingView',
					employmentType: 'Full-time',
				},
				{
					year: '2016 - 2017',
					role: 'Frontend Developer',
					company: 'DealerPoint LLC',
					employmentType: 'Full-time',
				},
			],
			resumeButton: 'Download Resume',
		},
		es: {
			title: 'Sobre Mí y Experiencia',
			description:
				'Soy un desarrollador web full-stack apasionado con amplia experiencia en tecnologías frontend y backend. Me especializo en crear aplicaciones web modernas, eficientes y escalables.',
			experience: [
				{
					year: '2020 - Presente',
					role: 'Desarrollador Full Stack',
					company: 'Freelance',
					employmentType: 'Autónomo a tiempo completo',
				},
				{
					year: '2017 - 2020',
					role: 'Desarrollador Frontend',
					company: 'TradingView',
					employmentType: 'Tiempo completo',
				},
				{
					year: '2016 - 2017',
					role: 'Desarrollador Frontend',
					company: 'DealerPoint LLC',
					employmentType: 'Tiempo completo',
				},
			],
			resumeButton: 'Descargar CV',
		},
		pt: {
			title: 'Sobre Mim e Experiência',
			description:
				'Sou um desenvolvedor web full-stack apaixonado, com vasta experiência em tecnologias frontend e backend. Especializo-me na criação de aplicações web modernas, eficientes e escaláveis.',
			experience: [
				{
					year: '2020 - Presente',
					role: 'Desenvolvedor Full Stack',
					company: 'Freelance',
					employmentType: 'Autônomo em tempo integral',
				},
				{
					year: '2017 - 2020',
					role: 'Desenvolvedor Frontend',
					company: 'TradingView',
					employmentType: 'Tempo integral',
				},
				{
					year: '2016 - 2017',
					role: 'Desenvolvedor Frontend',
					company: 'DealerPoint LLC',
					employmentType: 'Tempo integral',
				},
			],
			resumeButton: 'Baixar Currículo',
		},
		ru: {
			title: 'Обо Мне и Опыт',
			description:
				'Я увлеченный full-stack веб-разработчик с обширным опытом работы как с фронтенд, так и с бэкенд технологиями. Я специализируюсь на создании современных, эффективных и масштабируемых веб-приложений.',
			experience: [
				{
					year: '2020 - Настоящее время',
					role: 'Full Stack Разработчик',
					company: 'Freelance',
					employmentType: 'Самозанятый на полную ставку',
				},
				{
					year: '2017 - 2020',
					role: 'Frontend Разработчик',
					company: 'TradingView',
					employmentType: 'Полная занятость',
				},
				{
					year: '2016 - 2017',
					role: 'Frontend Разработчик',
					company: 'DealerPoint LLC',
					employmentType: 'Полная занятость',
				},
			],
			resumeButton: 'Скачать Резюме',
		},
		ua: {
			title: 'Про Мене та Досвід',
			description:
				'Я захоплений full-stack веб-розробник з великим досвідом роботи як з фронтенд, так і з бекенд технологіями. Я спеціалізуюся на створенні сучасних, ефективних та масштабованих веб-додатків.',
			experience: [
				{
					year: '2020 - Теперішній час',
					role: 'Full Stack Розробник',
					company: 'Freelance',
					employmentType: 'Самозайнятий на повну ставку',
				},
				{
					year: '2017 - 2020',
					role: 'Frontend Розробник',
					company: 'TradingView',
					employmentType: 'Повна зайнятість',
				},
				{
					year: '2016 - 2017',
					role: 'Frontend Розробник',
					company: 'DealerPoint LLC',
					employmentType: 'Повна зайнятість',
				},
			],
			resumeButton: 'Завантажити Резюме',
		},
	};

	return (
		<section id='about' className='py-20 bg-white dark:bg-gray-900'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>{content[language].title}</h2>
				<p className='text-xl mb-12 text-center max-w-3xl mx-auto'>
					{content[language].description}
				</p>
				<div className='grid md:grid-cols-3 gap-8 mb-12'>
					{content[language].experience.map((item, index) => (
						<div
							key={index}
							className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md'
						>
							<h3 className='text-lg font-semibold mb-2'>{item.role}</h3>
							<p className='mb-2'>
								<span className='text-orange-600'>{item.company}</span>
								{' · '}
								{item.employmentType}
							</p>
							<p className='text-sm text-gray-600 dark:text-gray-400'>{item.year}</p>
						</div>
					))}
				</div>
				<div className='text-center'>
					<Button size='lg' asChild>
						<a
							href={`/resume/resume_alex_orekhov_${
								language === 'pt' ? 'pt' : 'en'
							}.pdf`}
							download
						>
							<Download className='mr-2 h-4 w-4' /> {content[language].resumeButton}
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
