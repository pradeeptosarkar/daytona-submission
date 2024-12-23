import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

export const UIUX = () => {
	return (
		<>
			<Navbar />
			<section className="text-gray-600 body-font text">
				<div className="px-5 py-24 mx-auto flex flex-wrap">
					<h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
						UI/UX Designing
					</h1>

					<div className="flex flex-wrap w-full">
						<div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>

								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
									</svg>
								</div>

								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
									<a href="#leuiux-section">Learn the basics of design</a>
									</h2>
									<p className="leading-relaxed text-white text-justify">
									Learning the basics of UI/UX (User Interface/User Experience) design is a great skill to have, whether you're interested in web development, app design, or creating a more user-friendly experience for any digital product. 
									</p>
								</div>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
										  <a href="#seuiux-section">Select an UI/UX tool</a>
									</h2>
									<p className="leading-relaxed text-white text-justify">
										These tools simplify prototyping, making it
										possible to create interactive mockups for user
										testing and feedback collection, which in turn,
										accelerates the design iteration process.
										Furthermore, they facilitate the creation of
										design systems and style guides, promoting a
										cohesive and user-friendly experience across
										different devices and platforms.
									</p>
								</div>
							</div>
							<div className="flex relative">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
										 <a href="#stuiux-section">Study UI/UX design</a>
									</h2>
									<p className="leading-relaxed text-white text-justify">
										Once you have a strong foundation in design
										principles, focus on learning the specifics of
										UI/UX design. This can involve studying user
										research, wireframing, prototyping, usability
										testing, and other key concepts.
									</p>
								</div>
							</div>
						</div>
						<img
							className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
							src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/07/30182024/UX-UI-Design.jpg"
							alt="UI / UX Designing"
						/>
					</div>
				</div>
			</section>

			<section>
				<div className="px-5 py-0 mx-auto">
					<div id="leuiux-section" className="flex flex-col text-left w-full mb-10">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
						Learn the basics of design
						</h1>
						<p className="w-full text-left mx-auto leading-relaxed text-base">
						Learning the basics of UI/UX (User Interface/User Experience) design is a great skill to have, whether you're interested in web development, app design, or creating a more user-friendly experience for any digital product. 
						</p>
					</div>
					<div className="flex flex-wrap -m-2">
						{LeUiux.map((tools) => (
							<div
								key={tools.title}
								className="p-2 lg:w-1/3 md:w-1/2 w-full"
							>
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img
										alt="tools"
										className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
										src={tools.image}
									/>
									<div className="flex-grow">
										<Link to={tools.to}>
											<h2 className="text-white title-font font-bold underline text-xl">
												{tools.title}
											</h2>
										</Link>
										<p className="text-white">{tools.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
<br></br>
<br></br>
				<div className="px-5 py-0 mx-auto">
					<div id="seuiux-section" className="flex flex-col text-left w-full mb-10">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Select a UI / UX Tool
						</h1>
						<p className="w-full text-left mx-auto leading-relaxed text-base">
							UI/UX tools empower designers to deliver visually appealing
							and intuitive user interfaces while saving time, reducing
							costs, and improving the overall quality of digital
							products and services.
						</p>
					</div>
					<div className="flex flex-wrap -m-2">
						{uiuxTools.map((tools) => (
							<div
								key={tools.title}
								className="p-2 lg:w-1/3 md:w-1/2 w-full"
							>
								<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
									<img
										alt="tools"
										className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
										src={tools.image}
									/>
									<div className="flex-grow">
										<Link to={tools.to}>
											<h2 className="text-white title-font font-bold underline text-xl">
												{tools.title}
											</h2>
										</Link>
										<p className="text-white">{tools.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			
		</>
	);
};

const LeUiux = [
	
	
	{
		title: 'HTML5',
		image: 'https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?w=826&t=st=1696142260~exp=1696142860~hmac=0023559da96b5349b1452cf23667ac25b74a8e365a5d0b4074c1f9847b911e85',
		description:
			'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
		to: '/html',
	},
	{
		title: 'CSS3',
		image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',
		description:
			'CSS is used to control the presentation and layout of your web page. CSS3 introduces advanced styling capabilities.You can use CSS3 for defining colors, fonts, spacing, borders, and animations to create an attractive and responsive design.',
		to: '/css',
	},
	{
		title: 'JavaScript',
		image: 'https://cms.azure.styava.dev/api/assets/styavacommunities/092f9741-4c89-4cd4-aac9-9b3ca76a2bf5/javascript-39395.png',
		description:
			'JavaScript is a programming language used to make web pages interactive. With JavaScript, you can add behavior to your web design. You can create things like image sliders, interactive forms, and more.',
		to: '/js',
	},
	
];

const uiuxTools = [
	
	
	{
		title: 'Figma',
		image: 'https://tadviser.com/images/2/28/Figma2.png',
		description:
			'You’ll struggle to find a UX/UI tools list that doesn’t mention Figma, and for good reason. Figma is a browser-based interface design tool that empowers fast design and prototyping and a smooth, collaborative workflow.',
		to: '/figma',
	},
	{
		title: 'Adobe XD',
		image: 'https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw',
		description:
			'Adobe XD is considered by many as the go-to design tool. It’s fast, it’s powerful, and there’s not a lot you can’t do with it! From early ideation and low-fidelity designs, right through to impressive animations and true-to-life prototypes.',
		to: '/adobe',
	},
	{
		title: 'Sketch',
		image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg',
		description:
			'Sketch is a powerful and flexible UX and UI design platform built for collaborative design. It has long been considered an industry-standard tool, ideal for both beginner and advanced designers.',
		to: '/sketch',
	},
	{
		title: 'InVision Studio',
		image: 'https://traffictail.com/wp-content/uploads/2023/05/Best-UIUX-Design-Tools16.png',
		description:
			'With a full suite of applications, InVision gives designers all of the UI design tools they need to create fully realized and functional prototypes with dynamic elements and animations.',
		to: '/invision',
	},
];
