// For Context Menus
chrome.contextMenus.create(
    {
        id: "mediumIncognito",
        title: "Open Medium in Incognito",
    }
);

chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "mediumIncognito") {
        mediumIncognito();
    }
});

// For Tabs
function mediumIncognito() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        chrome.windows.create({ url: tabs[0].url, incognito: true });
    });
}

chrome.action.onClicked.addListener(()=>{
    mediumIncognito();
});

chrome.commands.onCommand.addListener(function (command) {
    if (command == "mediumIncognito") {
        mediumIncognito();
    }
});
