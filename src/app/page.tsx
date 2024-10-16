import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Skills from '@/components/skills';

export default function Home() {
	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Services />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
