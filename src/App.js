import React from 'react';
import axios from "axios";
import Movie from './Movie';
// import PropTypes from 'prop-types';



// const foodILike =[
//   {
//     id:1,
//     name: "kim",
//     image:"http://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B3%BC%EC%9D%BC#imgId=image_sas%3Ablog15365542%7C2%7C222214605003_538459872"
//     ,rating: 5
//   },
//   {
//     id:2,
//     name: "lee",
//     image:"http://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B3%BC%EC%9D%BC#imgId=image_sas%3Ablog132527175%7C13%7C222311152935_577663234"
//     ,rating: 4.8
//   },
//   {
//     id:3,
//     name: "na",
//     image:"http://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B3%BC%EC%9D%BC#imgId=image_sas%3Ablog4063522%7C12%7C222261724510_194658297"
//     ,rating: 5.5
//   },
//   {
//     id:4,
//     name: "jo",
//     image:"http://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B3%BC%EC%9D%BC#imgId=image_sas%3Ablog53960822%7C37%7C222297763843_1920871923"
//     ,rating: 4.7
//   }
// ];


// function Food({name, picture, rating}) {
//   return (
//     <div> 
//     <h2>I like {name}</h2>
//     <h4>{rating}/5</h4>
//     <img src={picture} alt={name}/>
//     </div>
//   );
 
// }
// Food.propTypes={
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food 
//         key={dish.id} 
//         name={dish.name} 
//         picture={dish.image}
//         rating={dish.rating}
//         />

//       ))}
     
//     </div>
//   );
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log('hr');
  // }
  state = {
    // count: 0,
    isLoading: true,
    movies: []
  };

  // add = () => {
  //   this.setState(current => ({
  //     count: current.count + 1
  //   }));
  // };

  // remove = () => {
  //   this.setState(current => ({
  //     count: current.count - 1
  //   }));
  // };
  getMovies = async () =>{
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //axios는 완료되기까지 시간이 좀 걸려서 async함수에있는 await을 넣었다.
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    //render다음 component가 mount되자마자 호출된다.
    //여기서 api로 부터 data를 fetching해준다
    // console.log("rerenderdddd");
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);
    this.getMovies();
  }
  

  // componentDidUpdate(){
  //   console.log("update");
  // }

  render() {
    // console.log("rendering");
    const { isLoading, movies} = this.state;
    return (
      // <div>
      //   <h1>Im a class: {this.state.count}</h1>
      //   <button onClick={this.add}>add</button>
      //   <button onClick={this.remove}>minus</button>
      // </div>
      <div>
        {isLoading ? "Loading..." : movies.map(movie => (
          // console.log(movie);
          // return( 
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
            />
          ))}
      </div>
    );
  };
}

export default App;