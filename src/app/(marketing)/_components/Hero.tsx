'use client';

import { useState, useCallback, DragEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const validateFile = (file: File): string | null => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 200 * 1024 * 1024; // 200MB

    if (!validTypes.includes(file.type)) {
      return 'Please upload a PDF, DOC, or DOCX file.';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 200MB.';
    }

    return null;
  };

  const handleFileUpload = useCallback(async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/sign/start', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const { uploadId } = await response.json();
      router.push(`/app/prepare?uploadId=${uploadId}`);
    } catch {
      setError('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, [router]);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, [handleFileUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <header className="bg-selise-white min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 py-12">
          {/* Top Content - Centered */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-selise-black leading-tight animate-fade-in-up">
                The e-signature solution that&rsquo;s actually free.
              </h1>
              
              <p className="font-body text-xl text-selise-grey text-comfortable max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Why pay monthly fees for basic e-signatures? Get unlimited signatures, legally binding documents, and enterprise-grade security—completely free. Drop your contract below to sign in 30 seconds.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <button 
                onClick={() => document.getElementById('file-input')?.click()}
                className="bg-selise-blue text-selise-white px-8 py-4 rounded-2xl font-subhead text-lg hover:bg-selise-blue-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span className="group-hover:animate-pulse">Try It Free Now</span>
              </button>
              
              <div className="flex items-center text-selise-grey font-body opacity-70 hover:opacity-100 transition-opacity duration-300">
                <span>Or just drag & drop your file</span>
                <svg className="w-5 h-5 ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Full Width Drop Zone */}
          <div className="w-full">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-2xl p-16 sm:p-24 text-center transition-all duration-500 w-full group
                ${isDragOver 
                  ? 'border-selise-blue bg-selise-blue-light shadow-2xl scale-[1.02] rotate-1' 
                  : 'border-selise-grey hover:border-selise-blue hover:shadow-lg hover:scale-[1.01]'
                }
                ${isUploading ? 'opacity-50 pointer-events-none' : 'cursor-pointer hover:bg-gray-50'}
              `}
              onClick={() => document.getElementById('file-input')?.click()}
            >
              <input
                id="file-input"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                aria-label="Choose file to upload"
              />

              <div className="space-y-8">
                <div className="mx-auto w-32 h-32 bg-selise-blue/10 rounded-full flex items-center justify-center group-hover:bg-selise-blue/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-16 h-16 text-selise-blue group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                {isUploading ? (
                  <div className="space-y-4">
                    <div className="font-subhead text-xl text-selise-blue">Uploading your document...</div>
                    <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3">
                      <div className="bg-selise-blue h-3 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="font-subhead text-2xl sm:text-3xl text-selise-black mb-2">
                      Drop your PDF here
                    </div>
                    <div className="font-body text-lg text-selise-grey">
                      or click anywhere in this area to choose a file
                    </div>
                    <div className="font-body text-sm text-selise-grey">
                      Supports PDF, DOC, DOCX up to 200MB
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Trust Badges - Moved below dropzone */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-selise-grey font-body">
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-600">
              <svg className="w-5 h-5 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              EU eIDAS & Swiss ZertES compliant
            </span>
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-700">
              <svg className="w-5 h-5 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Audit trail included
            </span>
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-800">
              <svg className="w-5 h-5 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              Mobile‑friendly
            </span>
          </div>

          {error && (
            <div className="bg-selise-crimson-light border border-selise-crimson text-selise-crimson px-6 py-4 rounded-2xl max-w-md mx-auto">
              {error}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
