type RecordAudioType = {
    (stream: MediaStream): Promise<Blob>;
    stop: () => void;
    currentRecorder?: MediaRecorder;
};
export declare const recordAudio: RecordAudioType;
export {};
