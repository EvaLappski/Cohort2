import City from './city'

class Community {
	constructor (){
		this.community = [];
		this.counter = 0
	}


	createCity(city, latitude, longitude, population){
		const newCity = new City(city, latitude, longitude, population, this.counter++);
		this.community.push(newCity);
		return this.community;	
	}

	findCityIndex (a){
		let x = this.community.findIndex(function(e){return e.cityID === a})
		return x; //returns the index of the object 
	}

	whichSphere(cityID){
		let c = this.findCityIndex(cityID) //returns the index of the city
		if (this.community[c].latitude > 0) {
			return 'Northern'}
		else if (this.community[c].latitude < 0) {
			return 'Southern'}
		else {	
			return 'Equator'
		}
	}

	getMostNorthern(){
		if (this.community.length > 0) {
			const highest = this.community.reduce(
				(city1, city2) => 
				(city1.latitude > city2.latitude) ? city1 : city2
				)
		return highest.city
		}	
		else {
			return "n/a"
		}

	}

	getMostSouthern(){
		if (this.community.length > 0) {
			const lowest = this.community.reduce(
			(city1, city2) => 
			(city1.latitude < city2.latitude) ? city1 : city2
			)
		return lowest.city
		}	
		else {
			return "n/a"
			
		}

	}

	getPopulationTotal(){
		let sum = this.community.reduce(
		(accountList, currentValue) => accountList + currentValue.population, 0);
		return sum;
			
	}

	deleteCity (cityID){
		let b = this.findCityIndex(cityID)
		this.community.splice(b, 1);
		return this.community;	

	}
}

export default Community

