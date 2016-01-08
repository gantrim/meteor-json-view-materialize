// Write your package code here!
Template.jsonView.rendered = function () {
//Template.jsonView.onRendered(function () {
    var instance = this;
    Tracker.autorun(function () {
        var json = instance.view.lookup('json')();
        var options = instance.view.lookup('options')();
        instance.$('.json-view').JSONView(json || {}, options || {});
    });
};
