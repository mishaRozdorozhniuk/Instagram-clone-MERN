import './Tab.scss';

const TabContent = ({ title, setSelectedTab, index }) => {
  return (
    <li className="tab-item">
      <button className="tab-btn" onClick={() => setSelectedTab(index)}>
        {title}
      </button>
    </li>
  );
};

export default TabContent;
