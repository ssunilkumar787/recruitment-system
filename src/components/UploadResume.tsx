import React, { useState, useRef } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";

const UploadResume = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleFile = (file: File) => {
    setFile(file);
    uploadFile(file);
  };

  const uploadFile = (file: File) => {
    setIsUploading(true);
    const totalSize = file.size;
    let uploadedSize = 0;
    const chunkSize = totalSize / 100;

    const upload = setInterval(() => {
      uploadedSize += chunkSize;
      const progress = Math.round((uploadedSize / totalSize) * 100);
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(upload);
        setIsUploading(false);
        console.log("File uploaded:", file.name);
      }
    }, 50);
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  return (
    <Card className="mr-2 mt-2 ml-0 p-4">
      <div className="fs-4 fw-bold d-flex justify-content-center">
        Upload Ideal Candidate Resume
      </div>
      {isUploading ? (
        <div className="mt-3  drop-drag">
          <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />
        </div>
      ) : (
        <div
          className={`d-flex flex-column justify-content-center align-items-center drop-drag ${
            isDragging ? "bg-light" : ""
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span>Drag & Drop a File</span>
          <span>Or</span>
          <Button
            className="btn-file"
            onClick={() => fileInputRef.current?.click()}
          >
            Choose a File
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            style={{ display: "none" }}
          />
        </div>
      )}
      {file && !isUploading && (
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <span>{file.name}</span>
          <Button variant="outline-danger" size="sm" onClick={removeFile}>
            ×
          </Button>
        </div>
      )}
    </Card>
  );
};

export default UploadResume;
