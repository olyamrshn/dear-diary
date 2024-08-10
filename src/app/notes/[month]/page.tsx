import React from "react"
import Month from "@/app/month"
import { monthData } from "@/app/data/monthData"
import Back from "@/app/components/Back"

export default function MonthPage({ params }: { params: { month: string } }) {
	const monthInfo = monthData[params.month as keyof typeof monthData]
	const months = Object.keys(monthData)
	const currentIndex = months.indexOf(params.month)

	const prevMonth = currentIndex > 0 ? months[currentIndex - 1] : undefined
	const prevMonthName = prevMonth
		? monthData[prevMonth as keyof typeof monthData].title
		: undefined

	const nextMonth =
		currentIndex < months.length - 1 ? months[currentIndex + 1] : undefined
	const nextMonthName = nextMonth
		? monthData[nextMonth as keyof typeof monthData].title
		: undefined

	if (!monthInfo) {
		return <div>sorry. not found</div>
	}

	return (
		<>
			<Back />
			<div className="pt-10">
				<Month
					{...monthInfo}
					prevMonth={prevMonth}
					nextMonth={nextMonth}
					prevMonthName={prevMonthName}
					nextMonthName={nextMonthName}
				/>
			</div>
		</>
	)
}
