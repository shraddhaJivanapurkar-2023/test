var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'observation', 'coolMethod', [arg0]);
};

module.exports.add = function (arg0,success, error)
{
    exec(success, error, 'RhemosBluetooth', 'add', [arg0])
}
