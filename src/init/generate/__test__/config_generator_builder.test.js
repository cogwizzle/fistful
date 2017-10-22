import ConfigGeneratorBuilder from '../config_generator_builder';
import ConfigGenerator from '../config_generator';

const TEST_NAME = 'testName';
const TEST_TAGLINE = 'testTagline';
const TEST_THEME = 'testTheme';
const TEST_FILENAME = 'testFilename';
const DEFAULT_THEME = 'fire';
const DEFAULT_FILENAME = 'config.json';

it('ConfigGeneratorBuilder\'s function generate shall build a ConfigGenerator when the non default properties name, and tagline are set.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .build();
  let expectedResults = new ConfigGenerator();
  expectedResults.name = TEST_NAME;
  expectedResults.tagline = TEST_TAGLINE;
  expectedResults.theme = DEFAULT_THEME;
  expectedResults.filename = DEFAULT_FILENAME;
  expect(results).toEqual(expectedResults);
});

it('ConfigGeneratorBuidler\'s function generate shall build a ConfigGeneraor when the non default properties name, and tagline are set and theme is overridden with a truthy value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withTheme(TEST_THEME)
    .build();
  let expectedResults = new ConfigGenerator();
  expectedResults.name = TEST_NAME;
  expectedResults.tagline = TEST_TAGLINE;
  expectedResults.theme = TEST_THEME;
  expectedResults.filename = DEFAULT_FILENAME;
  expect(results).toEqual(expectedResults);
});

it('ConfigGeneratorBuidler\'s function generate shall build a ConfigGeneraor when the non default properties name, and tagline are set and filename is overridden with a truthy value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withFilename(TEST_FILENAME)
    .build();
  let expectedResults = new ConfigGenerator();
  expectedResults.name = TEST_NAME;
  expectedResults.tagline = TEST_TAGLINE;
  expectedResults.theme = DEFAULT_THEME;
  expectedResults.filename = TEST_FILENAME;
  expect(results).toEqual(expectedResults);
});

it('ConfigGeneratorBuilder\'s function generate shall throw an error when all required properties are not set.', () => {
  expect(() => {
    (new ConfigGeneratorBuilder())
      .build();
  }).toThrow(Error);
});

it('ConfigGeneratorBuidler\'s function validate shall call the onError function when name property is not set.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withTagline(TEST_TAGLINE)
    .validate(() => {return false;}, (err) => {return true;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onError function when tagline property is not set.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .validate(() => {return false;}, (err) => {return true;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onError function when default theme property is overridden with an invalid value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withTheme(undefined)
    .validate(() => {return false;}, (err) => {return true;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onError function when default filename property is overridden with an invalid value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withFilename(undefined)
    .validate(() => {return false;}, (err) => {return true;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onSuccess function when all non default properties are set.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .validate(() => {return true;}, (err) => {return false;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onSuccess function when all non default properties are set and theme is overridden with a truthy value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withTheme(TEST_THEME)
    .validate(() => {return true;}, (err) => {return false;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onSuccess function when all non default properties are set and filename is overridden with a truthy value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withFilename(TEST_FILENAME)
    .validate(() => {return true;}, (err) => {return false;});
  expect(results).toBeTruthy();
});

it('ConfigGeneratorBuidler\'s function validate shall call the onSuccess function when all non default properties are set and filename and theme are overridden with a truthy value.', () => {
  let results = (new ConfigGeneratorBuilder())
    .withName(TEST_NAME)
    .withTagline(TEST_TAGLINE)
    .withTheme(TEST_THEME)
    .withFilename(TEST_FILENAME)
    .validate(() => {return true;}, (err) => {return false;});
  expect(results).toBeTruthy();
});
