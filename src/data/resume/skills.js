const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Data Analytics'],
  },
  {
    title: 'API',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Latex',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Analytics'],
  },
  {
    title: 'Oracle Analytics Cloud',
    competency: 3,
    category: ['Data Analytics'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Analytics'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages', 'Data Analytics'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Analytics'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#F8BD82',
  '#EE6E6E',
  '#BEADAD',
  '#CFB7A5',
  '#BA6767',
  '#B48978',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
