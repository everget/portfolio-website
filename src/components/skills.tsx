'use client';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/providers/language-provider';

type SkillCategory =
	| 'General'
	| 'Languages'
	| 'Frontend'
	| 'Backend'
	| 'Testing'
	| 'Databases'
	| 'CI/CD'
	| 'Data Science';

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
		category: 'CI/CD',
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

const categoryColors = {
	General: {
		badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
		category: 'text-blue-700 dark:text-blue-300',
	},
	Languages: {
		badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
		category: 'text-purple-700 dark:text-purple-300',
	},
	Frontend: {
		badge: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
		category: 'text-pink-700 dark:text-pink-300',
	},
	Backend: {
		badge: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
		category: 'text-green-700 dark:text-green-300',
	},
	Testing: {
		badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
		category: 'text-yellow-700 dark:text-yellow-300',
	},
	Databases: {
		badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
		category: 'text-orange-700 dark:text-orange-300',
	},
	'CI/CD': {
		badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
		category: 'text-red-700 dark:text-red-300',
	},
	'Data Science': {
		badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
		category: 'text-teal-700 dark:text-teal-300',
	},
};

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
				<h2 className='text-3xl font-bold mb-12 text-center dark:text-gray-100'>
					{content[language].title}
				</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					{skillsData.map((category, index) => (
						<div key={index} className='mb-6'>
							<h3
								className={`text-xl font-semibold mb-4 ${
									categoryColors[category.category as SkillCategory].category
								}`}
							>
								{category.category}
							</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, skillIndex) => (
									<Badge
										key={skillIndex}
										variant='secondary'
										className={`${
											categoryColors[category.category as SkillCategory].badge
										} hover:opacity-80 transition-opacity duration-200`}
									>
										{skill}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
