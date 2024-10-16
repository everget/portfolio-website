'use client';

import { useLanguage } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';

const skillsData = [
	{
		category: 'General',
		skills: [
			'OOP',
			'Design Patterns',
			'SOLID',
			'DRY',
			'KISS',
			'YAGNI',
			'TDD',
			'BDD',
			'Git',
			'GitHub',
			'NPM',
			'Agile',
			'Kanban',
			'Scrum',
			'Sprints',
			'Jira',
			'Trello',
			'Asana',
			'Redmine',
			'Figma',
		],
	},
	{
		category: 'Languages',
		skills: ['JavaScript ES6+', 'TypeScript', 'CoffeeScript', 'Ruby', 'Python', 'Lua'],
	},
	{
		category: 'Frontend',
		skills: [
			'HTML5 Canvas',
			'SCSS',
			'Less',
			'PostCSS',
			'BEM',
			'Bootstrap',
			'MUI',
			'Tailwind CSS',
			'Styled Components',
			'shadcn/ui',
			'jQuery',
			'Backbone',
			'React',
			'React Router',
			'AngularJS',
			'Angular',
			'Underscore',
			'Lodash',
			'Redux',
			'Jotai',
			'Zustand',
			'Zod',
			'RxJS',
			'TanStack Query',
			'TanStack Router',
			'Date-fns',
			'Babel',
			'Gulp',
			'Rollup',
			'Webpack',
			'Esbuild',
			'Vite',
			'Storybook',
			'SPA',
			'PWA',
			'Web Workers',
			'Service Workers',
			'Browser Extensions',
			'Responsive Web Design',
			'Accessibility',
			'WAI-ARIA',
		],
	},
	{
		category: 'Backend',
		skills: [
			'Node.js',
			'Express',
			'Next.js',
			'Mongoose',
			'Drizzle',
			'Prisma',
			'Kysely',
			'Ruby on Rails',
			'SSR',
			'SSG',
		],
	},
	{
		category: 'Testing',
		skills: [
			'Mocha',
			'Chai',
			'Sinon',
			'Ava',
			'Jasmine',
			'Jest',
			'Vitest',
			'Karma',
			'Protractor',
			'cheerio',
			'Selenium',
			'Playwright',
			'Cypress',
			'Enzyme',
			'RSpec',
			'Unit',
			'Integration',
			'End-to-end (E2E)',
			'Smoke',
		],
	},
	{
		category: 'Databases',
		skills: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
	},
	{
		category: 'CI/CD & Deployment',
		skills: [
			'GitHub Actions',
			'GitLab CI/CD',
			'Travis CI',
			'CircleCI',
			'AppVeyor',
			'Jenkins',
			'Heroku',
			'Vercel',
			'Netlify',
			'Docker',
		],
	},
	{
		category: 'Data Science',
		skills: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
	},
];

export default function Skills() {
	const { language } = useLanguage();

	const content = {
		en: {
			title: 'Skills & Tech Stack',
		},
		pt: {
			title: 'Habilidades & Stack Tecnológica',
		},
		es: {
			title: 'Habilidades & Pila Tecnológica',
		},
		ru: {
			title: 'Навыки и Технологический Стек',
		},
		ua: {
			title: 'Навички та Технічний Стек',
		},
	};

	return (
		<section id='skills' className='py-20 bg-gray-100 dark:bg-gray-800'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>{content[language].title}</h2>
				<div className=''>
					{skillsData.map((category, index) => (
						<div className='mb-4' key={index}>
							<h3 className='text-xl font-semibold'>{category.category}</h3>
							{category.skills.map((skill, skillIndex) => (
								<Badge key={skillIndex} className='mr-2'>
									{skill}
								</Badge>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
