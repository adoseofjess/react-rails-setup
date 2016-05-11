var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _benches = {};
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      _benches = payload.benches;
      break;
  }
};

window.BenchStore = BenchStore;

module.exports = BenchStore