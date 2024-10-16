'use client';

import Clock from '@/components/clock';
import { type TranslationsObject, useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';

export default function Contact() {
	const { language } = useLanguage();
	const { toast } = useToast();
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			// Here you would typically send the form data to your backend
			// For this example, we'll just simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));
			toast({
				title: content[language].success,
				description: "I'll get back to you soon!",
			});
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			toast({
				title: content[language].error,
				description: 'Please try again later.',
				variant: 'destructive',
			});
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section id='contact' className='py-20 bg-white dark:bg-gray-900'>
			<div className='flex flex-col items-center space-x-4 mb-6'>
				<div className='flex items-start mb-2'>
					<Image
						src={'/socials/gmail.svg'}
						alt='GMail'
						width={20}
						height={20}
						className='rounded-full mr-2 h-8 w-8'
					/>
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
							className='rounded-full mr-2 h-8 w-8'
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
							className='rounded-full mr-2 h-8 w-8'
						/>
					</a>
				</div>
				<Clock />
			</div>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>{content[language].title}</h2>
				<form onSubmit={handleSubmit} className='max-w-md mx-auto'>
					<div className='mb-4'>
						<Input
							type='text'
							name='name'
							placeholder={content[language].name}
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-4'>
						<Input
							type='email'
							name='email'
							placeholder={content[language].email}
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='mb-4'>
						<Textarea
							name='message'
							placeholder={content[language].message}
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<Button type='submit' className='w-full'>
						{content[language].send}
					</Button>
				</form>
			</div>
		</section>
	);
}
