import { AiOutlineLink } from "react-icons/ai";

const experiences = [
	{
		title: "Product Engineer",
		company: "Venueri",
		companyBg: "bg-[#74c0a7] text-[#00704a]",
		year: "2025 – Present",
		location: "Remote",
		description:
			"Built and maintained scalable React applications, collaborated with designers and backend teams, and delivered features with a focus on performance and accessibility.",
	},
	{
		title: "Frontend Engineer(Intern)",
		company: "Cyncra Tech",
		companyBg: "bg-[#696868] text-black",
		year: "2025 - Present",
		location: "Remote",
		description:
			"Built responsive web applications using React and TypeScript, collaborated with designers to implement UI/UX improvements, and optimized performance for better user experience.",
	},
	{
		title: "Fullstack Engineer(Intern)",
		company: "Akumzy Tech",
		companyBg: "bg-gray-500 text-slate-100",
		year: "2023",
		location: "On-Site",
		description:
			"Delivered custom web solutions for startups and individuals, focusing on clean UI, robust code, and fast delivery.",
	},
];

const Experience = () => (
	<section id="experience" className="mt-20 px-4">
		<h2 className="text-3xl font-bold text-[#212121] dark:text-white mb-4">
			Experience
		</h2>
		<div className="flex flex-col gap-8 max-w-2xl">
			{experiences.map((exp, idx) => (
				<div key={idx}>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
						<div>
							<h3 className="text-xl font-semibold text-[#815634]">
								{exp.title}
							</h3>
							<div className="flex items-center gap-2">
								<span
									className={`text-sm px-2 py-1 rounded ${exp.companyBg} font-semibold flex items-center gap-1 min-w-[120px]`}
								>
									<AiOutlineLink className="inline-block align-middle text-base mb-[2px]" />
									{exp.company}
								</span>
								<span className="text-slate-500 text-sm">
									· {exp.year}
								</span>
							</div>
						</div>
						<span className="text-slate-400 text-sm md:text-right">
							{exp.location}
						</span>
					</div>
					<p className="text-slate-700 text-base">{exp.description}</p>
				</div>
			))}
		</div>
	</section>
);

export default Experience;
