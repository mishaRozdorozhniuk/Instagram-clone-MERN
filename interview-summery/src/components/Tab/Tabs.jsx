import React from 'react';
import TabContent from './TabContent';

const Tabs = ({ children, btnClass, itemClass, selectedTab, setSelectedTab, className }) => {
  return (
    <div>
      <ul className={className}>
        {children.map((item, index) => (
          <TabContent
            btnClass={btnClass}
            itemClass={itemClass}
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
