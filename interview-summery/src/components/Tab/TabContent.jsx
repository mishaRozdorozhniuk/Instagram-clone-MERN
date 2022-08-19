import './Tab.scss';

const TabContent = ({ title, btnClass, itemClass, setSelectedTab, index }) => {
  return (
    <li className={itemClass}>
      <button className={btnClass} onClick={() => setSelectedTab(index)}>
        {title}
      </button>
    </li>
  );
};

export default TabContent;
