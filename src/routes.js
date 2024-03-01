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
        path: '/',
        component: lazy(() => import('./views/main/Main'))
      },
      {
        exact: true,
        path: '/digest',
        component: lazy(() => import('./views/main/Digest'))
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
        path: '/aesthetic-disciplines',
        component: lazy(() => import('./views/main/MethodicalWork/MethodologicalAssociations/AestheticDisciplines'))
      },
      {
        exact: true,
        path: '/naotsbsou',
        component: lazy(() => import('./views/main/EducationalWork/Naotsbsou'))
      },
      {
        exact: true,
        path: '/german-unification-day',
        component: lazy(() => import('./views/main/EducationalWork/GermanUnificationDay'))
      },
      {
        exact: true,
        path: '/dup-2019',
        component: lazy(() => import('./views/main/EducationalWork/Dup2019'))
      },
      {
        exact: true,
        path: '/council-of-student-self-government',
        component: lazy(() => import('./views/main/EducationalWork/CouncilOfStudentSelfGovernment'))
      },
      {
        exact: true,
        path: '/musical-art',
        component: lazy(() => import('./views/main/EducationalWork/MusicalArt'))
      },
      {
        exact: true,
        path: '/theater',
        component: lazy(() => import('./views/main/EducationalWork/Theater'))
      },
      {
        exact: true,
        path: '/circles',
        component: lazy(() => import('./views/main/EducationalWork/Circles'))
      },
      {
        exact: true,
        path: '/career-guidance-work',
        component: lazy(() => import('./views/main/EducationalWork/CareerGuidanceWork'))
      },
      {
        exact: true,
        path: '/charity-actions',
        component: lazy(() => import('./views/main/EducationalWork/CharityActions'))
      },
      {
        exact: true,
        path: '/school-projects',
        component: lazy(() => import('./views/main/EducationalWork/SchoolProjects'))
      },
            {
        exact: true,
        path: '/maria-stepanivna-tomin',
        component: lazy(() => import('./views/main/PsychologicalService/PracticalPsychologist/MariaStepanivnaTomyn'))
      },
      {
        exact: true,
        path: '/psychologist-pupils',
        component: lazy(() => import('./views/main/PsychologicalService/PracticalPsychologist/PsychologistPupils'))
      },
      {
        exact: true,
        path: '/psychologist-parents',
        component: lazy(() => import('./views/main/PsychologicalService/PracticalPsychologist/PsychologistParents'))
      },
      {
        exact: true,
        path: '/psychologist-teachers',
        component: lazy(() => import('./views/main/PsychologicalService/PracticalPsychologist/PsychologistTeachers'))
      },
      {
        exact: true,
        path: '/iryna-ivanivna-letsyn',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/IrynaIvanivnaLetsyn'))
      },

      {
        exact: true,
        path: '/pedagogue-pupils',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/EducationalWork/PedagoguePupils'))
      },
      {
        exact: true,
        path: '/pedagogue-parents',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/EducationalWork/PedagogueParents'))
      },
      {
        exact: true,
        path: '/pedagogue-teachers',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/EducationalWork/PedagogueTeachers'))
      },
      {
        exact: true,
        path: '/safety',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/EducationalWork/Safety'))
      },
      {
        exact: true,
        path: '/preventive-pupils',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/PreventiveWork/PreventivePupils'))
      },
      {
        exact: true,
        path: '/preventive-parents',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/PreventiveWork/PreventiveParents'))
      },
      {
        exact: true,
        path: '/preventive-teachers',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/PreventiveWork/PreventiveTeachers'))
      },
      {
        exact: true,
        path: '/recommendations',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/Recommendations'))
      },
      {
        exact: true,
        path: '/career-orientation',
        component: lazy(() => import('./views/main/PsychologicalService/SocialPedagogue/CareerOrientation'))
      },
      {
        exact: true,
        path: '/rules-of-behavior-on-the-internet',
        component: lazy(() => import('./views/main/PsychologicalService/RulesOfBehaviorOnTheInternet'))
      },
      {
        exact: true,
        path: '/internet-security',
        component: lazy(() => import('./views/main/PsychologicalService/InternetSecurity'))
      },
      {
        exact: true,
        path: '/teachers',
        component: lazy(() => import('./views/main/MethodicalWork/Teachers'))
      },
      {
        exact: true,
        path: '/subject-weeks',
        component: lazy(() => import('./views/main/MethodicalWork/MethodicalDecades'))
      },

      // Виховна робота
      {
        exact: true,
        path: '/kruty',
        component: lazy(() => import('./views/main/EducationalWork/Library/EducationalActivities/Kruty'))
      },
      {
        exact: true,
        path: '/take-care-of-the-book',
        component: lazy(() => import('./views/main/EducationalWork/Library/EducationalActivities/TakeCareOfTheBook'))
      },
      {
        exact: true,
        path: '/week-of-books',
        component: lazy(() => import('./views/main/EducationalWork/Library/EducationalActivities/WeekOfBooks'))
      },
      {
        exact: true,
        path: '/workshop',
        component: lazy(() => import('./views/main/EducationalWork/Library/EducationalActivities/Workshop'))
      },
      {
        exact: true,
        path: '/embroidered-shirts',
        component: lazy(() => import('./views/main/EducationalWork/Library/AestheticEducation/EmbroideredShirts'))
      },
      {
        exact: true,
        path: '/ukrainian-vespers',
        component: lazy(() => import('./views/main/EducationalWork/Library/AestheticEducation/UkrainianVespers'))
      },
      {
        exact: true,
        path: '/meeting-deleva',
        component: lazy(() => import('./views/main/EducationalWork/Library/AestheticEducation/MeetingDeleva'))
      },
      {
        exact: true,
        path: '/shevchenko-days',
        component: lazy(() => import('./views/main/EducationalWork/Library/AestheticEducation/ShevchenkoDays'))
      },

      {
        exact: true,
        path: '/museum-of-the-heavenly-hundred',
        component: lazy(() => import('./views/main/EducationalWork/Library/PatrioticEducation/MuseumOfTheHeavenlyHundred'))
      },
      {
        exact: true,
        path: '/info-library',
        component: lazy(() => import('./views/main/EducationalWork/Library/InfoLibrary'))
      },
      {
        exact: true,
        path: '/library-lessons',
        component: lazy(() => import('./views/main/EducationalWork/Library/LibraryLessons'))
      },
      {
        exact: true,
        path: '/monthly-school-libraries',
        component: lazy(() => import('./views/main/EducationalWork/Library/MonthlySchoolLibraries'))
      },
      {
        exact: true,
        path: '/library-exhibitions',
        component: lazy(() => import('./views/main/EducationalWork/Library/LibraryExhibitions'))
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
        path: '/results-of-education-quality-monitoring',
        component: lazy(() => import('./views/main/ResultsOfEducationQualityMonitoring'))
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
        component: lazy(() => import('./views/main/Bullying/Bullying'))
      },
      {
        exact: true,
        path: '/prevention-of-bullying',
        component: lazy(() => import('./views/main/Bullying/PreventionOfBullying'))
      },
      {
        exact: true,
        path: '/covid',
        component: lazy(() => import('./views/main/Covid'))
      },
      {
        exact: true,
        path: '/emergency',
        component: lazy(() => import('./views/main/Emergency'))
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
        path: '/rules-of-conduct',
        component: lazy(() => import('./views/info/About/RulesOfConduct'))
      },
      {
        exact: true,
        path: '/academic-integrity',
        component: lazy(() => import('./views/info/About/AcademicIntegrity'))
      },
      {
        exact: true,
        path: '/languages-of-the-educational-process',
        component: lazy(() => import('./views/info/About/LanguagesOfTheEducationalProcess'))
      },
      {
        exact: true,
        path: '/information-materials',
        component: lazy(() => import('./views/info/About/InformationMaterials'))
      },
      {
        exact: true,
        path: '/material-and-technical-support',
        component: lazy(() => import('./views/info/About/MaterialAndTechnicalSupport'))
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
        path: '/charity-fund',
        component: lazy(() => import('./views/add/CharityFund'))
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
