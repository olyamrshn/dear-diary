import Link from "next/link"

export default function Notes() {
	return (
		<>
			<a href="/" className="p-5 no-underline focus:outline-none">
				← Back
			</a>
			<div className="text-center text-md flex flex-col items-center justify-center">
				<h1 className="pt-10">NOTES</h1>
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
						<Link href="/june">june — tbilisi / istanbul (cool right) </Link>
					</li>
					<li>
						<Link href="/july">july — tbilisi / saint petersburg </Link>
					</li>
				</ul>
			</div>
		</>
	)
}
