export default function StartPage() {
  return (
    <div className="min-h-screen bg-selise-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl text-selise-black mb-6">
          Document Upload Successful
        </h1>
        <p className="font-body text-xl text-selise-grey mb-8">
          Your document has been uploaded and is being processed. You will be redirected to the signing interface shortly.
        </p>
        <div className="bg-selise-blue-light border border-selise-blue/30 rounded-lg p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-selise-blue"></div>
            <span className="font-subhead text-selise-blue">Processing your document...</span>
          </div>
          <p className="font-body text-sm text-selise-grey">
            This usually takes just a few seconds
          </p>
        </div>
      </div>
    </div>
  );
}
