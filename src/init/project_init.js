import prompt from 'prompt';
import ConfigGeneratorBuilder from './generate/config_generator_builder';
import ConfigGenerator from './generate/config_generator';
import FileStructureGenerator from './generate/default_file_structure_generator';
import CONFIG_PROPERTIES from './generate/config_properties';

export default class ProjectInit{

  /**
   * Initialize fistful project.
   *
   * @return {number} 1.
   */
  init(){
    // Start querying for configuration.
    prompt.start();

    // Perform query.
    prompt.get(CONFIG_PROPERTIES, (err, result) => {
      // If an error occured log the errors.
      if (err) { return onErr(err); }

      // Store the values in the configuration.
      let configGenerator = (new ConfigGeneratorBuilder())
        .withName(result.project_name)
        .withTagline(result.tagline)
        .build();
      console.log("Generated config file: ", configGenerator.generate());

      let fileStructureGenerator = new FileStructureGenerator();

      fileStructureGenerator.generate();
      console.log("Default file structure set up.");
    });
    return 1;
  }

  /**
   * Function that logs errors.
   *
   * @param {string} err Error.
   * @return {number} 1;
   */
  onErr(err) {
    console.log(err);
    return 1;
  }
}
