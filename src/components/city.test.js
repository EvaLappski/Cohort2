import City from './city'
import Community from './community'

test('test the class city', () => {
	const city = new City('Calgary', 51.0486, -114.0708, 1239000, 1);
	expect(city.show()).toEqual('Calgary Lat:51.0486 Lon:-114.0708 Pop:1239000');
	expect(city.movedIn(1000)).toEqual(1240000);
	expect(city.howBig('Calgary')).toEqual('City')
	expect(city.movedOut(1140000)).toEqual(100000);
	expect(city.howBig('Calgary')).toEqual('Large Town');
	expect(city.movedOut(99998)).toEqual(2);
	expect(city.howBig('Calgary')).toEqual('Hamlet');
	});

test ('test the class city default', () => {
	const city = new City();
	expect(city.show()).toEqual("Whoville Lat:-100 Lon:100 Pop:100")
});

test('test the class community', () => {
	const community = new Community();
	expect(community.createCity()).toEqual([{city:'Whoville', latitude:-100, longitude:100, population:100, cityID:0}]);
	expect(community.createCity('Calgary', 51.0486, -114.0708, 12390000)).toEqual([
		{city:'Whoville', latitude:-100, longitude:100, population:100, cityID:0},
		{city: "Calgary", latitude:51.0486, longitude: -114.0708, population: 12390000, cityID:1}]);
	expect(community.whichSphere(1)).toEqual('Northern');
	expect(community.whichSphere(0)).toEqual('Southern');
	expect(community.getMostNorthern()).toEqual('Calgary');
	expect(community.getMostSouthern()).toEqual('Whoville');
	expect(community.getPopulationTotal()).toEqual(12390100)
	expect(community.deleteCity(0)).toEqual([{city: "Calgary", latitude:51.0486, longitude: -114.0708, population: 12390000, cityID:1}]);

	});
