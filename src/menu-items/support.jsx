// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    },
     {
      id: 'Student-List',
      title: 'student-list',
      type: 'item',
      url: '/student-list',
     icon: icons.QuestionOutlined //any icons we can give
    },
     {
      id: 'Institute-List',
      title: 'institute-List',
      type: 'item',
      url: '/institute-List',
     icon: icons.QuestionOutlined //any icons we can give
    },
     {
      id: 'Department-List',
      title: 'department-List',
      type: 'item',
      url: '/department-List',
     icon: icons.QuestionOutlined //any icons we can give
    },
     {
      id: 'Event-List',
      title: 'event-List',
      type: 'item',
      url: '/event-List',
     icon: icons.ChromeOutlined //any icons we can give
    }
  ]
};

export default support;
