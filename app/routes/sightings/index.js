import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-04-03')
    });

    let record2 = this.store.createRecord('sighting',{
      location: 'Atlanta',
      sightedAt: new Date('2017-04-03')
    });

    return [record1,record2];
  }

  // setupController(controller, model){
  //   this._super(controller,model);
  // }
});
