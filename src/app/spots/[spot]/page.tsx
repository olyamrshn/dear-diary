import Spot from "@/app/spot"
import { spotData } from "@/app/data/spotData"
import Back from "@/app/components/Back"

export default function SpotPage({ params }: { params: { spot: string } }) {
	const spotInfo = spotData[params.spot as keyof typeof spotData]
	const spots = Object.keys(spotData)
	const currentIndex = spots.indexOf(params.spot)

	const prevSpot = currentIndex > 0 ? spots[currentIndex - 1] : undefined
	const prevSpotName = prevSpot
		? spotData[prevSpot as keyof typeof spotData].title
		: undefined

	const nextSpot =
		currentIndex < spots.length - 1 ? spots[currentIndex + 1] : undefined
	const nextSpotName = nextSpot
		? spotData[nextSpot as keyof typeof spotData].title
		: undefined

	if (!spotInfo) {
		return <div>Sorry, spot not found</div>
	}

	return (
		<>
			<Back />
			<div className="pt-10">
				<Spot
					{...spotInfo}
					prevSpot={prevSpot}
					nextSpot={nextSpot}
					prevSpotName={prevSpotName}
					nextSpotName={nextSpotName}
				/>
			</div>
		</>
	)
}
