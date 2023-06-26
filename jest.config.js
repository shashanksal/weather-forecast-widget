module.exports = {
	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes
	roots: ['<rootDir>/src'],

	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
	},
	//testEnvironment: 'jest-environment-node',

	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

	// Test spec file resolution pattern
	// Matches parent folder `__tests__` and filename
	// should contain `test` or `spec`.
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	//testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",

	// Module file extensions for importing
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.ts',
		'\\.(css|less)$': '<rootDir>/__mocks__/fileMock.ts',
	},
};
