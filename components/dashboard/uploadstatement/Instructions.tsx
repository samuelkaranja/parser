export default function Instructions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-4">
        How to get your M-Pesa statement
      </h3>

      <ol className="space-y-3 text-sm text-gray-600 font-medium list-decimal list-inside">
        <li>Dial *234# on your M-Pesa registered phone</li>
        <li>Select "My Account"</li>
        <li>Select "M-Pesa Statement"</li>
        <li>Choose your preferred period (e.g., Last 3 months)</li>
        <li>Enter your email address to receive the statement</li>
        <li>Download the PDF or CSV file from your email</li>
        <li>Upload it here for instant analysis</li>
      </ol>
    </div>
  );
}
