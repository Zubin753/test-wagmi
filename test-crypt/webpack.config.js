const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Укажите точку входа вашего приложения
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Обрабатываем TypeScript и TSX файлы
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/, // Обрабатываем CSS файлы
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Обрабатываем изображения
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Расширения для разрешения
  },

  devtool: 'source-map', // Для отладки
  mode: 'development', // Режим разработки
  devServer: {
    static: './dist', // Папка для сервировки
    hot: true, // Включение горячей перезагрузки
  },
};