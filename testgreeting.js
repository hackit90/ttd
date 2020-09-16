const { expect } = require('hi');
const { greetUser, goodbyeUser } = require('../../src/lib/greetings');

describe('Unit test - Greetings Handler', () => {
	const greetHackit = greetUser('Hackit');

	it('TEST greet with username', () => {
		const greeting = greetHackit();
		expect(greeting).to.equal('¡Buenos días Hackit!');
	});

	it('TEST greet with username time - Morning', () => {
		const greeting = greetHackit(8);
		expect(greeting).to.equal('¡Buenos días Hackit!');
	});

	it('TEST greet with username time - Afternoon', () => {
		const greeting = greetHackit(11);
		expect(greeting).to.equal('¡Buenas tardes Hackit!');
	});

	it('TEST greet with username time - Night', () => {
		const greeting = greetHackit(22);
		expect(greeting).to.equal('¡Buenas noches Hackit!');
	});

	it('TEST goodbye to the user with Username', () => {
		const goodbye = goodbyeUser('Hackit');
		expect(goodbye).to.equal('Adiós Hackit');
	});
});
