import React from "react";
import "../latestWork/lastestWork.css";
import { listOfLastestWorks } from "./listOfLastestWorks";
import LatestCard from "./card";

const LatestWorks = () => {
  return (
    <section>
      <h5 className="latestWorkText">Latest Work</h5>
      <div className="latestWork">
        {listOfLastestWorks.map((work, index) => (
          <LatestCard
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestWorks;
