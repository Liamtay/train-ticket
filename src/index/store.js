import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    //默认state数据
    {
        from: '北京',
        to: '上海',
        isCitySelectorVisible: false,
        currentSelectingLeftCity: false,
        cityData: null,
        isLoadingCityData: false,
        isDateSelectorVisible: false,
        departDate: Date.now(),
        highSpeed: false,
    },
    applyMiddleware(thunk)
);