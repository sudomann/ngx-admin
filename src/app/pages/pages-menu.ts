import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Overview',
    icon: 'shopping-cart-outline',
    link: '/account/overview',
    home: true,
  },
  {
    title: 'Transactions',
    icon: 'home-outline',
    link: '/account/transactions',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/account/layout/stepper',
      },
      {
        title: 'List',
        link: '/account/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/account/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/account/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/account/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/account/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/account/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/account/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/account/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/account/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/account/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/account/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/account/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/account/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/account/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/account/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/account/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/account/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/account/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/account/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/account/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/account/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/account/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/account/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/account/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/account/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/account/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/account/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/account/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/account/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/account/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/account/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/account/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/account/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/account/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/account/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/account/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/account/auth/login',
      },
      {
        title: 'Register',
        link: '/account/auth/register',
      },
      {
        title: 'Request Password',
        link: '/account/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/account/auth/reset-password',
      },
    ],
  },
];
