export default {
generateObject: () => {
	const data = []
	Get_All_Chapters.data.forEach((item) => {
		const valueObject = {
			label: item.chapter_name,
			value: item.chapter_name,
		}
		data.push(valueObject)
	})
	return data
}
}