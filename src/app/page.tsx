import Link from "next/link"

export default function Home() {
	return (
		<div className="text-center text-md flex flex-col items-center justify-center">
			<h1 className="pt-10">DIARY</h1>
			<p className="mt-5 px-4 lg:w-2/5">
				Over the past two years, I've been traveling extensively and have
				decided to share various content on this website. This blog will feature
				short notes, Spotify songs, and photos that I'll strive to post every
				month. The site is created for my personal use and for practicing
				Next.js and Tailwind technologies. If you're reading this, I'm delighted
				that my thoughts have captured your interest! code is{" "}
				<Link href="https://github.com/marshennikovaolga/dear-diary">
					<span className="italic cursor-pointer">open source</span>
				</Link>
			</p>
			<ul className="mt-5">
				<li>
					<Link href="/march">march — saint petersburg / tbilisi</Link>
				</li>
				<li>
					<Link href="/april">april — tbilisi</Link>
				</li>
				<li>
					<Link href="/may">may — tbilisi / istanbul</Link>
				</li>
				<li>
					<Link href="/june">june — tbilisi</Link>
				</li>
				<li>
					<Link href="/july">july — saint p / ? </Link>
				</li>
			</ul>
		</div>
	)
}
