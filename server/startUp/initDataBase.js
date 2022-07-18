const professionMock = require('../mocData/profession.json')
const qualitiesMock = require('../mocData/qualities.json')


const Profession = require('../models/Profession')
const Qualities = require('../models/Qualities')

module.exports = async () => {
	const professions = await Profession.find
	if (professions.length !== professionMock.length) {
		await createInitialEnttity(Profession, professionMock)
	}
	const qualities = await Qualities.find
	if (qualities.length !== qualitiesMock.length) {
		await createInitialEnttity(Qualities, qualitiesMock)
	}
}


async function createInitialEnttity(Model, data) {
	await Model.collection.drop()
	return Promise.all(
		data.map(async item => {
			try {
				delete item._id
				const newItem = new Model(item)
				await newItem.save()
				return newItem
			} catch (error) {
				return error
			}
		})
	)
}
