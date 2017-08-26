// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData} />
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('turtles');
  }

  getYouTubeVideos(query) {
    var options = {
      query: query,
      key: this.props.API_KEY
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleVideoListEntryTitleClick(video) {
    // console.log('handle title click func');
    this.setState({
      currentVideo: video
    });
  }



  render() {
    // console.log('current video in app: ', this.state.currentVideo);
    return (
      <div>
        <Nav
          handleSearchInputChange={this.getYouTubeVideos.bind(this)}
        />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videos}
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
