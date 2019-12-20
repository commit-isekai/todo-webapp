/* eslint linebreak-style: ["error", "windows"] */

// eslint-disable-next-line no-unused-vars
const toggleTabs = (() => {
  const burger = document.querySelector('.navbar-burger');
  const sidebar = document.querySelector('.navbar-menu');
  const tabs = document.querySelectorAll('.navbar-item');
  const tabsContent = document.querySelectorAll('.section');

  const deactivateAllTabs = () => {
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
  };

  const hideTabsContent = () => {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove('is-active');
    });
  };

  const getIndex = (el) => [...el.parentElement.children].indexOf(el);

  const activateTabsContent = (tab) => {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      deactivateAllTabs();
      hideTabsContent();
      activateTabsContent(tab);
      tab.classList.add('is-active');
    });
  });

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('is-active');
  });

  tabs[0].click();
})();
