import React from "react";

// function Detail({location}){
//     console.log(location);
//     return <span>hello</span>;

// }
//url에 movie-detail로 치면 state가 없이 나와서 이부분을 핸드링 하려면 class형으로 바꿔야한다.
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // console.log(location.state);
    if(location.state === undefined){
        history.push("/");
        //state가 undefined면 자동적으로 홈으로 리다이렉트 시킨다. 
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;