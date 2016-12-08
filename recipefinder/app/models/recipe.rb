class Recipe
	include HTTParty

	ENV["FOOD2FORK_KEY"] = '53f7767a73f1cd75f776aa8e79dbcf01'
	key_value = ENV["FOOD2FORK_KEY"]
	hostport = ENV["FOOD2FORK_SERVER_AND_PORT"] || 'www.food2fork.com'

	base_uri 'http://#{hostport}/api'
	default_params key: key_value, fields: "image_url,title"
	format :json

	def self.for (keyword)
		get("http://food2fork.com/api/search", query: { q: keyword })['recipes']
	end
end