import { Mongo } from 'meteor/mongo';

Counter = {};
Counter.get = function (name) {
    const doc = Counter.collection.findOne(name);
    if (doc) {
        return doc.count;
    } else {
        return 0;
    }
};

Counter.collection = new Mongo.Collection('counters-collection');
