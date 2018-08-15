import { Component } from '@angular/core';
import { FileHolder } from '../../../../lib/image-upload/image-upload.component';
import { UploadMetadata } from '../../../../lib/image-upload/before-upload.interface';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  private fileCounter = 0;

  onBeforeUpload = (metadata: UploadMetadata) => {
    console.log('onBeforeUpload : ', metadata);
    // if (this.fileCounter % 2 === 0) {
    //   metadata.abort = true;
    // } else {
    //   // mutate the file or replace it entirely - metadata.file
    //   metadata.url = 'http://somewhereelse.com';
    // }

    this.fileCounter++;
    return metadata;
  };
  onBeforeUploadMaxSize(file: File) {
    console.log('onBeforeUploadMaxSize : ', file);
  }
  onUploadFinished(file: FileHolder) {
    console.log('onUploadFinished :' , file);
  }

  onRemoved(file: FileHolder) {
    console.log('onRemoved :' , file);
  }

  onUploadStateChanged(state: boolean) {
    console.log('onUploadStateChanged :' , state);
  }
}
