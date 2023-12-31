/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hitachi Vantara',
    position: 'Digital Insights & Big Data Analytics Intern',
    url: 'https://www.hitachivantara.com/en-us/home.html',
    startDate: '2023-02-13',
    endDate: '2023-08-31',
    summary: `Hitachi Vantara, a wholly-owned subsidiary of Hitachi, Ltd., guides its customers from what's now to what's next by solving their digital challenges.
    Working alongside each customer, the company applies its unmatched industrial and digital capabilities to their data and applications to benefit both business and society.
    More than 80% of the Fortune 100 trust Hitachi Vantara to help them develop new revenue streams, unlock competitive advantages, lower costs, enhance customer experiences, and deliver social and environmental value.`,
    highlights: [
      'Visualized and communicated the insights, patterns, and trends from complex data sets.',
      'Worked on tools like Oracle Analytics Cloud (OAC), Power BI, Pentaho, Tableau.',
      'Developed visually impactful dashboards in above tools to identify key metrics and transform raw data into meaningful, actionable format.',
    ],
  },
  {
    name: 'TWOWAITS TECHNOLOGIES',
    position: 'Web Development Intern',
    url: 'https://www.linkedin.com/company/twowaits-technologies/',
    startDate: '2022-01-01',
    endDate: '2022-02-01',
    summary: `TwoWaits Technologies aims to help improve quality of education 
    for millions of engineering graduates across India.`,
    highlights: [
      'Built responsive, accessible, and dynamic web pages to enable users to easily navigate site.',
      'Crafted userinterfaces with modern JavaScript frameworks, HTML5, and CSS3, which improved user satisfaction by 32%.',
      'Assisted in debugging and troubleshooting code issues to improve application performance.',
    ],
  },
];

export default work;
