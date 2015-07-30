import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: "Think of a way to constructively spend afternoon",
            isCompleted: false
        },
        {
            id: 2,
            title: "Bother Earl",
            isCompleted: true
        },
        {
            id: 3,
            title: "Reject projected life course",
            isCompleted: false
        }
    ]
});