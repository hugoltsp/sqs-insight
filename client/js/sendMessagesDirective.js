module.exports = SendMessageDirective;

SendMessageDirective.$inject = ['queueSocket'];

function SendMessageDirective(queueSocket) {

    return {
        restrict: 'E',
        scope: {
            queueName: '=queue'
        },
        link: function(scope) {

        },
        templateUrl: '/partials/sendMessage.html'
    };

}