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
    <header className="relative bg-gradient-to-br from-selise-white via-selise-blue-light/20 to-selise-grey-light/40 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-selise-blue/15 to-selise-lime-green/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-selise-lavender/15 to-selise-blue/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-selise-blue/8 to-selise-lime-green/8 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--selise-blue) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16 py-12">
          {/* Top Content - Enhanced */}
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-selise-lime-green/10 border border-selise-lime-green/30 text-selise-poly-green px-4 py-2 rounded-full text-sm font-subhead animate-fade-in-up">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Used by 10,000+ companies worldwide</span>
            </div>

            <div className="space-y-8">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-selise-black leading-[0.9] animate-fade-in-up animation-delay-200">
                The e-signature solution that&rsquo;s 
                <span className="relative inline-block ml-2">
                  <span className="relative z-10 text-selise-blue font-bold">
                    actually free
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-selise-lime-green/60 animate-pulse" viewBox="0 0 200 12" fill="none">
                    <path d="M2 6c20-2 40-3 60-2s40 2 60 1 40-2 60-1" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="font-body text-xl sm:text-2xl text-selise-grey max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
                Why pay monthly fees for basic e-signatures? Get <strong className="text-selise-black">unlimited signatures</strong>, legally binding documents, and enterprise-grade security—completely free. Drop your contract below to sign in under 2 minutes.
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
              <button 
                onClick={() => document.getElementById('file-input')?.click()}
                className="group relative bg-gradient-to-r from-selise-blue to-selise-blue-dark text-selise-white px-10 py-5 rounded-2xl font-subhead text-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-selise-blue focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-selise-blue-dark to-selise-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Try It Free Now
                </span>
              </button>
              
              <div className="flex items-center text-selise-grey font-body opacity-70 hover:opacity-100 transition-all duration-300 group">
                <span className="group-hover:scale-105 transition-transform duration-300">Or just drag & drop your file</span>
                <svg className="w-5 h-5 ml-2 text-selise-blue animate-bounce-x group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Drop Zone */}
          <div className="w-full max-w-5xl mx-auto">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-3xl p-12 sm:p-20 text-center transition-all duration-500 w-full group backdrop-blur-sm
                ${isDragOver 
                  ? 'border-selise-blue bg-gradient-to-br from-selise-blue-light/60 to-selise-lime-green-light/40 shadow-2xl scale-[1.02] rotate-1' 
                  : 'border-selise-grey/60 bg-white/80 hover:border-selise-blue hover:bg-white/90 hover:shadow-xl hover:scale-[1.01]'
                }
                ${isUploading ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
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

              <div className="space-y-10">
                <div className="mx-auto w-36 h-36 bg-gradient-to-br from-selise-blue/10 to-selise-lime-green/10 rounded-full flex items-center justify-center group-hover:from-selise-blue/20 group-hover:to-selise-lime-green/20 transition-all duration-500 group-hover:scale-110 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-selise-blue/5 to-selise-lime-green/5 rounded-full animate-pulse"></div>
                  <svg className="relative w-20 h-20 text-selise-blue group-hover:animate-bounce transition-colors duration-300 group-hover:text-selise-lime-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                {isUploading ? (
                  <div className="space-y-6">
                    <div className="font-subhead text-2xl text-selise-blue">Uploading your document...</div>
                    <div className="w-full max-w-md mx-auto bg-selise-grey-light rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-selise-blue to-selise-lime-green h-4 rounded-full animate-pulse transition-all duration-1000" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-selise-grey font-body">Processing your file securely...</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="font-subhead text-3xl sm:text-4xl text-selise-black mb-2 group-hover:text-selise-blue transition-colors duration-300">
                      Drop your PDF here
                    </div>
                    <div className="font-body text-xl text-selise-grey group-hover:text-selise-black transition-colors duration-300">
                      or click anywhere in this area to choose a file
                    </div>
                    <div className="inline-flex items-center gap-2 bg-selise-grey-light/50 px-4 py-2 rounded-full font-body text-sm text-selise-grey">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Supports PDF, DOC, DOCX up to 200MB
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-sm text-selise-grey font-body max-w-4xl mx-auto">
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-800 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40">
              <div className="w-8 h-8 bg-selise-lime-green/10 rounded-full flex items-center justify-center group-hover:bg-selise-lime-green/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="font-subhead">EU eIDAS & Swiss ZertES compliant</span>
            </span>
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-900 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40">
              <div className="w-8 h-8 bg-selise-lime-green/10 rounded-full flex items-center justify-center group-hover:bg-selise-lime-green/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <span className="font-subhead">Audit trail included</span>
            </span>
            <span className="flex items-center gap-3 hover:text-selise-lime-green transition-colors duration-300 group animate-fade-in-up animation-delay-1000 bg-white/70 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40">
              <div className="w-8 h-8 bg-selise-lime-green/10 rounded-full flex items-center justify-center group-hover:bg-selise-lime-green/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-selise-lime-green group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <span className="font-subhead">Mobile‑friendly</span>
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
