'use client';

import LanguageSelector from '@/components/language-selector';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const { theme, setTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className='sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<Link href='/' className='text-2xl font-bold'>
					Alex<span className='text-yellow-400'>.</span>dev
				</Link>
				<nav className='hidden md:flex space-x-4'>
					<Link href='#home' className=''>
						Home
					</Link>
					<Link href='#skills' className=''>
						Skills
					</Link>
					<Link href='#projects' className=''>
						Projects
					</Link>
					<Link href='#contact' className=''>
						Contact
					</Link>
				</nav>
				<div className='flex items-center space-x-2'>
					<LanguageSelector />
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{theme === 'dark' ? (
							<Sun className='h-5 w-5' />
						) : (
							<Moon className='h-5 w-5' />
						)}
					</Button>
					<Button variant='ghost' className='md:hidden' onClick={toggleMenu}>
						<svg
							className='w-6 h-6'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<title>Language Selector</title>
							<path d='M4 6h16M4 12h16M4 18h16' />
						</svg>
					</Button>
				</div>
			</div>
			{isMenuOpen && (
				<nav className='md:hidden bg-white dark:bg-gray-900 py-2'>
					<Link
						href='#home'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
					>
						Home
					</Link>
					<Link
						href='#skills'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
					>
						Skills
					</Link>
					<Link
						href='#projects'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
					>
						Projects
					</Link>
					<Link
						href='#contact'
						className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'
					>
						Contact
					</Link>
				</nav>
			)}
		</header>
	);
}
