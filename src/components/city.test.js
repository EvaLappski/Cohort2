import City from './city'
import Community from './community'

test('test the class city', () => {
	const city = new City('Calgary', 51.0486, -114.0708, 1239000, 1);
	expect(city.show()).toEqual('Calgary Lat:51.0486 Lon:-114.0708 Pop:1239000');
	expect(city.movedIn(1000)).toEqual(1240000);
	expect(city.howBig('Calgary')).toEqual('City');
	expect(city.movedOut(1140000)).toEqual(100000);
	expect(city.howBig()).toEqual('Large Town');
	expect(city.movedOut(99998)).toEqual(2);
	expect(city.howBig('Calgary')).toEqual('Hamlet');
	expect(city.movedOut(2)).toEqual(0);
	expect(city.howBig('Calgary')).toEqual(null)
	city.movedIn(120);
	expect(city.howBig('Calgary')).toEqual("Village")
	city.movedIn(1100);
	expect(city.howBig('Calgary')).toEqual('Town')
	});

test ('test the class city default', () => {
	const city = new City();
	expect(city.show()).toEqual("Whoville Lat:-100 Lon:100 Pop:100")
});

test('test the class community', () => {
	const community = new Community();
	expect(community.getMostNorthern()).toEqual('n/a')
	expect(community.getMostSouthern()).toEqual('n/a')
	expect(community.createCity()).toEqual([{city:'Whoville', latitude:-100, longitude:100, population:100, cityID:0}]);
	community.createCity('Calgary', 51.0486, -114.0708, 12390000)
	community.createCity('Equador', 0, 0, 0);
	expect(community.whichSphere(1)).toEqual('Northern');
	expect(community.whichSphere(0)).toEqual('Southern');
	expect(community.whichSphere(2)).toEqual('Equator');
	expect(community.getMostNorthern()).toEqual('Calgary');
	expect(community.getMostSouthern()).toEqual('Whoville');
	expect(community.getPopulationTotal()).toEqual(12390100)
	community.deleteCity(0)
	expect(community.showDetails(1)).toEqual({"city": "Calgary", "cityID": 1, "latitude": 51.0486, "longitude": -114.0708, "population": 12390000})
	community.createCity('Edmonton', 56.8, -118.9, 400000);
	community.deleteCity(1)
	expect(community.showDetails(2)).toEqual( {"city": "Equador", "cityID": 2, "latitude": 0, "longitude": 0, "population": 0})
});

test('test the object reference', () => {
	const city = new City ('myCity', -45, -45, 1000000);
	expect(city.show()).toEqual('myCity Lat:-45 Lon:-45 Pop:1000000');
	expect(city.population).toEqual(1000000)
	let myFave = city
	expect(myFave.movedIn(1000)).toEqual(1001000);
	let myCity = myFave
	expect(myCity.movedIn(5000)).toEqual(1006000)
});