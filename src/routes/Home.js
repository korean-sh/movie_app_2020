import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //axios는 항상 빠르지 않다 > 그래서 늦는다는걸 함수에게 알려야함(await)
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Lodaing...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

//import PropTypes from "prop-types";

/*
function Food({ name, city, rating}){
  //console.log({ name });
  return <div>
      <h1>I like { name }.</h1>
      <h2>in { city }</h2>
      <h4>{rating}/5.0</h4>
    </div>
}

// Food argument validation
// Name is only propTypes
Food.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [{
  id:1,
  name: "kimchi",
  city: "korea",
  rating: 5
},
{
  id:2,
  name: "ramen",
  city: "japan",
  rating: 4.3
},
{
  id:3,
  name: "chukumi",
  city: "china",
  rating: 3
}
];
*/
/*
Not Good
function renderFood(dish){
  return <Food name={dish.name} city={dish.city}/>
};

return <div>{foodILike.map(renderFood)}</div>;
*/
/*
function App() {
  return( 
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name = {dish.name} city = {dish.city} rating ={dish.rating}/>
    ))}
  </div>
  );
}
*/
// object
//state를 사용하면 나중에 문제가 생길 수 있음
/*
  state = {
    count: 0
  };
  //setState > state refresh > render function setState 사용하지 않으면 render 호출이 안됨.
  add = () => {
    //console.log("add")
    //this.setState({count: this.state.count + 1}) //not Recommand
    this.setState(current => ({count: this.state.count + 1}))
  };
  minus = () => {
    //console.log("minus")
    this.setState(current => ({count: this.state.count - 1}))
  };
  componentDidMount(){

  }
  render(){
    return( <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }*/
