import {EventEmitter} from "events";
import { execFile, ChildProcess } from 'child_process';

class ClipboardEventListener extends EventEmitter {
  child: ChildProcess | null;

  constructor() {
    super();
    this.child = null;
  }

  startListening(): void {

    const {platform} = process;
    if (platform === 'win32') {
      this.child = execFile(path.join(__dirname, 'platform/clipboard-event-handler-win32.exe'));
    }
    else if (platform === 'linux') {
      this.child = execFile(path.join(__dirname, 'platform/clipboard-event-handler-linux'));
    }
    else if (platform === 'darwin') {
      this.child = execFile(path.join(__dirname, 'platform/clipboard-event-handler-mac'));
    }
    else {
      throw 'Not yet supported';
    }

    this.child.stdout.on('data', (data) => {
      if (data.trim() === 'CLIPBOARD_CHANGE') {
        this.emit('change');
      }
    });

  }

  stopListening(): boolean {
    const res = this.child.kill();
    return res;
  }

  on(eventName: 'change', listener: () => void): this;
}

export default new ClipboardEventListener();
