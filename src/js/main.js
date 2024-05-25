var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#reports}}' + //The loop over the reports was changed from {{#.}} to {{#reports}} to match the data structure expected by the template.
            '<article class="reports_item">' +
            '<a href="{{cover}}" target="_blank">' +
            '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" title="{{title}} Cover"/>' +
            '</a>' +
            '<footer class="reports_docs">' +
            '{{#documents}}' +
            '<h3 class="reports_title">' +
            '<a href="{{url}}" target="_blank" title="{{title}}">{{title}} <span>({{file_size}} {{file_type}})</span></a>' +
            '</h3>' +
            '{{/documents}}' +
            '</footer>' +
            '</article>' +
            '{{/reports}}'
        )
    },

    init: function (reportData) {
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, { reports: reports }));
    }
};

reportsWidget.init(reportData); //The reports object is passed to the template as { reports: reports } to ensure the template can access the reports properly.
