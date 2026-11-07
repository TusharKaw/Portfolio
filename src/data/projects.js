import bankopolyImage from '../assets/bankopoly.avif';
import betbyheartImage from '../assets/betbyheart.jpg';
import royalChessImage from '../assets/royalchess.jpg';
import nachosNFTImage from '../assets/nachos.jpg';
import chatroomImage from '../assets/chatroom.png';
import yourcrush from '../assets/yourcrush.svg';
import imagine from '../assets/imagine.png';
import prodevtool from '../assets/prodevtool.svg';
import voxelImage from '../assets/voxel.png';
import ActiveShooter from '../assets/Activeshooter.jpg';
import Shivshiksha from '../assets/shivshiksha.jpg';
import Barrelblast from '../assets/barrelblast.jpg';
import findmeetchat from '../assets/findmeetchat.jpg';
import connect from '../assets/connect.webp';
import aiims from '../assets/aiims.jpeg';
import metaschool from '../assets/metaschool.png';
import videosurf from '../assets/videosurf.png';
import nevacms from '../assets/nevacms.png';
import nevaebook from '../assets/nevaebook.png';

export const projectFilters = [
  { id: 'all', name: 'All' },
  { id: 'websites', name: 'Websites' },
  { id: 'games', name: 'Games' },
  { id: 'apps', name: 'Apps' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'ai', name: 'AI' }
];

const projects = [
  {
    id: 1,
    title: 'National eVidhan Application',
    techStack: 'C# Dotnet',
    description: 'One Nation One Application, an online platform built for Delhi Legislative Assembly for the digitization of Legislative Proceedings and Bills.',
    teamSize: '16',
    category: ['websites', 'apps'],
    image: nevacms,
    url: 'https://cms.neva.gov.in/'
  },
  {
    id: 2,
    title: 'National eVidhan e-book',
    techStack: 'C# Dotnet',
    description: 'One Nation One Application, an online platform built to store and display all the Legislative proceedings and bills, Built for all States & UTs of India.',
    teamSize: '16',
    category: ['websites', 'apps'],
    image: nevaebook,
    url: 'https://ebook.neva.gov.in/'
  },
  {
    id: 3,
    title: 'YourCrush.ai',
    techStack: 'Next.js & Node.js',
    description: 'An AI platform where user can create & chat with various AI companions.',
    teamSize: '4',
    category: ['ai', 'websites'],
    image: yourcrush,
    url: 'https://yourcrush.ai/'
  },
  {
    id: 4,
    title: 'Imagine Labs',
    techStack: 'Next.js & Node.js',
    description: 'An AI platform where users can create Images and Videos using Prompts.',
    teamSize: '4',
    category: ['ai', 'websites'],
    image: imagine,
    url: 'https://yourcrush.ai/imagine-labs'
  },
  {
    id: 5,
    title: 'ProDevTool',
    techStack: 'Next.js & Node.js',
    description: 'An all-in-one utility tool platform where users can find and use several tools to boost their productivity.',
    teamSize: '4',
    category: ['websites'],
    image: prodevtool,
    url: 'https://prodevtool.com'
  },
  {
    id: 6,
    title: 'Bankopoly.io',
    techStack: 'Unity & Node.js',
    description: 'A blockchain-based NFT WebGL Game on the Cardano network, featuring secure wallet connection, NFT skins, and multiplayer/vsBot gameplays.',
    teamSize: '5',
    category: ['games', 'blockchain'],
    image: bankopolyImage,
    url: 'https://bankopoly.io/'
  },
  {
    id: 7,
    title: 'Active Shooter',
    techStack: 'Unreal Engine',
    description: 'A VR training simulation developed for Abu Dhabi Police, integrating KAT VR, Forcetube Provolver, and MetaHumans for an immersive training experience.',
    teamSize: '5',
    category: ['games'],
    image: ActiveShooter,
    url: 'https://www.artstation.com/artwork/lGXm4V'
  },
  {
    id: 8,
    title: 'NachosNFT',
    techStack: 'React & Node.js',
    description: 'A unique web-based platform built on the Cardano blockchain, centered around upgradable NFTs and competitive gameplay mechanics.',
    teamSize: '4',
    category: ['websites', 'blockchain'],
    image: nachosNFTImage,
    url: 'https://www.nachoxyz.com/'
  },
  {
    id: 9,
    title: 'Bet By Heart',
    techStack: 'React & Node.js',
    description: 'An interactive online betting platform featuring games like Blackjack, Teen Patti, Chess, Ludo, and Derby. Integrated referral and rewards systems to boost user engagement.',
    teamSize: '5',
    category: ['websites'],
    image: betbyheartImage,
    url: 'https://dev-game.abhiwandemos.com/teenpatti/home'
  },
  {
    id: 10,
    title: 'Video Surfer',
    techStack: 'React & Node.js',
    description: 'A video surfing website, where most popular videos are dropped via Admin panel, using a Bulk videos importer mechanics, allowing the website to attain 100s of videos at once.',
    teamSize: '2',
    category: ['websites'],
    image: videosurf,
    url: 'https://github.com/Mohityadav94161/video_surfing'
  },
  {
    id: 11,
    title: 'Royal Chess',
    techStack: 'MERN & Native',
    description: 'A live interactive online chess game with power-ups, transforming traditional chess into a gamified experience with over 500+ active users within the first month.',
    teamSize: '4',
    category: ['websites', 'games', 'blockchain'],
    image: royalChessImage,
    url: 'https://beta.royalchessclub.io/'
  },
  {
    id: 12,
    title: 'Barrel Blast',
    techStack: 'Phaser.js',
    description: 'Barrel Blast, a fast-paced, web-based arcade game built using Phaser.js, designed to offer quick and addictive gameplay.',
    teamSize: '2',
    category: ['websites', 'games'],
    image: Barrelblast,
    url: 'https://barrel-test.vercel.app/'
  },
  {
    id: 13,
    title: 'Unbounded Racing',
    techStack: 'Unity & Node.js',
    description: 'A voxel art styled racing game, with PvP and vsBots mechanics, game login based on Cardano blockchain wallets.',
    teamSize: '12',
    category: ['games', 'blockchain'],
    image: voxelImage,
    url: 'https://voxel-game.abhiwandemos.com/'
  },
  {
    id: 14,
    title: 'Shiv Shiksha',
    techStack: 'React & Node.js',
    description: 'A website for a charitable organization focused on supporting underprivileged children through education, healthcare, and community programs.',
    teamSize: '2',
    category: ['websites'],
    image: Shivshiksha,
    url: 'https://shivshiksha.abhiwandemos.com/'
  },
  {
    id: 15,
    title: 'Find Meet Chat',
    techStack: 'Next.js & Node.js',
    description: 'A Smash or Pass based cool web-app, where users either Smash or Pass you based on your Images / Portfolio, smashed ones can chat as well.',
    teamSize: '2',
    category: ['websites', 'apps'],
    image: findmeetchat,
    url: 'https://github.com/TusharKaw/Find-Meet-Chat_v2'
  },
  {
    id: 16,
    title: 'Connect',
    techStack: 'Next.js & Node.js',
    description: 'A web-app for Artists, Singers, Musicians, Actors, Models, etc, where they can create their profiles and connect with Industries to get opportunities.',
    teamSize: '2',
    category: ['websites', 'apps'],
    image: connect,
    url: 'https://github.com/TusharKaw/Connect'
  },
  {
    id: 17,
    title: 'ADHD Diagnostic Game - AIIMS',
    techStack: 'Unreal Engine',
    description: 'A 2D game created for AIIMS Delhi featuring 10 activities designed by doctors for children with ADHD. The game tracks response time, patterns, and behavior.',
    teamSize: '6',
    category: ['games', 'apps'],
    image: aiims,
    url: 'https://googleplay.com/store/apps'
  },
  {
    id: 18,
    title: 'Meta School VR',
    techStack: 'Unreal Engine',
    description: 'A VR based Chemistry lab where users can perform Chemistry activities inside a virtual 3D lab, and see their results before performing in real world.',
    teamSize: '7',
    category: ['apps'],
    image: metaschool,
    url: 'https://googleplay.com/store/apps'
  },
  {
    id: 19,
    title: 'Personal Chatroom',
    techStack: 'React & Node.js',
    description: 'A private discord like chatroom made by Me, I deploy this time to time on TOR browser with variable .onion links, to chat privately.',
    teamSize: '2',
    category: ['websites'],
    image: chatroomImage,
    url: 'https://github.com/TusharKaw/Personal-Chatroom'
  }
];

export default projects;
