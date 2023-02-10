import {
  FileManagerComponent,
  NavigationPane,
  DetailsView,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import '../css/index.css';

const FileManager = () => {
  let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
  return (
    <div className="control-section">
      <FileManagerComponent
        id="file"
        ajaxSettings={{
          url: hostUrl + 'api/FileManager/FileOperations',
          uploadUrl: hostUrl + 'api/FileManager/Upload',
        }}
      >
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
};
export default FileManager;
