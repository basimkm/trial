import React from 'react';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import '../css/index.css';

const Gantt = () => {
  const data = [
    {
      TaskID: 1,
      TaskName: 'Product Concept',
      StartDate: new Date('02/03/2017'),
      EndDate: new Date('02/07/2017'),
      progress: 80,
      // subtasks: [
      //   {
      //     TaskID: 2,
      //     TaskName: 'a',
      //     StartDate: new Date('04/02/2017'),
      //     Duration: 4,
      //     Progress: 50,
      //   },
      //   {
      //     TaskID: 3,
      //     TaskName: 'b',
      //     StartDate: new Date('04/02/2017'),
      //     Duration: 4,
      //     Progress: 50,
      //   },
      //   {
      //     TaskID: 4,
      //     TaskName: 'c',
      //     StartDate: new Date('04/02/2017'),
      //     Duration: 4,
      //     Progress: 50,
      //   },
      // ],
    },
    {
      TaskID: 2,
      TaskName: 'Define the product and its usage',
      StartDate: new Date('02/10/2017'),
      EndDate: new Date('03/14/2017'),
      progress: 50,
    },
  ];
  const tasksettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    progress: 'progress',
    child: 'subtasks',
  };

  return (
    <GanttComponent
      dataSource={data}
      taskFields={tasksettings}
      height="450px"
    />
  );
};

export default Gantt;
