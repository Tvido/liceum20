const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'НАВІГАЦІЯ ПО САЙТУ',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'main',
          title: 'ГОЛОВНА',
          type: 'item',
          url: '/main',
          icon: 'feather icon-home'
        },
        {
          id: 'methodical-work',
          title: 'Методична робота',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'methodological-associations',
              title: "Методичні об'єднання",
              type: 'collapse',
              children: [
                {
                  id: 'elementary-school',
                  title: 'Початкові класи',
                  type: 'item',
                  url: '/elementary-school'
                },
                {
                  id: 'humanitarian-disciplines',
                  title: 'Гуманітарні дисципліни',
                  type: 'item',
                  url: '/humanitarian-disciplines'
                },
                {
                  id: 'social-disciplines',
                  title: 'Суспільні дисципліни',
                  type: 'item',
                  url: '/social-disciplines'
                },
                {
                  id: 'mathematics-physics-computer-science',
                  title: 'Математика, фізика, інформатика',
                  type: 'item',
                  url: '/mathematics-physics-computer-science'
                },
                {
                  id: 'natural-disciplines',
                  title: 'Природничі дисципліни',
                  type: 'item',
                  url: '/natural-disciplines'
                },
                {
                  id: 'foreign-languages',
                  title: 'Іноземні мови',
                  type: 'item',
                  url: '/foreign-languages'
                },
                {
                  id: 'aesthetic-disciplines',
                  title: 'Естетичні дисципліни',
                  type: 'item',
                  url: '/aesthetic-disciplines'
                },
                {
                  id: 'physical-culture-protection-of-ukraine-basics-of-health',
                  title: "Фізична культура, захист України, основи здоров'я",
                  type: 'item',
                  url: '/physical-culture-protection-of-ukraine-basics-of-health'
                },
                {
                  id: 'class-leaders',
                  title: 'Класні керівники',
                  type: 'item',
                  url: '/class-leaders'
                }
              ]
            },
            {
              id: 'certification',
              title: 'Атестація',
              type: 'item',
              url: '/certification'
            },
            {
              id: 'courses',
              title: 'Курси',
              type: 'item',
              url: '/courses'
            },
            {
              id: 'teachers',
              title: 'Педагоги',
              type: 'item',
              url: '/teachers'
            },
            {
              id: 'subject-weeks',
              title: 'Предметні тижні',
              type: 'item',
              url: '/subject-weeks'
            },
            {
              id: 'methodical-decades',
              title: 'Методичні декади',
              type: 'item',
              url: '/methodical-decades'
            }
          ]
        },
        {
          id: 'educational-work',
          title: 'Виховна робота',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'library',
              title: 'Бібліотека',
              type: 'collapse',
              children: [
                {
                  id: 'educational-activities',
                  title: 'Виховні заходи',
                  type: 'collapse',
                  children: [
                    {
                      id: 'kruty',
                      title: 'Крути: героїзм молодих',
                      type: 'item',
                      url: '/kruty'
                    },
                    {
                      id: 'take-care-of-the-book',
                      title: 'Бережіть книгу, вона відкриває світ',
                      type: 'item',
                      url: '/take-care-of-the-book'
                    },
                    {
                      id: 'week-of-books',
                      title: 'Тиждень дитячої та юнацької книги',
                      type: 'item',
                      url: '/week-of-books'
                    },
                    {
                      id: 'workshop',
                      title: 'Воркшоп',
                      type: 'item',
                      url: '/workshop'
                    }
                  ]
                },
                {
                  id: 'aesthetic-education',
                  title: 'Естетичне виховання',
                  type: 'collapse',
                  children: [
                    {
                      id: 'embroidered-shirts',
                      title: 'Вишиванки вчителів',
                      type: 'item',
                      url: '/embroidered-shirts'
                    },
                    {
                      id: 'ukrainian-vespers',
                      title: 'Українські вечорниці',
                      type: 'item',
                      url: '/ukrainian-vespers'
                    },
                    {
                      id: 'meeting-deleva',
                      title: 'Зустріч вчителів у с. Делеві',
                      type: 'item',
                      url: '/meeting-deleva'
                    },
                    {
                      id: 'shevchenko-days',
                      title: 'Шевченківські дні',
                      type: 'item',
                      url: '/shevchenko-days'
                    }
                  ]
                },
                {
                  id: 'patriotic-education',
                  title: 'Патріотичне виховання',
                  type: 'collapse',
                  children: [
                    {
                      id: 'museum-of-the-heavenly-hundred',
                      title: 'Музей Небесної Сотні',
                      type: 'item',
                      url: '/museum-of-the-heavenly-hundred'
                    },
                    {
                      id: 'manyava-skete',
                      title: 'Манявський скит',
                      type: 'item',
                      url: '/manyava-skete'
                    }
                  ]
                },
                {
                  id: 'all-ukrainian-monthly',
                  title: 'Всеукраїнський місячник',
                  type: 'item',
                  url: '/all-ukrainian-monthly'
                },
                {
                  id: 'library-lessons',
                  title: 'Бібліотечні уроки',
                  type: 'item',
                  url: '/library-lessons'
                }
              ]
            },
            {
              id: 'naotsbsou',
              title: 'НАУ ДПС',
              type: 'item',
              url: '/naotsbsou'
            },
            {
              id: 'german-unification-day',
              title: "День об'єднання Німеччини",
              type: 'item',
              url: '/german-unification-day'
            },
            {
              id: 'dup-2019',
              title: 'ДЮП-2019',
              type: 'item',
              url: '/dup-2019'
            },
            {
              id: 'council-of-student-self-government',
              title: 'Рада учнівського самоврядування',
              type: 'item',
              url: '/council-of-student-self-government'
            },
            {
              id: 'musical-art',
              title: 'Музичне мистецтво',
              type: 'item',
              url: '/musical-art'
            },
            {
              id: 'theater',
              title: 'Театр',
              type: 'item',
              url: '/theater'
            },
            {
              id: 'circles',
              title: 'Гуртки',
              type: 'item',
              url: '/circles'
            },
            {
              id: 'career-guidance-work',
              title: 'Профорієнтаційна робота',
              type: 'item',
              url: '/career-guidance-work'
            },
            {
              id: 'charity-actions',
              title: 'Благодійні акції',
              type: 'item',
              url: '/charity-actions'
            },
            {
              id: 'school-projects',
              title: 'Шкільні проєкти',
              type: 'item',
              url: '/school-projects'
            }
          ]
        },
        {
          id: 'psychological-service',
          title: 'Психологічна служба',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'practical-psychologist',
              title: 'Практичний психолог',
              type: 'collapse',
              children: [
                {
                  id: 'maria-stepanivna-tomin',
                  title: 'Томин Марія Степанівна',
                  type: 'item',
                  url: '/maria-stepanivna-tomin'
                },
                {
                  id: 'psychologist-pupils',
                  title: 'Учні',
                  type: 'item',
                  url: '/psychologist-pupils'
                },
                {
                  id: 'psychologist-parents',
                  title: 'Батьки',
                  type: 'item',
                  url: '/psychologist-parents'
                },
                {
                  id: 'psychologist-teachers',
                  title: 'Учителі',
                  type: 'item',
                  url: '/psychologist-teachers'
                }
              ]
            },
            {
              id: 'social-pedagogue',
              title: 'Соціальний педагог',
              type: 'collapse',
              children: [
                {
                  id: 'iryna-ivanivna-letsyn',
                  title: 'Лецин Ірина Іванівна',
                  type: 'item',
                  url: '/iryna-ivanivna-letsyn'
                },
                {
                  id: 'educational-work',
                  title: 'Просвітницька робота',
                  type: 'collapse',
                  children: [
                    {
                      id: 'pedagogue-pupils',
                      title: 'Учні',
                      type: 'item',
                      url: '/pedagogue-pupils'
                    },
                    {
                      id: 'pedagogue-parents',
                      title: 'Батьки',
                      type: 'item',
                      url: '/pedagogue-parents'
                    },
                    {
                      id: 'pedagogue-teachers',
                      title: 'Учителі',
                      type: 'item',
                      url: '/pedagogue-teachers'
                    }
                  ]
                },
                {
                  id: 'preventive-work',
                  title: 'Профілактична робота',
                  type: 'collapse',
                  children: [
                    {
                      id: 'preventive-pupils',
                      title: 'Учні',
                      type: 'item',
                      url: '/preventive-pupils'
                    },
                    {
                      id: 'preventive-parents',
                      title: 'Батьки',
                      type: 'collapse',
                      children: [
                        {
                          id: 'prevention-of-suicides',
                          title: 'Профілактика суїцидів',
                          type: 'item',
                          url: '/prevention-of-suicides'
                        }
                      ]
                    },
                    {
                      id: 'preventive-teachers',
                      title: 'Учителі',
                      type: 'item',
                      url: '/preventive-teachers'
                    }
                  ]
                },
                {
                  id: 'cooperation-with-the-public',
                  title: 'Співпраця з громадськістю',
                  type: 'item',
                  url: '/cooperation-with-the-public'
                },
                {
                  id: 'recommendations',
                  title: 'Рекомендації',
                  type: 'item',
                  url: '/recommendations'
                },
                {
                  id: 'career-orientation',
                  title: 'Профорієнтація',
                  type: 'item',
                  url: '/career-orientation'
                }
              ]
            },
            {
              id: 'rules-of-behavior-on-the-internet',
              title: 'Правила поведінки в інтернеті',
              type: 'item',
              url: '/rules-of-behavior-on-the-internet'
            },
            {
              id: 'internet-security',
              title: 'Безпека в інтернеті',
              type: 'item',
              url: '/internet-security'
            }
          ]
        },
        {
          id: 'service-territory',
          title: 'Територія обслуговування',
          type: 'item',
          url: '/service-territory',
          icon: 'feather icon-server'
        },
        {
          id: 'rules-of-admission',
          title: 'Правила прийому до ЗО',
          type: 'item',
          url: '/rules-of-admission',
          icon: 'feather icon-map'
        },
        {
          id: 'educational-programs',
          title: 'Освітні програми',
          type: 'item',
          url: '/educational-programs',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'evaluation-criteria',
          title: 'Критерії оцінювання',
          type: 'item',
          url: '/evaluation-criteria',
          icon: 'feather icon-server'
        },
        {
          //
          id: 'annual-plan',
          title: 'Річний план',
          type: 'item',
          url: '/annual-plan',
          icon: 'feather icon-map'
        },
        {
          id: 'annual-report',
          title: 'Річний звіт',
          type: 'item',
          url: '/annual-report',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'estimates-and-financial-statements',
          title: 'Кошторис та фінансова звітність',
          type: 'item',
          url: '/estimates-and-financial-statements',
          icon: 'feather icon-server'
        },
        {
          id: 'food',
          title: 'Харчування',
          type: 'item',
          url: '/food',
          icon: 'feather icon-map'
        },
        {
          id: 'bullying',
          title: 'Булінг',
          type: 'item',
          url: '/bullying',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'covid',
          title: 'COVID',
          type: 'item',
          url: '/covid',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }
      ]
    },
    {
      id: 'information',
      title: 'ІНФОРМАЦІЯ',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'lessons-schedule',
          title: 'Розклад занять',
          type: 'item',
          url: '/lessons-schedule',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'contacts',
          title: 'Контакти',
          type: 'item',
          url: '/contacts',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'about-the-lyceum',
          title: 'Про Ліцей',
          type: 'collapse',
          icon: 'feather icon-menu',
          children: [
            {
              id: 'license',
              title: 'Ліцензія',
              type: 'item',
              url: '/license'
            },
            {
              id: 'history',
              title: 'Історія',
              type: 'item',
              url: '/history'
            },
            {
              id: 'administration',
              title: 'Адміністрація',
              type: 'item',
              url: '/administration'
            },
            {
              id: 'strategy',
              title: 'Стратегія',
              type: 'item',
              url: '/strategy'
            },
            {
              id: 'regulations',
              title: 'Статут',
              type: 'item',
              url: '/regulations'
            },
            {
              id: 'internal-system-of-ensuring-the-quality-of-education',
              title: 'Внутрішня система забезпечення якості освіти',
              type: 'item',
              url: '/internal-system-of-ensuring-the-quality-of-education'
            },
            {
              id: 'rules-of-conduct',
              title: 'Правила поведінки',
              type: 'item',
              url: '/rules-of-conduct'
            },
            {
              id: 'academic-integrity',
              title: 'Академічна доброчесність',
              type: 'item',
              url: '/academic-integrity'
            },
            {
              id: 'languages-of-the-educational-process',
              title: 'Мови освітнього процесу',
              type: 'item',
              url: '/languages-of-the-educational-process'
            },
            {
              id: 'movement-scheme',
              title: 'Схема руху',
              type: 'item',
              url: '/movement-scheme'
            },
            {
              id: 'material-and-technical-support',
              title: 'Матеріально технічне забезпечення',
              type: 'item',
              url: '/material-and-technical-support'
            },
            {
              id: 'vacancies',
              title: 'Вакансії',
              type: 'item',
              url: '/vacancies'
            }
          ]
        }
      ]
    },
    {
      id: 'additionally',
      title: 'ДОДАТКОВО',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'terms-of-availability',
          title: 'Умови доступності ЗО',
          type: 'item',
          url: '/terms-of-availability',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'memorandum-on-cooperation',
          title: 'Меморандум про співпрацю',
          type: 'item',
          url: '/memorandum-on-cooperation',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
        {
          id: 'additional-educational-services',
          title: 'Додаткові освітні послуги',
          type: 'item',
          url: '/additional-educational-services',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }
      ]
    },
    {
      title: '',
      type: 'group'
    }
  ]
};

export default menuItems;