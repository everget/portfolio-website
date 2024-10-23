'use client';

import Clock from '@/components/clock';
import { type TranslationsObject, useLanguage } from '@/providers/language-provider';
import Image from 'next/image';

export default function Contact() {
	const { language } = useLanguage();

	const content: TranslationsObject = {
		en: {
			title: 'Get in Touch',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send Message',
			success: 'Message sent successfully!',
			error: 'An error occurred. Please try again.',
		},
		es: {
			title: 'Contacto',
			name: 'Nombre',
			email: 'Correo electrónico',
			message: 'Mensaje',
			send: 'Enviar Mensaje',
			success: '¡Mensaje enviado con éxito!',
			error: 'Ocurrió un error. Por favor, inténtelo de nuevo.',
		},
		pt: {
			title: 'Entre em Contato',
			name: 'Nome',
			email: 'E-mail',
			message: 'Mensagem',
			send: 'Enviar Mensagem',
			success: 'Mensagem enviada com sucesso!',
			error: 'Ocorreu um erro. Por favor, tente novamente.',
		},
		ru: {
			title: 'Свяжитесь со Мной',
			name: 'Имя',
			email: 'Электронная почта',
			message: 'Сообщение',
			send: 'Отправить Сообщение',
			success: 'Сообщение успешно отправлено!',
			error: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.',
		},
		ua: {
			title: "Зв'яжіться зі Мною",
			name: "Ім'я",
			email: 'Електронна пошта',
			message: 'Повідомлення',
			send: 'Надіслати Повідомлення',
			success: 'Повідомлення успішно надіслано!',
			error: 'Сталася помилка. Будь ласка, спробуйте ще раз.',
		},
	};

	return (
		<section id='contact' className='py-20 bg-white dark:bg-gray-900'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>{content[language].title}</h2>
				<div className='flex flex-col items-center space-x-4 mb-6'>
					<div className='flex items-start justify-between mb-2'>
						<a
							href='https://www.linkedin.com/in/alex-orekhov-946b5415a/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600'
						>
							<Image
								src={'/socials/linkedin.svg'}
								alt='LinkedIn Profile'
								width={20}
								height={20}
								className='mr-8 h-16 w-16'
							/>
						</a>
						<a
							href='https://github.com/everget'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600'
						>
							<Image
								src={'/socials/github.svg'}
								alt='Github Profile'
								width={20}
								height={20}
								className='h-16 w-16'
							/>
						</a>
					</div>
					<Clock />
				</div>
			</div>
		</section>
	);
}
