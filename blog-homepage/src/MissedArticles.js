import React from 'react';

class Missed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sectionTitle: "For you"}
    }

    render() {

        return (
            this.props.mData.map((article, i) =>
            <div key={i} className="box-three">
                <div className="box-row">
                    <div className="box-cell">
                        <img src={article.image} className="imgSize3" alt="logo" />
                        <div className="top">
                            <h4> {article.title}</h4>
                            <p> {article.description}</p>
                        </div>
                        <div className="bottom">
                            <img src={article.author.image} style={{borderRadius: '50%', width: '10%'}} alt="author" />
                            <span>{article.author.name} <br />
                            {(String(new Date(article.postedDate)).slice(4, 10))} - {article.minutesToRead} read 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )

        );
    }    
}

export default Missed;