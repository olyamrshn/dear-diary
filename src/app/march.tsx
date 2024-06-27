import Month from "./month"

const marchContent =
	"cool month. started learning react native for mobile applications. I've finally moved to Tbilisi and live in the Vake, just five minutes from pulp! there's a lot of work ahead of me, but it's quite exciting. btw, mastering drag and drop functionalities is proving to be tough"

const images: any[] = []
import React from "react"

const MarchPage = () => {
	return <Month title="March" content={marchContent} images={images} />
}

export default MarchPage
