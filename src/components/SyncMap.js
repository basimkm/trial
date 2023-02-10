import React from 'react';
import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map';

const SyncMap = () => {
  const shapeData = [
    {
      name: 'Afghanistan',
      latitude: 33.93911,
      longitude: 67.709953,
    },
    {
      name: 'Albania',
      latitude: 41.153332,
      longitude: 20.168331,
    },
    {
      name: 'Algeria',
      latitude: 28.033886,
      longitude: 1.659626,
    },
    // Add more data as needed
  ];

  return (
    <div>
      <MapsComponent>
        <Inject services={[LayerDirective]} />
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            shapeSettings={{
              fill: 'grey',
              //   colorMapping: [
              //     {
              //       name: 'Afghanistan',
              //       color: 'blue',
              //     },
              //   ],
            }}
          ></LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
};

export default SyncMap;
