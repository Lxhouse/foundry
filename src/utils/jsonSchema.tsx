import { PAGE_LIST } from '@/jsonSchema/projects';

export const saveJsonSchema = (jsonSchema: Record<string, any>) => {
  const _jsonSchema = PAGE_LIST.filter((p) => p.id !== jsonSchema.id).concat([
    jsonSchema,
  ]);
  // 将 jsonSchema 转换为 JSON 字符串
  const jsonString = JSON.stringify(_jsonSchema, null, 2); // 传入 null 和 2 使 JSON 格式化（可选）

  // 创建 Blob 对象，指定文件类型为 application/json
  const blob = new Blob([jsonString], { type: 'application/json' });

  // 创建指向 Blob 对象的 URL
  const url = URL.createObjectURL(blob);

  // 创建一个 <a> 元素并模拟点击来触发下载
  const a = document.createElement('a');
  a.href = url;
  a.download = 'schema.json'; // 设置下载的文件名
  a.click();

  // 释放 URL 对象
  URL.revokeObjectURL(url);
};
