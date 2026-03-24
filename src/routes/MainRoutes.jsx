import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import StudentList from '../pages/student/StudentList';
import StudentAdd from '../pages/student/StudentAdd';
import InstituteList from '../pages/Institute/InstituteList';
import DepartmentList from '../pages/department/DepartmentList';
import EventList from '../pages/event/EventList';
import StudentEdit from '../pages/student/StudentEdit';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },

     {
      path: 'Student-List',
      element: <StudentList/>
    },
     {
      path: 'Student-add',
      element: <StudentAdd/>
    },
    {
      path: 'Student-edit/:id',
      element: <StudentEdit/>
    },
     {
     path: 'Institute-List',
      element: <InstituteList/>
    },
     {
     path: 'Department-List',
      element: <DepartmentList/>
    },
     {
     path: 'Event-List',
      element: <EventList/>
    }
  ]
};

export default MainRoutes;
