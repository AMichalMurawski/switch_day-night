const globalOptions = [
  {
    properties: 'scale',
    value: 1,
    default: '1',
    description:
      'Value of scale for switch box. Defalut value 1 is compare with height 36.25px',
  },
];

const switchDayNight = [...globalOptions];

const switchOptions = switchType => {
  switch (switchType) {
    case 'day-night':
      return switchDayNight;
      break;
    default:
      return [];
  }
};