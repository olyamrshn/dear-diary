import { monthData } from "@/app/data/monthData"
import Link from "next/link"
import Back from "../components/Back"

export default function Notes() {
	return (
		<>
			<Back />
			<div className="text-center text-md flex flex-col items-center justify-center">
				<h1 className="pt-10">NOTES</h1>
				<ul className="mt-5 space-y-5">
					{monthData &&
						Object.entries(monthData).map(([month, data]) => (
							<li key={month}>
								<Link href={`/notes/${month}`}>{data.title}</Link>
							</li>
						))}
				</ul>
			</div>
		</>
	)
}
