import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let witness = this.store.createRecord('witness',{
      fName: "FakeF",
      lName: "FakeL",
      email: "fake@bignerdranch.com"
    });

    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-04-03'),
      witnesses: [witness]
    });

    let record2 = this.store.createRecord('sighting',{
      location: 'Atlanta',
      sightedAt: new Date('2017-04-03'),
      witnesses: [witness]
    });

    return [record1,record2];
  }

  // setupController(controller, model){
  //   this._super(controller,model);
  // }
});
