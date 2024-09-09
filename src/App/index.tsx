import React, { useEffect, useState } from 'react';
import './index.less'; 

export default function App() {
  const [linkList, setLinkList] = useState([
    {
      tab: 'test',
      urlList: [
        { pathname: 'test', url: 'http://' },
        { pathname: 'test2', url: 'http://' },
      ],
    },
  ]);

  const [newTab, setNewTab] = useState('');
  const [newAddressName, setNewAddressName] = useState('');
  const [newAddressURL, setNewAddressURL] = useState('');

  const saveToLocalStorage = (updatedLinkList: any) => {
    localStorage.setItem('linkListtablinks2024', JSON.stringify(updatedLinkList));
  };



  const handleClick = (url: any) => {
    window.open(url, '_blank');
  };

  const addNewTab = () => {
    if (newTab.trim() === '') return;
    const updatedLinkList = [...linkList, { tab: newTab, urlList: [] }];
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
    setNewTab('');
  };

  const deleteTab = (tabIndex: any) => {
    const updatedLinkList = [...linkList];
    updatedLinkList.splice(tabIndex, 1);
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
  };

  const addNewAddress = (tabIndex: any) => {
    if (newAddressName.trim() === '' || newAddressURL.trim() === '') return;
    const updatedLinkList = linkList.map((item, index) => {
      if (index === tabIndex) {
        return {
          ...item,
          urlList: [...item.urlList, { pathname: newAddressName, url: newAddressURL }],
        };
      }
      return item;
    });
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
    setNewAddressName('');
    setNewAddressURL('');
  };

  const deleteAddress = (tabIndex: any, addressIndex: number) => {
    const updatedLinkList = linkList.map((item, index) => {
      if (index === tabIndex) {
        const updatedUrlList = [...item.urlList];
        updatedUrlList.splice(addressIndex, 1);
        return {
          ...item,
          urlList: updatedUrlList,
        };
      }
      return item;
    });
    setLinkList(updatedLinkList);
    saveToLocalStorage(updatedLinkList);
  };

  return (
    <div className="mainrootT-tablinks-20240828-2-3-01">
      {linkList?.map((item, index) => (
        <div className="tabContainer" key={index}>
          <div className="tabTitle">{item.tab}</div>
          {item.urlList?.map((url, urlIndex) => (
            <div key={url.url} className="addressContainer">
              <div className="addressName" onClick={() => handleClick(url.url)} title={url.url}>{url.pathname}</div>
            </div>
          ))}

        </div>
      ))}
    </div>
  );
}
