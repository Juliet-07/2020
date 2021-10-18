import React from "react";
import { Flex } from "../../../../components/Flex";

const journals = [
  {
    date: "02-JAN-2021",
    title: "The beauty of Technology",
    content:
      "Lorem ipsum dolor sit amet, consectur adipiscing elit. Morbi lectus sapien, elementum sagittis nisl eu, condimentum condimentum nibh. Cras sit amet ultricies quam. Cras auctor metus id mauris pulvinar, at sodales lacus dictum. Cras malesuada fringilla risus quis tincidunct erat lobortis quis",
  },
  {
    date: "18-DEC-2020",
    title: "The effects of social media on quality of information",
    content:
      "Lorem ipsum dolor sit amet, consectur adipiscing elit. Morbi lectus sapien, elementum sagittis nisl eu, condimentum condimentum nibh. Cras sit amet ultricies quam. Cras auctor metus id mauris pulvinar, at sodales lacus dictum. Cras malesuada fringilla risus quis tincidunct erat lobortis quis",
  },
  {
    date: "12-DEC-2020",
    title: "Coffee and it's side effects on developers",
    content:
      "Lorem ipsum dolor sit amet, consectur adipiscing elit. Morbi lectus sapien, elementum sagittis nisl eu, condimentum condimentum nibh. Cras sit amet ultricies quam. Cras auctor metus id mauris pulvinar, at sodales lacus dictum. Cras malesuada fringilla risus quis tincidunct erat lobortis quis",
  },
];

const index = () => {
  return (
    <div className="rightSideContainer">
      <div className="title">
        <p className="caption">My Journals</p>
        <div className="line" />
      </div>
      <div className="journalContainer">
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {journals.map((data, index) => (
            <div key={index} className="journalContent">
              <p className="date">{data.date}</p>
              <p className="titleRight">{data.title}</p>
              <p className="content">{data.content}</p>
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
};
export default index;
