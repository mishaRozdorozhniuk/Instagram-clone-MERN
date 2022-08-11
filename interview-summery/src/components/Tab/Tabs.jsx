import React from 'react';
import TabContent from './TabContent';

const Tabs = ({ children, selectedTab, setSelectedTab }) => {
  return (
    <div>
      <ul className="tab-list">
        {children.map((item, index) => (
          <TabContent
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      <section>{children[selectedTab]}</section>
    </div>
  );
};

export default Tabs;
