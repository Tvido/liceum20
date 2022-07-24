import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/main',
        component: lazy(() => import('./views/dashboard/DashDefault'))
      },
      {
        exact: true,
        path: '/service-territory',
        component: lazy(() => import('./views/main/ServiceTerritory'))
      },
      {
        exact: true,
        path: '/rules-of-admission',
        component: lazy(() => import('./views/main/RulesOfAdmission'))
      },
      {
        exact: true,
        path: '/educational-programs',
        component: lazy(() => import('./views/main/EducationalPrograms'))
      },
      {
        exact: true,
        path: '/evaluation-criteria',
        component: lazy(() => import('./views/main/EvaluationCriteria'))
      },
      {
        exact: true,
        path: '/annual-plan',
        component: lazy(() => import('./views/main/AnnualPlan'))
      },
      {
        exact: true,
        path: '/annual-report',
        component: lazy(() => import('./views/main/AnnualReport'))
      },
      {
        exact: true,
        path: '/estimates-and-financial-statements',
        component: lazy(() => import('./views/main/EstimatesAndFinancialStatements'))
      },
      {
        exact: true,
        path: '/food',
        component: lazy(() => import('./views/main/Food'))
      },
      {
        exact: true,
        path: '/bullying',
        component: lazy(() => import('./views/main/Bullying'))
      },
      {
        exact: true,
        path: '/covid',
        component: lazy(() => import('./views/main/Covid'))
      },
      {
        exact: true,
        path: '/terms-of-availability',
        component: lazy(() => import('./views/add/TermsOfAvailability'))
      },

      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/test',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      {
        exact: true,
        path: '/basic/collapse',
        component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: true,
        path: '/45',
        component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: true,
        path: '/basic/typography',
        component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: true,
        path: '/tables/bootstrap',
        component: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: true,
        path: '/maps/google-map',
        component: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: true,
        path: '/sample-page',
        component: lazy(() => import('./views/extra/SamplePage'))
      },
      // {
      //   exact: true,
      //   path: '/lessons-schedule',
      //   component: lazy(() => import('./views/info/LessonsSchedule'))
      // },
      {
        exact: true,
        path: '/lessons-schedule',
        component: lazy(() => import('./views/info/LessonsSchedule'))
      },
      {
        exact: true,
        path: '/contacts',
        component: lazy(() => import('./views/info/Contacts'))
      },
      {
        exact: true,
        path: '/terms-of-availability',
        component: lazy(() => import('./views/add/TermsOfAvailability'))
      },
      {
        exact: true,
        path: '/memorandum-on-cooperation',
        component: lazy(() => import('./views/add/MemorandumOnCooperation'))
      },
      {
        exact: true,
        path: '/additional-educational-services',
        component: lazy(() => import('./views/add/AdditionalEducationalServices'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL} />
      }
    ]
  }
];

export default routes;
