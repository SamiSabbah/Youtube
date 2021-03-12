import "./SearchPage.css";
import TuneOutlineIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlineIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://scontent.fgza4-1.fna.fbcdn.net/v/t31.0-1/c0.10.160.160a/p160x160/28947155_1379090628903098_4559679110454895141_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=dh1Dvjpwl6IAX_1fOqE&_nc_ht=scontent.fgza4-1.fna&tp=27&oh=47365b3dd6277b8711e4835cd5fbeb05&oe=606C6EEC"
        channel="Sami Sabbah"
        verified
        subs="660k"
        noOfVideos={65}
        description="nice channel that has alot of bla bla bla"
      />

      <hr />

      <VideoRow
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        views="2.3M Views"
        timestamp="3 days ago"
        channel="Sami Sabbah"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOF0UObQrNssPCDDilF7GwvlrW1QTu7DfrQ&usqp=CAU"
        subs="1.3M"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
      />
      <VideoRow
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        views="2.3M Views"
        timestamp="3 days ago"
        channel="Sami Sabbah"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxqJoosQJdGLhMVUrzaJfxVK5lvfCXk_Sug&usqp=CAU"
        subs="1.3M"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
      />
      <VideoRow
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        views="2.3M Views"
        timestamp="3 days ago"
        channel="Sami Sabbah"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcmaRlE8kcEbyQrkVaoC3H6U9kJmo-FYbqg&usqp=CAU"
        subs="1.3M"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
      />
    </div>
  );
};

export default SearchPage;
