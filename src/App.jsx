import React, { Component, lazy, Suspense } from 'react';
import './App.css';

const About = lazy(() => import(/*webpackChunkName:"about22"*/'./About.jsx'));

class App extends Component {

  state = { hasError: false };


  static getDerivedStateFromError (error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('触发1')

    return { hasError: true };
  }

  componentDidCatch (error, info) {
    // 你同样可以将错误日志上报给服务器
    //  console.log(error, info)
    //logErrorToMyService(error, info);
  }

  render () {
    if (this.state.hasError) {

      return <div>error</div>;

    }

    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About></About>
        </Suspense>
      </div>
    );
  }
}

export default App; 
