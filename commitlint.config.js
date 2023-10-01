module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 特性
        'fix', // 修复
        'docs', // 文档
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'test', // 测试
        'revert', // 回退
        'build', // 构建
        'ci', // 影响生成系统或外部依赖关系的更改
        'perf', // 性能优化
        'conf', // 配置文件修改
        'chore',
        'version',
      ],
    ],
  },
};
