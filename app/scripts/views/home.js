define([
        'backbone.marionette',
        'twig',
        'text!template/home.html.twig'
    ],
    function(Marionette, Twig, HomeTemplate) {
        'use strict';

        var HomeView = Marionette.ItemView.extend({
            initialize: function() {
                console.log("initialize a Home View");
            },
            template: function(data) {
                var template = Twig.twig({
                    data: HomeTemplate
                });
                return template.render(data);
            }
        });

        return HomeView;

    });
