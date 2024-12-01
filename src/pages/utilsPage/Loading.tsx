import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="flex flex-col items-center space-y-6">
        <div className="animate-spin rounded-full border-t-4 border-white border-solid w-20 h-20 mb-6 shadow-lg"></div>
        <p className="text-2xl font-semibold text-white">加载中...</p>
        <p className="text-lg text-white opacity-75">
          请稍候，我们正在加载您的内容
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
