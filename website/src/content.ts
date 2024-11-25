export interface Project {
    name: string,
    description: string, 
    bannerImage: string
    pullRequest: string,
    authorName: string,
    authorGitHub: string
}

export const projects: Array<Project> = [
    {
       name: "Blade",
       description: "It acts a basic ad-blocker and also removes annoying pop-ups that you may receive when you use an ad-blocker.",
       bannerImage: "/banners/blade-banner.png",
       authorName: "Elijah Spitzer",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/54",
       authorGitHub: "https://github.com/grandell1234"
    },
    {
       name: "TabRegex",
       description: "It provides a way to simply just enter a regex, and close all the tabs that matches that specific regex",
       bannerImage: "banners/tabregex-banner.png",
       authorName: "Arnav Kumar",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/65",
       authorGitHub: "https://github.com/arnav-kr"
    },
    {
       name: "ContextTabs",
       description: "Organize and switch between tab groups for different contexts like Work, Personal, and Research.",
       bannerImage: "banners/contexttabs-banner.gif",
       authorName: "Nikos",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/58",
       authorGitHub: "https://github.com/NikosDev-cmd"
    },
    {
       name: "Perceptron",
       description: "This extension simulates different types of colour blindness (Deuteranopia, Protanopia, and Tritanopia) on any webpage, allowing users to experience how colourblind individuals perceive the content.",
       bannerImage: "banners/perceptron-banner.gif",
       authorName: "Amogh Agrawal",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/68",
       authorGitHub: "https://github.com/amoghagrawal"
    },
    {
       name: "Fast Note Taker",
       description: "Fast note taker allows you to take quick notes on whichever website you find yourself on. It comes with search functionality and the ability to import/export your notes if you're switching browsers.",
       bannerImage: "banners/fastnotetaker-banner.png",
       authorName: "Kirolos Gerges",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/50",
       authorGitHub: "https://github.com/koko9xxx"
    },
    {
       name: "Slang Translator",
       description: "Evere found yourself on Twitter or an article not understanding a word people are saying? What does 'yap' mean or what does it mean to 'unalive' someone? no fear fr",
       bannerImage: "banners/slangtranslator-banner.gif",
       authorName: "Aaradhya Panda",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/48",
       authorGitHub: "https://github.com/pizzalover125"
    }, 
    {
       name: "Slack Status",
       description: "There are extensions to show on your Discord profile where you're on the internet, allowing others to see and keep you accountable. There's none like that for Slack... until now!",
       bannerImage: "banners/slackstatus-banner.gif",
       authorName: "Mahad Kalam",
       pullRequest: "https://github.com/hackclub/browserbuddy/pull/44",
       authorGitHub: "https://github.com/SkyfallWasTaken"
    },
];