import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
        <h1 className="text-2xl text-gray-700 mb-2">组件未找到</h1>
        <p className="text-lg text-gray-600 mb-6">
          抱歉，您访问的组件不存在或已被删除。
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          返回首页
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
