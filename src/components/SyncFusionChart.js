import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
} from '@syncfusion/ej2-react-charts';

const SyncFusionChart = () => {
  const data = [
    { x: 'Jan', y: 30 },
    { x: 'Feb', y: 40 },
    { x: 'Mar', y: 45 },
    { x: 'Apr', y: 50 },
    { x: 'May', y: 55 },
  ];
  return (
    <div>
      <ChartComponent id="charts">
        <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            width={2}
            name="India"
            type="Line"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default SyncFusionChart;
