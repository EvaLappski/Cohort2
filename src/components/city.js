class City {
	constructor (city = 'Whoville', latitude = -100, longitude = 100, population = 100, cityID = 0){
		this.city = city;
		this.latitude = latitude;
		this.longitude = longitude;
		this.population = population;
		this.cityID = cityID;
	}

	show(){
		return `${this.city} Lat:${this.latitude} Lon:${this.longitude} Pop:${this.population}`;
	}

	movedIn(amount){
		return this.population += amount;
	}

	movedOut(amount){
		return this.population -= amount;
	}

	howBig(city){
		let x = this.population;
		if (x > 100000){
			return 'City'
		} 
		else if (x > 20000 && x <= 100000){
			return 'Large Town'
		}
		else if (x > 1000 && x <= 20000){
			return 'Town'
		} 
		else if (x > 100 && x <= 1000) {
			return 'Village'
		}
		else if (x > 1 && x <=100){
			return 'Hamlet'
		}
		else {
			return null
		}

	}

}

export default City;