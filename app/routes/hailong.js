import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id:1,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07')
      },
      {
        id:2,
        location: 'Asilomar',
        sightedAt: new Date('2016-03-07')
      }
    ];
  }
});
