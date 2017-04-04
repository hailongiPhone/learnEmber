import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {defaultValue:'Bob'}),
  isNew: DS.attr('boolen', {defaultValue:true}),
  createdAt: DS.attr('date', {defaultValue:new Date()}),
  numOfChildren: DS.attr('number', {defaultValue:1}),
  location: DS.attr('string'),
  sightedAt: DS.attr('date'),
  cryptid: DS.belongsTo('cryptid'),
  witnesses: DS.hasMany('witness')
});
