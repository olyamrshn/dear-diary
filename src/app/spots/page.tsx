import Link from "next/link"

export default function Spots() {
	return (
		<>
			<Link
				href="/"
				className="ml-5 mt-5 no-underline focus:outline-none inline-block"
			>
				← Back
			</Link>
			<div className="text-center text-md flex flex-col items-center justify-center">
				<h1 className="pt-10">SPOTS</h1>
				<p className="pt-10">coming soon</p>
			</div>
		</>
	)
}
