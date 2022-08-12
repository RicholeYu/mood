import "./App.css";
import { useState } from "react";
import headImg from "./assets/head.png";
import greateImg from "./assets/greate.png";
import normalImg from "./assets/normal.png";
import emptyImg from "./assets/empty.png";

const data = [
  {
    num: 86,
    date: "六",
    active: false,
    spec: false,
  },
  {
    num: 80,
    date: "日",
    active: false,
    spec: false,
  },
  {
    num: null,
    date: "一",
    active: false,
    spec: false,
  },
  {
    num: 90,
    date: "二",
    active: false,
    spec: false,
  },
  {
    num: 92,
    date: "三",
    active: false,
    spec: false,
  },
  {
    num: 97,
    date: "四",
    active: false,
    spec: false,
  },
  {
    num: 81,
    date: "五",
    active: false,
    spec: true,
  },
];

function App() {
  const [list, setList] = useState(data);

  return (
    <div className="page-mood-index">
      <div className="ct">
        <h3>
          <img className="head-img" src={headImg} />
          <span className="name">李强</span>
        </h3>
        <h4 className="average">88</h4>
        <p>周平均心情指数</p>
      </div>

      <ul className="week">
        <div className="separation se1"></div>
        <div className="separation se2"></div>
        {list.map((item, index) => {
          const height = item.num ? `calc(0.${item.num} * 275px)` : "87px";
          const isGreate = item.num && item.num >= 90;
          const isNormal = item.num && item.num <= 90;
          const isEmpty = item.num === null;
          const img = isGreate ? greateImg : isNormal ? normalImg : emptyImg;
          const className = [
            isEmpty ? "empty" : "",
            isGreate ? "greate" : "",
            isNormal ? "normal" : "",
            item.active ? "active" : "",
            item.spec ? "spec" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const deleteStyle = {
            animationDelay: `${index * 0.1}s`,
          };

          return (
            <li
              key={item.date}
              onClick={() =>
                item.num !== null &&
                setList((list) => {
                  return list.map((listItem) => ({
                    ...listItem,
                    active: listItem.date === item.date,
                  }));
                })
              }
            >
              <div
                style={{
                  ...deleteStyle,
                  maxHeight: height,
                }}
                className={["box " + className]}
                data-num={item.num}
              >
                <div style={deleteStyle} className="num">
                  {item.num}
                </div>
                <img style={deleteStyle} src={img} className="img" />
              </div>
              <p style={deleteStyle} className={["date " + className]}>
                {item.date}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
