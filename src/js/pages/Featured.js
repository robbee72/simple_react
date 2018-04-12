import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Javascript",
      "HTML",
      "CSS",
      "React",
      "Ruby on Rails",
      "git",
      "dataBases",
      "concepts",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Kentucky Derby ",
      "Deadmau5 Live",
      "Solo: A Star Wars Story",
      "Insert Ad here",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}
