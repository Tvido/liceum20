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
        component: lazy(() => import('./views/main/Main'))
      },

      // Методична робота
      {
        exact: true,
        path: '/elementary-school',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/ElementarySchool'))
      },
      {
        exact: true,
        path: '/humanitarian-disciplines',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/HumanitarianDisciplines'))
      },
      {
        exact: true,
        path: '/social-disciplines',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/SocialDisciplines'))
      },
      {
        exact: true,
        path: '/mathematics-physics-computer-science',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/MathematicsPhysicsComputerScience'))
      },
      {
        exact: true,
        path: '/natural-disciplines',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/NaturalDisciplines'))
      },
      {
        exact: true,
        path: '/foreign-languages',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/ForeignLanguages'))
      },
      {
        exact: true,
        path: '/aesthetic-disciplines',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/AestheticDisciplines'))
      },
      {
        exact: true,
        path: '/subject-weeks',
        component: lazy(() => import('./views/main/MethodicalWork/MethodicalDecades'))
      },

      // Виховна робота

      {
        exact: true,
        path: '/take-care-of-the-book',
        component: lazy(() => import('./views/main/EducationalWork/Library/EducationalActivities/TakeCareOfTheBook'))
      },
      {
        exact: true,
        path: '/physical-culture-protection-of-ukraine-basics-of-health',
        component: lazy(() =>
          import('./views/main/MethodicalWork/MethodologicalAssociations/PhysicalCultureProtectionOfUkraineBasicsOfHealth')
        )
      },
      {
        exact: true,
        path: '/class-leaders',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/ClassLeaders'))
      },
      {
        exact: true,
        path: '/certification',
        component: lazy(() => import('./views/main/MethodicalWork/Certification'))
      },
      {
        exact: true,
        path: '/courses',
        component: lazy(() => import('./views/main/MethodicalWork/Courses'))
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
      // {
      //   exact: true,
      //   path: '/basic/collapse',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      // },
      // {
      //   exact: true,
      //   path: '/45',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      // },
      // {
      //   exact: true,
      //   path: '/basic/typography',
      //   component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      // },
      // {
      //   exact: true,
      //   path: '/tables/bootstrap',
      //   component: lazy(() => import('./views/tables/BootstrapTable'))
      // },
      // {
      //   exact: true,
      //   path: '/maps/google-map',
      //   component: lazy(() => import('./views/maps/GoogleMaps'))
      // },
      // {
      //   exact: true,
      //   path: '/sample-page',
      //   component: lazy(() => import('./views/extra/SamplePage'))
      // },

      // Info
      {
        exact: true,
        path: '/license',
        component: lazy(() => import('./views/info/About/License'))
      },
      {
        exact: true,
        path: '/history',
        component: lazy(() => import('./views/info/About/History'))
      },
      {
        exact: true,
        path: '/administration',
        component: lazy(() => import('./views/info/About/Administration'))
      },
      {
        exact: true,
        path: '/strategy',
        component: lazy(() => import('./views/info/About/Strategy'))
      },
      {
        exact: true,
        path: '/regulations',
        component: lazy(() => import('./views/info/About/Regulations'))
      },
      {
        exact: true,
        path: '/internal-system-of-ensuring-the-quality-of-education',
        component: lazy(() => import('./views/info/About/InternalSystemOfEnsuring'))
      },
      {
        exact: true,
        path: '/academic-integrity',
        component: lazy(() => import('./views/info/About/AcademicIntegrity'))
      },
      {
        exact: true,
        path: '/orders',
        component: lazy(() => import('./views/info/About/Orders'))
      },      
      {
        exact: true,
        path: '/vacancies',
        component: lazy(() => import('./views/info/About/Vacancies'))
      },
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

      // Додатково

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
