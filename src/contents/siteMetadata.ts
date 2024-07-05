export const siteMetadata = {
  // siteUrl: 'https://webjam.cn',
  siteUrl: 'http://localhost:3300/',
  siteLogo: '/images/avator.jpeg',
  siteShortTitle: 'YunFan',
  siteTitle: '云帆的个人网站',
  author: '云帆',
  locationIcon: '🇨🇳',
  timeZone: 'Asia/Shanghai',
  image: '/images/avator.jpeg',
  siteDescription:
    '经验丰富的软件工程师，尤其是前端方面的软件工程师，热衷于创建像素完美的网络体验。同时热衷于与团队合作，交付高效、可扩展且具有视觉吸引力的 Web 应用程序。',
};

export const author = {
  name: '云帆',
  city: '深圳',
  locationIcon: '🇨🇳',
  status: '喜茶-在职',
  description:
    '多一些专业, 多一些极客精神, 这既是对自身的勉励, 也希望能呈现做出优秀的作品',
  workTogether: '可以邮箱、QQ、微信与我进行联系',
  calMeetingUrl: '13537107055',
  github_accounts: [
    {
      username: 'BlueOrgreen',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
};

export const featureSwich = {
  // chatGPT
  ai: false,
  meeting: true,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: true,
};

export const socialAccounts = {
  email: '1936341390@qq.com',
  github: 'https://github.com/BlueOrgreen',
  qq: '1936341390',
};
