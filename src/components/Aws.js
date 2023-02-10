import React, { useState } from 'react';
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import {
  Inject,
  NavigationPane,
  AjaxSettings,
} from '@syncfusion/ej2-react-filemanager';

const Aws = () => {
  const [awsS3Service, setAwsS3Service] = useState(new AjaxSettings());

  return (
    <FileManagerComponent
      serviceUrl="https://..."
      ajaxSettings={{
        url: 'https://...',
        getImageUrl: (args) => {
          return args.path;
        },
      }}
      showThumbnail={false}
      height="450px"
      navigationPaneSettings={{
        visible: false,
      }}
    >
      <Inject services={[awsS3Service]} />
    </FileManagerComponent>
  );
};

export default Aws;
