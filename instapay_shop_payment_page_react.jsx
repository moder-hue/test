export default function InstaPayShopPage() {
  const accountNumber = "0123456789012345";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      alert("Bank account number copied successfully!");
    } catch (err) {
      alert("Failed to copy the account number.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/85 backdrop-blur-2xl border border-pink-100 rounded-[32px] shadow-2xl p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-[28px] bg-pink-50 flex items-center justify-center shadow-lg overflow-hidden border border-pink-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="Shop Logo"
              className="w-16 h-16"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-black">
              Your Shop Name
            </h1>
            <p className="text-black/70 mt-2 text-sm">
              Pay quickly and securely using InstaPay.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-3xl p-5 shadow-inner">
          <p className="text-sm text-black/70 mb-2">Bank Account Number</p>
          <p className="text-xl font-mono tracking-wider break-all text-black">
            {accountNumber}
          </p>
        </div>

        <button
          onClick={copyToClipboard}
          className="mt-6 w-full bg-black hover:bg-neutral-900 transition-all duration-300 text-white font-semibold py-4 rounded-3xl shadow-lg hover:scale-[1.02] active:scale-[0.98] border border-pink-200"
        >
          Copy Account Number
        </button>

        <p className="mt-6 text-xs text-black/60 leading-relaxed">
          After copying the account number, open InstaPay and complete your transfer.
        </p>
      </div>
    </div>
  );
}

