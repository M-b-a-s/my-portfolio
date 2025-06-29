'use client';

import { PinContainer } from '../components/3d-pin';
import { Carousel, CarouselItem } from '@/components/ui/carousel';

const projects = [
	{
		title: 'Dashboard',
		url: 'https://twitter.com/mannupaaji',
		pinTitle: '/ui.aceternity.com',
		description:
			'A responsive dashboard with dark mode, built using React Vite, shadcn/ui, Tailwind CSS, and TypeScript.',
		gradient: 'from-violet-500 via-purple-500 to-blue-500',
	},
	{
		title: 'Portfolio Website',
		url: 'https://your-portfolio-link.com',
		pinTitle: '/portfolio',
		description:
			'Personal portfolio built with React, Vite, and Tailwind CSS to showcase my work and skills.',
		gradient: 'from-pink-500 via-red-500 to-yellow-500',
	},
	{
		title: 'E-commerce App',
		url: 'https://your-ecommerce-link.com',
		pinTitle: '/ecommerce',
		description:
			'Full-stack app with cart, checkout, and payment. Built with React, Node.js, and MongoDB.',
		gradient: 'from-green-400 via-blue-400 to-purple-400',
	},
	{
		title: 'Blog Platform',
		url: 'https://your-blog-link.com',
		pinTitle: '/blog',
		description:
			'A modern blog platform with markdown support, comments, and authentication using Next.js.',
		gradient: 'from-yellow-400 via-orange-400 to-pink-400',
	},
	{
		title: 'Task Manager',
		url: 'https://your-taskmanager-link.com',
		pinTitle: '/task-manager',
		description:
			'Task tracking app built with Zustand, Tailwind CSS, and React. Supports priorities and deadlines.',
		gradient: 'from-blue-400 via-cyan-400 to-teal-400',
	},
];

export function AnimatedPinDemo() {
	return (
		<section
			id="projects"
			className="w-full px-4 py-16 bg-black text-white flex flex-col items-center justify-center"
		>
			<div className="text-center mb-10">
				<h2 className="text-4xl font-bold mb-2">Projects</h2>
				<p className="text-slate-400 text-lg max-w-xl mx-auto">
					Here are a few projects I've worked on recently. Each one highlights
					different skills and tech stacks.
				</p>
			</div>

			<Carousel className="w-full max-w-6xl">
				{projects.map((project, idx) => (
					<CarouselItem key={idx} className="flex justify-center">
						<PinContainer title={project.pinTitle} href={project.url}>
							<div className="flex flex-col justify-between p-5 w-[18rem] h-[20rem] bg-white/5 rounded-xl shadow-md backdrop-blur-md border border-white/10">
								<div>
									<h3 className="text-lg font-semibold text-white mb-1">
										{project.title}
									</h3>
									<p className="text-sm text-slate-400 leading-snug">
										{project.description}
									</p>
								</div>
								<div
									className={`mt-6 h-100 w-full rounded-sm bg-gradient-to-br ${project.gradient}`}
								/>
							</div>
						</PinContainer>
					</CarouselItem>
				))}
			</Carousel>
		</section>
	);
}
