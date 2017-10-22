/**
 * Properties for querying the user for configurtion.
 */
const CONFIG_PROPERTIES = [
  {
    name : 'project_name',
    required : true,
    type : 'string'
  },
  {
    name : 'tagline',
    required : true,
    default : 'A fistful site.',
    type : 'string'
  }
];

module.exports = CONFIG_PROPERTIES;
