const { Schema, model } = require('mongoose')



const schema = new Schema({
	name: {
		type: String,
		requred: true
	},
	color: {
		type: String,
		requred: true
	}
}, {
	timestamps: true
})


module.exports = model('Qualities', schema)