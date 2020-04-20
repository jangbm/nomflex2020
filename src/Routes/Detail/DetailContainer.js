import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      cats: [
        { id: 1, name: "Production" },
        { id: 2, name: "Country" },
        { id: 3, name: "Vote-Count" }
      ],
      currentTab: "Production"
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  changeCats = userCat => {
    const cat = this.state.cats.find(c => c.name === userCat);
    this.setState({
      currentTab: cat.name
    });
  };

  render() {
    const { result, error, loading, cats, currentTab } = this.state;
    const { changeCats } = this;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        cats={cats}
        currentTab={currentTab}
        changeCats={changeCats}
      />
    );
  }
}
