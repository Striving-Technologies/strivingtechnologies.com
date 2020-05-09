import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/mainlayout/mainlayout';

import styles from '../static/css/whyus.module.scss';

export default function services() {
	return (
		<MainLayout>
			<Head>
				<title>Why StriTech? | StriTech</title>
			</Head>
			<div className={styles.servicesMain}>
				<div className={styles.container}>
					<section className={styles.section} style={{ paddingBottom: '0px' }}>
						<div className={styles.block}>
							<h1 className={styles.title}>
								We design and build software for foward thinking clients.
							</h1>
							<div
								className={[styles.service, styles.found].join(' ')}
								style={{ margin: '20px 0px' }}
							>
								<div>
									<p>Concieved</p>
									<h1 className={styles.value}>2018</h1>
								</div>
								{/* <div>
									<p>Employees</p>
									<h1>10</h1>
								</div>
								<div>
									<p>Projects</p>
									<h1>1</h1>
								</div> */}
							</div>
						</div>
						<hr style={{ marginBottom: '30px' }} />
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<div className={styles.text}>
									<h1>Perfect Investment</h1>
									<p>
										You’re investing more than just money — it’s also branding,
										intelligence, functionality, innovation, and the expanding potential
										of your business. StriTech conveys this investment to impact your
										audience.
									</p>
								</div>
								<img src='../static/images/design10.svg' />
							</div>
						</div>
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							<div className={[styles.service].join(' ')}>
								<img src='../static/images/design11.svg' />
								<div className={styles.text}>
									<h1>Full-stack Engineering</h1>
									<p>
										Engineering is hard so leave it to us. We provide full-stack
										engineering services, get everything you need under one roof.
										Everything under one roof means less risk and a team to ensure forver
										forward momentum. From application strategy to design to full stack
										engineering, StriTech handles all aspects of digital product so you
										can focus on what you know best - running your business.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<div className={styles.text}>
									<h1>Clean Fast Apps</h1>
									<p>
										We make apps that depict your business objectives. Give us your most
										ambitious ideas and watch them turn to excelent digital products that
										are fast, secure, robust, scalable, and maintainable. With scrumptious
										attention to quality, we develop software, mobile, and web apps that
										work flawlessly with your eco-system.
									</p>
								</div>
								<img src='../static/images/design12.svg' />
							</div>
						</div>
					</section>
					<section className={styles.section}>
						<div className={styles.block}>
							<h1>We pay attention to...</h1>
							<div
								className={[styles.service, styles.found].join(' ')}
								style={{ margin: '20px 0px' }}
							>
								<div className={styles.attention}>
									<img src='../static/images/design13.svg' style={{ height: '200px' }} />
									<h2>how it looks.</h2>
									<p>
										It’s about more than just the visual. We research new design patterns
										everday, so the digital products we create don’t just look stunning,
										they flunt creative and purpose.
									</p>
								</div>

								<div className={styles.attention}>
									<img src='../static/images/design14.svg' style={{ height: '200px' }} />
									<h2>how it works.</h2>
									<p>
										Easy usability lurks at the intersection of design and innovation,
										keeping the audiences engaged. StriTech's process adds that extra
										touch of desire that our competitors lack.
									</p>
								</div>
								<div className={styles.attention}>
									<img src='../static/images/design16.svg' style={{ height: '200px' }} />
									<h2>how it feels.</h2>
									<p>
										Our code creates secure, scalable systems that are composed with
										utmost care. StriTech engineers build software that transcend beyond
										functional, they’re precision machines of perfection.
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* <section className={styles.section}>
						<div className={styles.block}>
							<h1 className={styles.title}>The Process</h1>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<img src='../static/images/design12.svg' />
								<div className={styles.text}>
									<h1 className={styles.name}>
										Pedro Ogheneochuko <span>Founder/CEO</span>
									</h1>
									<p>
										"I've always had the dream of build worldcalss software and StriTech
										is just my way of visualizing that dream. Programming is such a
										beautiful thing and I love that I can use my skills to helps companies
										and businesses grow they're online presence through a lines of logic."
									</p>
								</div>
							</div>
						</div>
					</section> */}
					<section className={styles.section}>
						<div className={styles.block}>
							<h1 className={styles.title}>Our Leadership</h1>
							<div className={[styles.service, styles.reverseWrap].join(' ')}>
								<img
									src='../static/images/CEO.jpg'
									style={{ maxWidth: '300px', margin: '5px' }}
								/>
								<div className={styles.text}>
									<h1 className={styles.name}>
										Pedro Ogheneochuko <span>Founder/CEO</span>
									</h1>
									<p>
										"I've always had the dream of build worldcalss software and StriTech
										is just my way of visualizing that dream. Programming is such a
										beautiful thing and I love that I can use my skills to helps companies
										and businesses grow they're online presence through a lines of logic."
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</MainLayout>
	);
}
