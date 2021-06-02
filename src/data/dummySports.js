import Sport from '../models/sport';

const Sports = [
  new Sport(Math.random().toString(), 'Swimming', 15, '2021-05-30', 200),
  new Sport(Math.random().toString(), 'Walking', 45, '2021-05-29', 280),
  new Sport(Math.random().toString(), 'Walking', 15, '2021-05-27', 100),
  new Sport(Math.random().toString(), 'Running', 45, '2021-05-27', 100),
  new Sport(Math.random().toString(), 'Walking', 30, '2021-05-22', 200),
  new Sport(Math.random().toString(), 'Walking', 15, '2021-05-22', 280),
];

export default Sports;
