'use client';

import { type TranslationsObject, useLanguage } from '@/providers/language-provider';

export default function Footer() {
	const { language } = useLanguage();

	const content: TranslationsObject = {
		en: {
			madeWithLove: 'Made with ❤️ by',
			rights: 'All rights reserved.',
		},
		es: {
			madeWithLove: 'Hecho con ❤️ por',
			rights: 'Todos los derechos reservados.',
		},
		pt: {
			madeWithLove: 'Feito com ❤️ por',
			rights: 'Todos os direitos reservados.',
		},
		ru: {
			madeWithLove: 'Сделано с ❤️',
			rights: 'Все права защищены.',
		},
		ua: {
			madeWithLove: 'Зроблено з ❤️',
			rights: 'Усі права захищені.',
		},
	};

	return (
		<footer className='bg-gray-100 dark:bg-gray-800 py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-center items-center'>
					<div className=''>
						<p>
							{content[language].madeWithLove}
							<a
								href='https://github.com/everget'
								target='_blank'
								rel='noopener noreferrer'
								className='ml-1 text-indigo-600 hover:text-indigo-800'
							>
								@everget
							</a>
						</p>
						{/* <p>
							&copy; 2016-{new Date().getFullYear()}. {content[language].rights}
						</p> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
