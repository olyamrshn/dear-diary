import { spotData } from "@/app/data/spotData"
import Link from "next/link"
import Back from "../components/Back"

export default function Spots() {
	return (
		<>
			<Back />
			<div className="text-center text-md flex flex-col items-center justify-center">
				<h1 className="pt-10">SPOTS</h1>
				<ul className="mt-5 space-y-5">
					{spotData &&
						Object.entries(spotData).map(([spot, data]) => (
							<li key={spot}>
								<Link href={`/spots/${spot}`}>{data.title}</Link>
							</li>
						))}
				</ul>
			</div>
		</>
	)
}
