import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  BLOCKCHAIN: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full-Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Blockchain',
    value: PROJECT_CATEGORY.BLOCKCHAIN,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: '/editMentor.png',
    title: 'editmentor.com - Online video editing training platform',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `It revolutionizes video education by integrating the technical skills of video creation.`,
    repoLink: '',
    sourceLink: 'https://editmentor.com/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/synergy.png',
    title: 'synergy-nodes.vercel.app - Stake and Grow Your Crypto Holdings!',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
    ],
    description: `Staking is the gateway to passive income in the world of cryptocurrencies. By staking your tokens with us, you actively contribute to the network's security and consensus, while earning attractive rewards in return`,
    repoLink: '',
    sourceLink: 'https://synergy-nodes.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
    title: 'Acteria.com - Security Compliance Tool',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: `Unified Regulations Simplified Compliance tool. Acteria Strengthens the Governance Over Regulations, And Helps Organizations Achieve Compliance Easily.`,
    repoLink: '',
    sourceLink: 'https://acteria.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Thirty-Thiry Coffee - E-Commerce Project',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Django'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: 'E-commerce platform which users can sell coffee products for all coffee lovers out there.',
    sourceLink: 'https://thirty-thirtycoffee.com/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/alexlab.png',
    title: 'Kitchen Store  - E-Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind css'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'The e-commerce to buy kitchen related items. College final year project base on Servlets and JSP (Java)',
    repoLink: 'https://github.com/shadowblazer07/ecommerce-java-project',
    sourceLink: 'https://app.alexlab.co/',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },

  // Blockchain Project
  {
    imgSrc: '/zigzag.png',
    title: 'Trading Platform on Arbitrum & ZK Sync',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(BACKEND_SKILLS, 'Solidity'),
    ],
    description: 'CEX & Bridge with limit orders, order book on Blockchain',
    repoLink: 'https://github.com/AlterShadow/Dex_TON',
    sourceLink: 'https://zigzag-exchange.netlify.app/',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
  // Blockchain Project
  {
    imgSrc: '/tondex.png',
    title: 'Dex on TON network',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(BACKEND_SKILLS, 'FunC'),
    ],
    description: 'Decentralized Exchange on TON network using Ston.fi SDK',
    repoLink: 'https://github.com/ShadowBlazer07/Dex_TON',
    sourceLink: 'https://forfriends.me',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
];
