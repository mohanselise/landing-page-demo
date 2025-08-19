'use client';

import { useSearchParams } from 'next/navigation';

export default function PreparePage() {
  const searchParams = useSearchParams();
  const uploadId = searchParams.get('uploadId');

  return (
    <div className="min-h-screen bg-selise-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl text-selise-black mb-6">
            Prepare Your Document for Signing
          </h1>
          <p className="font-body text-xl text-selise-grey">
            Add recipients, place signature fields, and send for signing
          </p>
          {uploadId && (
            <p className="font-body text-sm text-selise-grey mt-2">
              Upload ID: {uploadId}
            </p>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg border p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Document Preview */}
            <div>
              <h2 className="font-subhead text-2xl text-selise-black mb-6">
                Document Preview
              </h2>
              <div className="aspect-[8.5/11] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-body text-gray-500">Document preview will appear here</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div>
              <h2 className="font-subhead text-2xl text-selise-black mb-6">
                Signature Setup
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block font-subhead text-selise-black mb-2">
                    Recipients
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email addresses..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-selise-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-subhead text-selise-black mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Add a personal message..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-selise-blue focus:border-transparent"
                  />
                </div>

                <div className="bg-selise-blue-light border border-selise-blue/30 rounded-lg p-4">
                  <h3 className="font-subhead text-selise-black mb-2">
                    Next Steps:
                  </h3>
                  <ol className="font-body text-sm text-selise-grey space-y-1">
                    <li>1. Add recipient email addresses</li>
                    <li>2. Drag signature fields onto the document</li>
                    <li>3. Send for signing</li>
                  </ol>
                </div>

                <button className="w-full bg-selise-blue text-selise-white px-6 py-4 rounded-lg font-subhead text-lg hover:bg-selise-blue-hover transition-colors">
                  Continue to Field Placement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
