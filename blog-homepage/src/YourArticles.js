import React, {Component} from 'react';
import bookmark from './bookmark.png';

class ForYou extends Component {
    constructor(props) {
        super(props);
        this.state = {sectionTitle: "For you"}
    }

    render() {

        return (
            this.props.uData.map((article, i) =>
                <div key={i} className="box-two">
                    <div className="box-row">
                        <div className="box-cell">
                            <img src={article.image} className="text-wrap imgSize2" alt="logo" />
                            <div className="top">
                                <h4> {article.title}</h4>
                                <p> {article.description}</p>
                            </div>
                            <div className="bottom">
                                <img src={article.author.image} style={{ borderRadius: '50%', width: '11%'}} alt="author" />
                                <span>{article.author.name}<br />
                                    {(String(new Date(article.postedDate)).slice(4, 10))} - {article.minutesToRead} read
                                </span>
                                <img src = {bookmark} className="imgBk" />
                            </div>
                        </div>
                    </div>
                </div>
            )

        );
    }
}

export default ForYou;