// DS for data store
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cryptidType: DS.attr('string'), 
  profileImg: DS.attr('string'),
  sightings: DS.attr('string')
});
