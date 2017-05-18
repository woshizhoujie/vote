export let state = {
	results: {
		materials: [],

		cookbooks: [],
		steps: [],
		ingredients: [],
		images: [],

		categories: [],
		recommends: [],
		menuset: [],

		markets: [],
		restaurants: []
	},

	entities: {
		materials: {},
		cookbooks: {},
		steps: {},
		ingredients: {},
		images: {},

		categories: {},
		recommends: {},
		menuset: {},

		markets: {},
		restaurants: {}
	},

	status: {
		material: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		cookbook: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		step: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		ingredient: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		image: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},

		category: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		recommend: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		menuset: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},

		market: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		},
		restaurant: {
			isFetching: false,
			isFailed: false,
			errMsg: ''
		}
	},
}