import Link from "next/link"
import Image from "next/image"

export default function Home() {
	return (
		<div className="text-center text-md flex flex-col items-center justify-center">
			<h1 className="pt-10">Dear Diary</h1>
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
			<Image
				src="https://images.omrshn.dev/sea.jpeg"
				alt="deary cover"
				width={600}
				height={300}
				className="mt-8 max-w-full h-auto"
			/>
			<Link href="/notes" className="mt-5">
				NOTES
			</Link>
			<p className="py-3 italic opacity-60">travel thoughts and reflections</p>
			<Link href="/spots" className="mt-5">
				SPOTS
			</Link>
			<p className="py-3 italic opacity-60 max-w-xs mx-auto">
				fav locations in dif cities <br />
			</p>
		</div>
	)
}
